"use client";
import { ReactNode, useState } from "react";
import PregnancySupportSystemPage1 from "./components/Page1";
import PregnancySupportSystemPage2 from "./components/Page2";
import PregnancySupportSystemPage3 from "./components/Page3";
import PregnancySupportSystemPage4 from "./components/Page4";
import PregnancySupportSystemPage5 from "./components/Page5";
import PregnancySupportSystemPage6 from "./components/Page6";
import PregnancySupportSystemPage7 from "./components/Page7";
import PregnancySupportSystemPage8 from "./components/Page8";
import PregnancySupportSystemPage9 from "./components/Page9";
import PregnancySupportSystemPage10 from "./components/Page10";

import styles from "./PregnancySupportSystem.module.css";

const RelaxationYoga: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pagesData.length - 1) setCurrentPage(currentPage + 1);
  };

  const MapContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.card}>
          {children}
        </div>
      </div>
    </div>
  );

  const ActivityContainer: React.FC<{ children: ReactNode }> = ({
    children,
  }) => (
    <div className="relative w-full h-full max-h-screen overflow-hidden">
      <div className="h-full w-full">
        <div className="z-20 h-full overflow-y-auto">
          <div
            className="relative shadow-2xl rounded-2xl h-full p-10"
            style={{ backgroundColor: "#E1FF8D" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  const pagesData = [
    {
      content: (
        <MapContainer>
          <PregnancySupportSystemPage1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <PregnancySupportSystemPage2 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <PregnancySupportSystemPage3 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <PregnancySupportSystemPage4 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <PregnancySupportSystemPage5 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <PregnancySupportSystemPage6 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <PregnancySupportSystemPage7 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <PregnancySupportSystemPage8 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <PregnancySupportSystemPage9 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <PregnancySupportSystemPage10 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
  ];

  return <>{pagesData[currentPage].content}</>;
};

export default RelaxationYoga;
