import React from 'react';
import { TransformWrapper, TransformComponent, KeepScale } from 'react-zoom-pan-pinch';
import Link from 'next/link';

interface Marker {
    id: string;
    x: number;
    y: number;
    link: string;
    backgroundColor: string;
    borderColor: string;
    name: string;
}

interface MapProps {
    image: string;
    markers: Marker[];
    height: number;
    width: number;
}

const Map: React.FC<MapProps> = ({ image, markers, height, width }) => {
    return (
        <TransformWrapper>
            <TransformComponent
                wrapperStyle={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <div style={{ position: 'relative', width, height }}>
                    <img src={image} alt="Map" className="w-full h-full" />
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        viewBox={`0 0 100 100`}
                        preserveAspectRatio="none"
                    >
                        {markers.map((marker, index) => {
                            if (index === 0) return null;
                            const start = markers[index - 1];
                            const end = marker;
                            const midX = (start.x + end.x) / 2;
                            const pathD = `M ${start.x} ${start.y} C ${midX} ${start.y}, ${midX} ${end.y}, ${end.x} ${end.y}`;
                            return (
                                <path
                                    key={`path-${marker.id}`}
                                    d={pathD}
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.8)"
                                    strokeWidth="0.75"
                                    strokeDasharray="1 2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            );
                        })}
                    </svg>
                    {markers.map((marker) => (
                        <Link key={marker.id} href={marker.link}>
                            <div
                                className="absolute"
                                style={{
                                    top: `${marker.y}%`,
                                    left: `${marker.x}%`,
                                    transform: "translate(-50%, -50%)",
                                    backgroundColor: marker.backgroundColor,
                                    borderColor: marker.borderColor,
                                    borderWidth: 2,
                                    borderStyle: "solid",
                                    borderRadius: "50%",
                                    width: 40,
                                    height: 40,
                                    cursor: "pointer",
                                    zIndex: 1,
                                }}
                            >
                                <div className="flex items-center justify-center h-full w-full">
                                    <span className="text-white font-bold">{marker.id}</span>
                                </div>
                                <span className="text-white font-extrabold drop-shadow-xl">{marker.name}</span>
                            </div>

                        </Link>
                    ))}
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
};

export default Map;