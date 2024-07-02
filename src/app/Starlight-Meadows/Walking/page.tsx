"use client";
import { ReactNode, useState } from "react";
import MeditationActivityPage1 from "./components/Page1";
import MeditationActivityPage2 from "./components/Page2";
import MeditationActivityPage3 from "./components/Page3";
import MeditationActivityPage4 from "./components/Page4";
import MeditationActivityPage5 from "./components/Page5";
import MeditationActivityPage6 from "./components/Page6";
import MeditationActivityPage7 from "./components/Page7";
import MeditationActivityPage8 from "./components/Page8";
import MeditationActivityPage9 from "./components/Page9";
import MeditationActivityPage10 from "./components/Page10";
import MeditationActivityPage11 from "./components/Page11";

import MeditationActivityPage12 from "./components/Page12";

import "./WalkingModule.css";

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
    <div className="row-start-1 row-end-13 col-start-1 col-end-13 py-16 px-16">
      <div className="bg-white shadow-2xl rounded-2xl h-full flex flex-col">
        {children}
      </div>
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
        <MeditationActivityPage9 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage10 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage11 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MapContainer>
          <MeditationActivityPage12 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
  ];
  return <>{pagesData[currentPage].content}</>;
};

export default MeditationActivity;
