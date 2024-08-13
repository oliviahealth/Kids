import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface Activity {
  name: string;
  icon: string;
  link: string;
}

interface Marker {
  name: string;
  id: string;

  x: number;
  y: number;

  backgroundColor: string;
  borderColor: string;

  activitiesBackgroundColor: string;
  activitiesBorderColor: string;

  activities: Activity[];
}

interface MapProps {
  image: string;
  markers: Marker[];
  height: number;
  width: number;
}

const Map: React.FC<MapProps> = ({ image, markers, height, width }) => {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

  const handleMarkerClick = (marker: Marker) => {
    setSelectedMarker(marker);
  };

  const closeActivityFrame = () => {
    setSelectedMarker(null);
  };

  return (
    <div style={{ position: 'relative', width, height }}>
      <TransformWrapper>
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%" }}
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
                onClick={() => handleMarkerClick(marker)}
              >
                <div className="flex items-center justify-center h-full w-full">
                  <span className="text-white font-bold">{marker.id}</span>
                </div>
                <span className="text-white font-extrabold drop-shadow-xl">{marker.name}</span>
              </div>
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>

      {selectedMarker && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 w-full mt-40 m-16">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Select Your Activity</h2>
              <button onClick={closeActivityFrame} className="text-gray-500 hover:text-gray-700">
                X
              </button>
            </div>
            <p className="text-lg text-gray-600 mb-8">Earn stars upon completion!</p>
            <div className="grid grid-cols-4 gap-4">
              {selectedMarker.activities.map((activity, index) => (
                <a key={index} href={activity.link} style={{ backgroundColor: selectedMarker.activitiesBackgroundColor, borderColor: selectedMarker.activitiesBorderColor }} className="border-4 rounded-2xl flex flex-col items-center justify-center gap-8">
                  <span className="text-xl font-medium text-center mt-4 mb-8">{activity.name}</span>
                  <img src={activity.icon} alt={activity.name} className="w-32 h-32 mb-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
