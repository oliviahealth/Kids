"use client";
import { ReactNode, useState } from "react";
import MeditationActivityPage1 from "./components/Page1";
import MeditationActivityPage2 from "./components/Page2";
import MeditationActivityPage3 from "./components/Page3";
import MeditationActivityPage9 from "./components/Page9";
import MeditationActivityPage4 from "./components/page4";
import MeditationActivityPage5 from "./components/page5";
import MeditationActivityPage6 from "./components/page6";
import MeditationActivityPage7 from "./components/page7";
import MeditationActivityPage8 from "./components/page8";
import "./meditationModule.css";

const MeditationActivity: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    console.log("handleNext", currentPage);
    if (currentPage < pagesData.length - 1) setCurrentPage(currentPage + 1);
  };

  const MapContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className="map-container grid grid-cols-12 grid-rows-12 h-full">
      <div className="row-start-2 row-end-12 col-start-2 col-end-12 ">
        <div className="bg-white shadow-2xl rounded-2xl">{children}</div>
      </div>
    </div>
  );

  const pagesData = [
    {
      content: (
        <MapContainer>
          <MeditationActivityPage1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <MeditationActivityPage2 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <MeditationActivityPage3 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MeditationActivityPage4 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage5 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage6 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage7 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage8 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MapContainer>
          <MeditationActivityPage9 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
  ];
  return <>{pagesData[currentPage].content}</>;
};

export default MeditationActivity;
