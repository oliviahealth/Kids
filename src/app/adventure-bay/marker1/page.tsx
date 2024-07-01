"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import backgroundMap from "../../../../public/images/background.png";
import ActivityPage1 from "@/app/adventure-bay/marker1/components/Page1";
import ActivityPage2 from "@/app/adventure-bay/marker1/components/Page2";
import ActivityPage3 from "@/app/adventure-bay/marker1/components/Page3";


const AdventureBayActivity: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    console.log("handleNext", currentPage);
    if (currentPage < pagesData.length - 1) setCurrentPage(currentPage + 1);
  };

  const MapContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className="relative w-full h-full">
      <div className="z-5 absolute inset-0">
        <Image
          src={backgroundMap}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
        <div className="row-start-2 row-end-12 col-start-2 col-end-12 z-20 h-auto">
          <div className="relative bg-white shadow-2xl rounded-2xl h-full p-10">
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
    }
  ];
  return <>{pagesData[currentPage].content}</>;
};

export default AdventureBayActivity;
