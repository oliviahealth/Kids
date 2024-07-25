import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

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
    <div style={{ position: 'relative', width, height }}>
      <TransformWrapper>
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%" }}
        >
          <div style={{ position: 'relative', width, height }}>
            <img src={image} alt="Map" className="w-full h-full" />
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
                onClick={() => {
                  window.location.href = marker.link;
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
      </TransformWrapper>
    </div>
  );
};

export default Map;
