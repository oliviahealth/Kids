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
    // {
    //   content: (
    //     <ActivityPage
    //       stepNumber={1}
    //       onNext={handleNext}
    //       onBack={handleBack}
    //       title="Gather supplies."
    //       description="Gather all the necessary supplies for the activity."
    //       imageUrl={imageSrc}
    //       buttonImageUrl={arrowSrc}
    //       color="#BFDF64"
    //       backgroundColor="#E1FF8D"
    //     />
    //   ),
    // },
    // {
    //   content: (
    //     <ActivityPage
    //       stepNumber={2}
    //       onNext={handleNext}
    //       onBack={handleBack}
    //       title="Measure bracelet string."
    //       description="Measure the bracelet string around your wrist and cut it to the desired length."
    //       imageUrl={imageSrc}
    //       buttonImageUrl={arrowSrc}
    //       color="#BFDF64"
    //       backgroundColor="#E1FF8D"
    //     />
    //   ),
    // },
    // {
    //   content: (
    //     <ActivityPage
    //       stepNumber={3}
    //       onNext={handleNext}
    //       onBack={handleBack}
    //       title="Pick beads and letters."
    //       description="Pick beads and letter beads to spell out a quality trait of your choice (e.g., 'KINDNESS' or 'LOVING') that your child sees in themselves."
    //       imageUrl={imageSrc}
    //       buttonImageUrl={arrowSrc}
    //       color="#BFDF64"
    //       backgroundColor="#E1FF8D"
    //     />
    //   ),
    // },
    // {
    //   content: (
    //     <ActivityPage
    //       stepNumber={4}
    //       onNext={handleNext}
    //       onBack={handleBack}
    //       title="Knot the bracelet."
    //       description="Knot the finalized bracelet securely."
    //       imageUrl={imageSrc}
    //       buttonImageUrl={arrowSrc}
    //       color="#BFDF64"
    //       backgroundColor="#E1FF8D"
    //     />
    //   ),
    // },
    // {
    //   content: (
    //     <ActivityPage
    //       stepNumber={5}
    //       onNext={handleNext}
    //       onBack={handleBack}
    //       title="Discuss the quality trait."
    //       description="As you create your bracelets, invite your child to explain why this is an important quality trait to embrace. Celebrate this wonderful virtue!"
    //       imageUrl={imageSrc}
    //       buttonImageUrl={arrowSrc}
    //       color="#BFDF64"
    //       backgroundColor="#E1FF8D"
    //     />
    //   ),
    // },
    // {
    //   content: (
    //     <ActivityPage
    //       stepNumber={6}
    //       onNext={handleNext}
    //       onBack={handleBack}
    //       title="Reflect on positive affirmations."
    //       description="Encourage your child to reflect on these positive affirmations not only for themselves but for their community around them. Invite your child to create more affirmation bracelets for every member of the family or for their friends."
    //       imageUrl={imageSrc}
    //       buttonImageUrl={arrowSrc}
    //       color="#BFDF64"
    //       backgroundColor="#E1FF8D"
    //     />
    //   ),
    // },
    // {
    //   content: (
    //     <ActivityStar
    //       onNext={handleNext}
    //       onBack={handleBack}
    //       title="Well done!"
    //       description="Repeat this exercise whenever you need it. Here is your star!"
    //       imageUrl={star}
    //       buttonImageUrl={arrowSrc}
    //       color="#BFDF64"
    //       backgroundColor="#E1FF8D"
    //     />
    //   ),
    // },
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
