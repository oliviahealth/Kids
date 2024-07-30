"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import backgroundMap from "@/public/images/background.png";
import imageSrc from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import star from "@/public/images/dashboard/adventure-bay/Star 27.svg";
import arrowSrc from "@/public/images/dashboard/adventure-bay/icon.png";
import Page1 from "@/app/adventure-bay/week3/marker2/components/Page1";
import Page2 from "@/app/adventure-bay/week3/marker2/components/Page2";
import Page3 from "@/app/adventure-bay/week3/marker2/components/Page3";
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
          title="Introduction to Friendship Flower."
          description="This week we are talking about what it means to be a good friend. For this activity, we are going to use The Friend Flower to draw out what it means to be a good friend."
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
          title="Name 6 qualities of a good friend."
          description="Before we draw and color, let's name 6 qualities that make a good friend. As your child names the 6 qualities, write each one next to each petal on the activity sheet."
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
          title="Discuss the qualities."
          description="Now that we have named our 6 friendship qualities, we are going to talk about each one. After we talk about each one, we are going to draw a picture that best represents that quality."
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
          title="Explore the first quality."
          description="For this quality (name the first quality), what do you think about when you hear this word? Let your child explore that."
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
          title="Identify actions."
          description="Now, what action shows (name the first quality)? Let your child explore that thought."
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
          title="Decide on a drawing."
          description="What should we draw to represent that? Let your child explore that thought and have them name what should be drawn."
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
          title="Draw the representation."
          description="Great idea, can you draw that? Let them draw, help if needed."
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
          title="Repeat for remaining qualities."
          description="Repeat the same process for the 5 remaining qualities. By the end, each petal should have a picture drawn in it."
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
