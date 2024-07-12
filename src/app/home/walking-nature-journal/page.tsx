"use client";
import { ReactNode, useState } from "react";
import WalkingActivityPage1 from "./components/Page1";
import WalkingActivityPage2 from "./components/Page2";
import WalkingActivityPage3 from "./components/Page3";
import WalkingActivityPage4 from "./components/Page4";
import WalkingActivityPage5 from "./components/Page5";
import WalkingActivityPage6 from "./components/Page6";
import WalkingActivityPage7 from "./components/Page7";
import styles from "./WalkingNatureJournal.module.css";

const WalkingNatureJournal: React.FC = () => {
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

  const pagesData = [
    {
      content: (
        <MapContainer>
          <WalkingActivityPage1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <WalkingActivityPage2 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <WalkingActivityPage3 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
          <WalkingActivityPage4 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
          <WalkingActivityPage5 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
          <WalkingActivityPage6 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MapContainer>
          <WalkingActivityPage7 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    }
  ];

  return <>{pagesData[currentPage].content}</>;
};

export default WalkingNatureJournal;
