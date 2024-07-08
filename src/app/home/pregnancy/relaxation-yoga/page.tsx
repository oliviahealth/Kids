"use client";
import { ReactNode, useState } from "react";
import RelaxationYogaPage1 from "./components/Page1";
import RelaxationYogaPage2 from "./components/Page2";
import RelaxationYogaPage3 from "./components/Page3";
// import RelaxationYogaPage4 from "./components/Page4";
// import RelaxationYogaPage5 from "./components/Page5";
// import RelaxationYogaPage6 from "./components/Page6";
import RelaxationYogaPage7 from "./components/Page7";
import styles from "./RelaxationYoga.module.css";

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
        <MapContainer>
          <RelaxationYogaPage3 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    // {
    //   content: (
    //       <RelaxationYogaPage4 onNext={handleNext} onBack={handleBack} />
    //   ),
    // },
    // {
    //   content: (
    //       <RelaxationYogaPage5 onNext={handleNext} onBack={handleBack} />
    //   ),
    // },
    // {
    //   content: (
    //       <RelaxationYogaPage6 onNext={handleNext} onBack={handleBack} />
    //   ),
    // },
    {
      content: (
        <MapContainer>
          <RelaxationYogaPage7 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    }
  ];

  return <>{pagesData[currentPage].content}</>;
};

export default RelaxationYoga;
