"use client";
import { ReactNode, useState } from "react";
import BabyGrowthJournalPage1 from "./components/Page1";
// import BabyGrowthJournalPage2 from "./components/Page2";
import BabyGrowthJournalPage3 from "./components/Page3";
import BabyGrowthJournalPage4 from "./components/Page4";
import BabyGrowthJournalPage5 from "./components/Page5";
import BabyGrowthJournalPage6 from "./components/Page6";
import BabyGrowthJournalPage7 from "./components/Page7";
import BabyGrowthJournalPage8 from "./components/Page8";
import BabyGrowthJournalPage9 from "./components/Page9";
import BabyGrowthJournalPage10 from "./components/Page10";
import BabyGrowthJournalPage11 from "./components/Page11";
import BabyGrowthJournalPage12 from "./components/Page12";

import styles from "./BabyGrowthJournal.module.css";

const BabyGrowthJournal: React.FC = () => {
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
          <BabyGrowthJournalPage1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    // {
    //   content: (
    //     <MapContainer>
    //       <BabyGrowthJournalPage2 onNext={handleNext} onBack={handleBack} />
    //     </MapContainer>
    //   ),
    // },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage3 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage4 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage5 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage6 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage7 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage8 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage9 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage10 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <ActivityContainer>
          <BabyGrowthJournalPage11 onNext={handleNext} onBack={handleBack} />
        </ActivityContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <BabyGrowthJournalPage12 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
  ];

  return <>{pagesData[currentPage].content}</>;
};

export default BabyGrowthJournal;
