"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Marker {
  id: number;
  top: string;
  left: string;
  x: number;
  y: number;
  link: string;
}

const Map: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [markers, setMarkers] = useState<Marker[]>([
    { id: 1, top: '30%', left: '20%', x: 0, y: 0, link: '/home/marker1' },
    { id: 2, top: '50%', left: '40%', x: 0, y: 0, link: '/home/marker2' },
    { id: 3, top: '50%', left: '60%', x: 0, y: 0, link: '/home/marker3' },
  ]);

  const positionMarkers = () => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const containerRect = container.getBoundingClientRect();
    const imageAspectRatio = image.naturalWidth / image.naturalHeight;
    const containerAspectRatio = containerRect.width / containerRect.height;

    let displayWidth, displayHeight, offsetX, offsetY;

    if (imageAspectRatio > containerAspectRatio) {
      // Image is wider than the container
      displayHeight = containerRect.height;
      displayWidth = displayHeight * imageAspectRatio;
      offsetX = (displayWidth - containerRect.width) / 2;
      offsetY = 0;
    } else {
      // Image is taller than the container
      displayWidth = containerRect.width;
      displayHeight = displayWidth / imageAspectRatio;
      offsetX = 0;
      offsetY = (displayHeight - containerRect.height) / 2;
    }

    const updatedMarkers = markers.map(marker => {
      const markerX = parseFloat(marker.left) / 100 * displayWidth - offsetX;
      const markerY = parseFloat(marker.top) / 100 * displayHeight - offsetY;
      return { ...marker, x: markerX, y: markerY };
    });

    setMarkers(updatedMarkers);
  };

  useEffect(() => {
    const handleResize = () => {
      positionMarkers();
    };

    window.addEventListener('resize', handleResize);

    // Initial positioning
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [markers]);

  return (
    <div className="relative w-4/5 h-full overflow-hidden" ref={containerRef}>
      <img
        src="/images/map.svg"
        alt="Map"
        className="absolute object-cover h-[100%] w-[100%]"
        ref={imageRef}
      />

      {markers.map(marker => (
        <a
          key={marker.id}
          href={marker.link}
          className="absolute flex items-center justify-center text-white font-bold rounded-xl bg-[#ec9bfc] border-[5px] border-[#e466fc] transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"
          style={{ left: `${marker.x}px`, top: `${marker.y}px` }}
        >
          {marker.id}
        </a>
      ))}
    </div>
  );
};


export default Map;
