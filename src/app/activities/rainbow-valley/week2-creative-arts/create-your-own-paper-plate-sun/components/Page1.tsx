"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/2/act6/white_paper_plate.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/2/act6/yellow_paint.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/2/act6/liquid_glue.png";
import image4 from "@/public/images/dashboard/rainbowValley/week/2/act6/scissors.png";
import image5 from "@/public/images/dashboard/rainbowValley/week/2/act6/yellow_straw.png";
import Header from "@/components/Template/Header";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Footer from "@/components/Template/Footer";
import { useEffect, useState } from "react";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    white_paper_plate: false,
    yellow_paint: false,
    liquid_glue: false,
    scissors: false,
    yellow_straw: false,
  });

  const handleCheckboxChange = (type: keyof typeof isChecked) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  useEffect(() => {
    const allChecked = Object.values(isChecked).every(Boolean);
    setButtonDisabled(!allChecked);
  }, [isChecked]);

  return (
    <>
      <Header
        logoSrc={icon}
        title="Create Your Own Paper Plate Sun"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`As a 2 year old child continues to develop they begin to reach new milestones. They 
          can communicate more effectively, walk around without falling as often, and may grow more interested 
          in coloring or other artistic activities. However they may not be ready to use scissors or write letters 
          so we created a craft for them called Create Your Own Paper Plate Sun. This craft consists of a child 
          working together with their caregiver to combine a few items that will turn into a paper plate sun. 
          Along the way the caregiver will also ask them a few questions to help them learn about the sun.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "White Paper Plate",
            image: image1,
            alt: "White Paper Plate",
            key: "white_paper_plate",
          },
          {
            name: "Yellow Paint",
            image: image2,
            alt: "Yellow Paint",
            key: "yellow_paint",
          },
          {
            name: "Liquid Glue",
            image: image3,
            alt: "Liquid Glue",
            key: "liquid_glue",
          },
          { name: "Scissors", image: image4, alt: "Scissors", key: "scissors" },
          {
            name: "Yellow Straw",
            image: image5,
            alt: "Yellow Straw",
            key: "yellow_straw",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FFD0D0"
        emptyCardBackgroundColor="#FFBABA"
        checkedCardColor="#E75858"
      />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
