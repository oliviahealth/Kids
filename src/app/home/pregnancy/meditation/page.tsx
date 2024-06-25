"use client";
import { useState } from "react";
import MeditationActivityPage1 from "./components/Page1";
import MeditationActivityPage2 from "./components/Page2";
import MeditationActivityPage3 from "./components/Page3";
import MeditationActivityPage9 from "./components/Page9";
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

  const pagesData = [
    {
      content: (
        <MeditationActivityPage1 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage2 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage3 onNext={handleNext} onBack={handleBack} />
      ),
    },
    {
      content: (
        <MeditationActivityPage9 onNext={handleNext} onBack={handleBack} />
      ),
    },
  ];
  return (
    <div className="map-container grid grid-cols-12 grid-rows-12 h-full">
      <div className="row-start-2 row-end-12 col-start-2 col-end-12 ">
        <div className="bg-white shadow-2xl rounded-2xl">
          {pagesData[currentPage].content}
        </div>
      </div>
    </div>
  );
};

//Layout.tsx
// import "./meditationModule.css";
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="map-container grid grid-cols-12 grid-rows-12">
//       <div className="row-start-2 row-end-12 col-start-2 col-end-12 overflow-auto">
//         <div className="bg-white shadow-2xl rounded-2xl">{children}</div>
//       </div>
//     </div>
//   );
// }

export default MeditationActivity;
