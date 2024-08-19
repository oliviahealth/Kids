"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/2/act5/ice_cube_tray.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/2/act5/water.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/2/act5/food_coloring.png";
import image4 from "@/public/images/dashboard/rainbowValley/week/2/act5/spoon.png";
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
    ice_cube_tray: false,
    water: false,
    food_coloring: false,
    spoon: false,
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
        title="Ice Cube Paint"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Painting is an activity that many 2 year olds love to complete to show their caregivers how 
          creative they are. However, paint might not always be available and can create quite a mess. Therefore, we 
          have created an activity called Ice Cube "Paint" to help your child experience painting without the need to 
          have any paint in your living space. You will work together with your child to transform water into beautiful 
          ice cube paint and allow the child to express their creativity on paper. Not only will your child enjoy painting 
          with their new materials, but there will be less of a mess when working with water and food coloring.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Ice Cube Tray",
            image: image1,
            alt: "Ice Cube Tray",
            key: "ice_cube_tray",
          },
          {
            name: "Water",
            image: image2,
            alt: "Water",
            key: "water",
          },
          {
            name: "Food Coloring",
            image: image3,
            alt: "Food Coloring",
            key: "food_coloring",
          },
          { name: "Spoon", image: image4, alt: "Spoon", key: "spoon" },
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
