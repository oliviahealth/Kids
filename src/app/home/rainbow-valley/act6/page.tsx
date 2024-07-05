"use client";
import { ReactNode, useState } from "react";
import RainbowValleyActivity6Page1 from "./components/Page1";
import RainbowValleyActivity6Page2 from "./components/Page2";
import RainbowValleyActivity6Page3 from "./components/Page3";
import RainbowValleyActivity6Page9 from "./components/Page9";
import "./../rainbowValleyModule.css";

const MeditationActivity: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pagesData.length - 1) setCurrentPage(currentPage + 1);
  };

  const MapContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className="rainbow-valley-map-container grid grid-cols-12 grid-rows-12 h-full">
      <div className="row-start-2 row-end-12 col-start-2 col-end-12 ">
        <div className="bg-white shadow-2xl rounded-2xl h-full">{children}</div>
      </div>
    </div>
  );

  const pagesData = [
    {
      content: (
        <MapContainer>
          <RainbowValleyActivity6Page1
            onNext={handleNext}
            onBack={handleBack}
          />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <RainbowValleyActivity6Page2
            onNext={handleNext}
            onBack={handleBack}
          />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <RainbowValleyActivity6Page3
            onNext={handleNext}
            onBack={handleBack}
          />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <RainbowValleyActivity6Page9
            onNext={handleNext}
            onBack={handleBack}
          />
        </MapContainer>
      ),
    },
  ];
  return <>{pagesData[currentPage].content}</>;
};

export default MeditationActivity;
