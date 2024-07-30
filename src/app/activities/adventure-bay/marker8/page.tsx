"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import backgroundMap from "@/public/images/background.png";
import imageSrc from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import star from "@/public/images/dashboard/adventure-bay/Star 27.svg";
import arrowSrc from "@/public/images/dashboard/adventure-bay/icon.png";
import Page1 from "@/app/adventure-bay/week2/marker4/components/Page1";
import Page2 from "@/app/adventure-bay/week2/marker4/components/Page2";
import Page3 from "@/app/adventure-bay/week2/marker4/components/Page3";
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
          title="Decide what type of tree to make."
          description="Choose the type of tree:
- Fall Tree: Use red, orange, and yellow paints for the leaves.
- Winter Tree: Use blue and white paint for the leaves.
- Spring Tree: Make a Cherry Blossom tree with pink and white paint for the leaves.
- Summer Tree: Make an Apple tree with green paint for the leaves and red paint for the apples."
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
          title="Prepare the tree trunk."
          description="Either print out the OliviaKids Tree Trunk Template or use a piece of paper available to you."
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
          title="Draw the tree trunk."
          description="If using your own paper, draw out the trunk of a tree with branches using brown paint. You can also add a blue sky as the background."
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
          title="Prepare the cotton ball."
          description="Attach a cotton ball to the end of a clothespin."
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
          stepNumber={6}
          onNext={handleNext}
          onBack={handleBack}
          title="Paint the leaves."
          description="Dip the cotton ball end into the colored paints and stamp it onto the paper to create leaves."
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
          stepNumber={7}
          onNext={handleNext}
          onBack={handleBack}
          title="Fill the branches with leaves."
          description="Repeat the stamping process until there are leaves on all of the branches."
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
          stepNumber={8}
          onNext={handleNext}
          onBack={handleBack}
          title="Add fruits to the tree."
          description="If creating apples or other fruits, use the cotton ball to create green leaves first. After it dries, use the cotton ball to create red circles on top to represent the apples."
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
