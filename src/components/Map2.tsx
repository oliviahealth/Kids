import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
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

interface Activity {
    name: string;
    icon: string;
}

interface MapProps {
    image: string;
    markers: Marker[];
    height: number;
    width: number;
}

const ActivityFrame: React.FC<{ activities: Activity[], onClose: () => void }> = ({ activities, onClose }) => {
    return (
        <div className="bg-white h-full w-full rounded-2xl p-8 z-20">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold">Select Your Activity</h3>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
            </div>
            <p className="text-lg text-gray-600 mb-4">Earn stars upon completion!</p>
            <div className="grid grid-cols-3 gap-2">
                {activities.map((activity, index) => (
                    <div key={index} className="bg-pink-100 rounded-2xl p-2 flex flex-col items-center">
                        <img src={activity.icon} alt={activity.name} className="w-8 h-8 mb-1" />
                        <span className="text-xs text-center">{activity.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Map: React.FC<MapProps> = ({ image, markers, height, width }) => {
    const [showActivityFrame, setShowActivityFrame] = useState(false);

    const activities: Activity[] = [
        { name: 'Meditation', icon: '/path-to-meditation-icon.svg' },
        { name: 'Walking Journal', icon: '/path-to-walking-journal-icon.svg' },
        { name: 'Typing Hero', icon: '/path-to-typing-hero-icon.svg' },
        // Add more activities as needed
    ];

    return (
        <div style={{ position: 'relative', width, height }}>
            <TransformWrapper>
                {({ zoomToElement, resetTransform }) => (
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
                                <div
                                    id={marker.id}
                                    key={marker.id}
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
                                    onClick={() => {
                                        zoomToElement(marker.id)
                                        setShowActivityFrame(true)
                                    }}
                                >
                                    <div className="flex items-center justify-center h-full w-full">
                                        <span className="text-white font-bold">{marker.id}</span>
                                    </div>
                                    <span className="text-white font-extrabold drop-shadow-xl">{marker.name}</span>
                                </div>
                            ))}
                        </div>
                    </TransformComponent>
                )}
            </TransformWrapper>
            {
                showActivityFrame && (
                    <div className="h-full w-full absolute inset-0 bg-black bg-opacity-50 z-10 p-32">
                        <ActivityFrame
                            activities={activities}
                            onClose={() => setShowActivityFrame(false)}
                        />
                    </div>
                )
            }
        </div >
    );
};

export default Map;