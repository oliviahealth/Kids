"use client";
import { ReactNode, useState } from "react";
import ActivityPage1 from "./components/Page1";
import ActivityPage2 from "./components/Page2";
import ActivityPage3 from "./components/Page3";
import ActivityPage4 from "./components/Page4";
import ActivityPage5 from "./components/Page5";
import ActivityPage6 from "./components/Page6";
import ActivityPage7 from "./components/Page7";
import ActivityPage8 from "./components/Page8";
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
          <ActivityPage1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <ActivityPage2 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <ActivityPage3 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: <ActivityPage4 onNext={handleNext} onBack={handleBack} />,
    },
    {
      content: <ActivityPage5 onNext={handleNext} onBack={handleBack} />,
    },
    {
      content: <ActivityPage6 onNext={handleNext} onBack={handleBack} />,
    },
    {
      content: <ActivityPage7 onNext={handleNext} onBack={handleBack} />,
    },
    {
      content: (
        <MapContainer>
          <ActivityPage8 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
  ];
  return <>{pagesData[currentPage].content}</>;
};

export default MeditationActivity;
