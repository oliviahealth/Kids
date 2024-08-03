"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import backgroundMap from "@/public/images/background.png";
import imageSrc from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import star from "@/public/images/dashboard/adventure-bay/Star 27.svg";
import arrowSrc from "@/public/images/dashboard/adventure-bay/icon.png";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import ActivityPage from "@/components/Template/ActivityPage";
import ActivityStar from "@/components/Template/ActivityStar";
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
    <div className="relative w-full h-full max-h-screen overflow-hidden">
      <div className="z-5 absolute inset-0">
        <Image
          src={backgroundMap}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
        <div className="row-start-2 row-end-12 col-start-2 col-end-12 z-20 h-full overflow-y-auto">
          <div className="relative bg-white shadow-2xl rounded-2xl h-full p-10 overflow-auto">
            <div className="flex flex-col justify-between h-full w-full gap-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ActivityContainer: React.FC<{ children: ReactNode }> = ({
    children,
  }) => <>{children}</>;

  const pagesData = [
    {
      content: (
        <MapContainer>
          <Page1 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <MapContainer>
          <Page2 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
    {
      content: (
        <ActivityPage
          stepNumber={1}
          onNext={handleNext}
          onBack={handleBack}
          title="Gather supplies."
          description="Gather all the necessary supplies for the activity."
          imageUrl={imageSrc}
          buttonImageUrl={arrowSrc}
          color="#BFDF64"
          backgroundColor="#E1FF8D"
        />
      ),
    },
    {
      content: (
        <ActivityPage
          stepNumber={2}
          onNext={handleNext}
          onBack={handleBack}
          title=""
          description="Print out the Olivia-KIDS “Popsicle Stick Puppets” packet. Colored or black & white options are available."
          imageUrl={imageSrc}
          buttonImageUrl={arrowSrc}
          color="#BFDF64"
          backgroundColor="#E1FF8D"
        />
      ),
    },
    {
      content: (
        <ActivityPage
          stepNumber={3}
          onNext={handleNext}
          onBack={handleBack}
          title=""
          description="Cut out animal faces for the puppets. You can also draw and color your own puppet characters."
          imageUrl={imageSrc}
          buttonImageUrl={arrowSrc}
          color="#BFDF64"
          backgroundColor="#E1FF8D"
        />
      ),
    },
    {
      content: (
        <ActivityPage
          stepNumber={4}
          onNext={handleNext}
          onBack={handleBack}
          title=""
          description="Tape or glue the cut-outs to the tips of individual popsicle sticks."
          imageUrl={imageSrc}
          buttonImageUrl={arrowSrc}
          color="#BFDF64"
          backgroundColor="#E1FF8D"
        />
      ),
    },
    {
      content: (
        <ActivityPage
          stepNumber={5}
          onNext={handleNext}
          onBack={handleBack}
          title=""
          description="Create your own stories or plays with your new popsicle stick puppets. Think outside the box and have fun!"
          imageUrl={imageSrc}
          buttonImageUrl={arrowSrc}
          color="#BFDF64"
          backgroundColor="#E1FF8D"
        />
      ),
    },
    {
      content: (
        <ActivityStar
          onNext={handleNext}
          onBack={handleBack}
          title="Well done!"
          description="Repeat this exercise whenever you need it. Here is your star!"
          imageUrl={star}
          buttonImageUrl={arrowSrc}
          color="#BFDF64"
          backgroundColor="#E1FF8D"
        />
      ),
    },
    {
      content: (
        <MapContainer>
          <Page3 onNext={handleNext} onBack={handleBack} />
        </MapContainer>
      ),
    },
  ];
  return <>{pagesData[currentPage].content}</>;
};

export default AdventureBayActivity;
