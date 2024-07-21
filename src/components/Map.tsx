"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Marker {
  id: number;
  top: string;
  left: string;
  x: number;
  y: number;
  link: string;
  backgroundColor: string;
  borderColor: string;
  name: string;
}

interface MarkerProps {
  marker: Marker;
  scale: number;
}

interface MapProps {
  map: string;
  markers: Omit<Marker, 'x' | 'y'>[];
}

const SmoothPath: React.FC<{ markers: Marker[]; scale: number }> = ({ markers, scale }) => {
  if (markers.length < 2) return null;

  const path = markers.reduce((acc, marker, index, array) => {
    if (index === 0) {
      return `M ${marker.x},${marker.y}`;
    }

    const prev = array[index - 1];
    const next = array[index + 1];

    const controlPoint1 = {
      x: prev.x + (marker.x - prev.x) * 0.5,
      y: prev.y + (marker.y - prev.y) * 0.1
    };

    const controlPoint2 = {
      x: marker.x - (next ? next.x - marker.x : marker.x - prev.x) * 0.5,
      y: marker.y - (next ? next.y - marker.y : marker.y - prev.y) * 0.1
    };

    return `${acc} C ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${marker.x},${marker.y}`;
  }, '');

  return (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth={15 / scale}
        strokeDasharray={`${30 / scale},${20 / scale}`}
      />
    </svg>
  );
};

const MemorizedMarker: React.FC<MarkerProps> = React.memo(({ marker, scale }) => (
  <div className="absolute transform -translate-x-1/2 -translate-y-1/2"
    style={{
      left: `${marker.x}px`,
      top: `${marker.y}px`,
    }}>
    <Link
      href={marker.link}
      className="flex items-center justify-center text-white font-bold rounded-full"
      style={{
        width: `${40 / scale}px`,
        height: `${40 / scale}px`,
        fontSize: `${16 / scale}px`,
        backgroundColor: marker.backgroundColor,
        borderColor: "white",
        borderWidth: `${2 / scale}px`,
        borderStyle: 'solid',
      }}
    >
      {marker.id}
    </Link>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 whitespace-nowrap text-center">
      <span className="bg-black bg-opacity-40 px-3 py-1 rounded text-white font-bold"
        style={{ fontSize: `${15 / scale}px` }}>
        {marker.name}
      </span>
    </div>
  </div>
));

MemorizedMarker.displayName = 'MemorizedMarker';

const Map: React.FC<MapProps> = ({ map, markers: initialMarkers }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [markers, setMarkers] = useState<Marker[]>(
    initialMarkers.map(marker => ({ ...marker, x: 0, y: 0 }))
  );

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const positionMarkers = useCallback(() => {
    const container = containerRef.current;
    if (!container || imageSize.width === 0 || imageSize.height === 0) return;

    const containerRect = container.getBoundingClientRect();
    const imageAspectRatio = imageSize.width / imageSize.height;
    const containerAspectRatio = containerRect.width / containerRect.height;
    let displayWidth, displayHeight, offsetX, offsetY;

    if (imageAspectRatio > containerAspectRatio) {
      displayHeight = containerRect.height;
      displayWidth = displayHeight * imageAspectRatio;
      offsetX = (displayWidth - containerRect.width) / 2;
      offsetY = 0;
    } else {
      displayWidth = containerRect.width;
      displayHeight = displayWidth / imageAspectRatio;
      offsetX = 0;
      offsetY = (displayHeight - containerRect.height) / 2;
    }

    const updatedMarkers = markers.map(marker => {
      const markerX = (parseFloat(marker.left) / 100) * displayWidth - offsetX;
      const markerY = (parseFloat(marker.top) / 100) * displayHeight - offsetY;
      return { ...marker, x: markerX, y: markerY };
    });

    setMarkers(updatedMarkers);
  }, [markers, imageSize]);

  useEffect(() => {
    positionMarkers();
  }, [positionMarkers, imageSize]);

  useEffect(() => {
    const handleResize = () => {
      positionMarkers();
      setScale(1);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [positionMarkers]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const newX = e.clientX - startPosition.x;
    const newY = e.clientY - startPosition.y;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prevScale => Math.min(Math.max(prevScale * delta, 0.5), 3));
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
  };

  return (
    <div
      className="relative w-3/4 h-full overflow-hidden cursor-move"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          transition: dragging ? 'none' : 'transform 0.3s ease-out',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Image
          src={map}
          alt="Map"
          fill
          style={{ objectFit: 'cover' }}
          onLoad={handleImageLoad}
          priority
          draggable={false}
        />
        <SmoothPath markers={markers} scale={scale} />
        {markers.map((marker) => (
          <MemorizedMarker key={marker.id} marker={marker} scale={scale} />
        ))}
      </div>
    </div>
  );
};

export default Map;