"use client";
import { ReactNode, useState } from "react";
import ExerciseActivityPage1 from "./components/Page1";
import ExerciseActivityPage2 from "./components/Page2";
import ExerciseActivityPage3 from "./components/Page3";
import ExerciseActivityPage4 from "./components/Page4";
import ExerciseActivityPage5 from "./components/Page5";
import ExerciseActivityPage6 from "./components/Page6";
import ExerciseActivityPage7 from "./components/Page7";
import styles from "./ExerciseActivity.module.css";

const AtHomeExercise: React.FC = () => {
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
          <ExerciseActivityPage1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <ExerciseActivityPage2 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <ExerciseActivityPage3 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
          <ExerciseActivityPage4 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
          <ExerciseActivityPage5 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
          <ExerciseActivityPage6 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MapContainer>
          <ExerciseActivityPage7 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    }
  ];

  return <>{pagesData[currentPage].content}</>;
};

export default AtHomeExercise;
