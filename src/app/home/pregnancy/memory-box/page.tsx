"use client";
import { ReactNode, useState } from "react";
import RelaxationYogaPage1 from "./components/Page1";
import RelaxationYogaPage2 from "./components/Page2";
import RelaxationYogaPage3 from "./components/Page3";
import RelaxationYogaPage4 from "./components/Page4";
import RelaxationYogaPage5 from "./components/Page5";
import RelaxationYogaPage6 from "./components/Page6";
import RelaxationYogaPage7 from "./components/Page7";
import RelaxationYogaPage8 from "./components/Page8";
import RelaxationYogaPage9 from "./components/Page9";

import styles from "./MemoryBox.module.css";

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
          <RelaxationYogaPage1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <RelaxationYogaPage2 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <RelaxationYogaPage3 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <RelaxationYogaPage4 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <RelaxationYogaPage5 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <RelaxationYogaPage6 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <RelaxationYogaPage7 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <RelaxationYogaPage8 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <RelaxationYogaPage9 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
  ];

  return <>{pagesData[currentPage].content}</>;
};

export default RelaxationYoga;
