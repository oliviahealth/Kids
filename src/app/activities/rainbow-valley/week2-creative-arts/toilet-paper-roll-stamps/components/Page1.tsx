"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/2/act4/toilet_paper.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/2/act4/paint.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/2/act4/paper.png";
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
    toilet_paper: false,
    paint: false,
    paper: false,
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
        title="Toilet Paper Roll Stamps"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Research has shown that children who engage in painting will greatly enhance the development of 
          different areas of their brain. Since it may be challenging for a 2 year old to feel confident with their ability 
          to use a paintbrush, we created an activity for them to paint using toilet paper rolls. This activity is called 
          Toilet Paper Stamps. The idea is that the toilet paper rolls will act like stamps where the child will dip them 
          in the paint and place the paint onto their paper. This will allow them to easily paint onto paper in addition to 
          learning what a circle looks like. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Toilet Paper",
            image: image1,
            alt: "Toilet Paper",
            key: "toilet_paper",
          },
          {
            name: "Paint",
            image: image2,
            alt: "Paint",
            key: "paint",
          },
          { name: "Paper", image: image3, alt: "Paper", key: "paper" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
