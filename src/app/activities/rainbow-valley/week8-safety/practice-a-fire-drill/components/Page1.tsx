"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Footer from "@/components/Template/Footer";
import image1 from "@/public/images/dashboard/rainbowValley/week/3/act5/paper.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/3/act5/writing_utensils.png";
import { useEffect, useState } from "react";
import downloadIcon from "@/public/images/dashboard/rainbowValley/shared/download.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    paper: false,
    pencil: false,
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
        title="Practice a Fire Drill"
        subtitle="Safety - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Fire safety is extremely important to learn especially for your toddler. It teaches them to stay calm in a stressful situation and understand the steps to take to get to safety. This activity allows the caregiver to create a fire escape plan and teach it to their child. Then they will practice running through this plan to show the child how it would work in the event that a real fire occurs. The American Red Cross suggests that you practice this plan at least two times in a year, so completing this activity will help your family ensure they know the proper steps to staying safe if a fire occurs."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Paper",
            image: image1,
            alt: "paper",
            key: "paper",
          },
          {
            name: "Writing Utensil",
            image: image2,
            alt: "pencil",
            key: "pencil",
          },
          {
            name: "",
            image: image1,
            alt: "Empty",
            key: "Empty",
          },
          {
            name: "",
            image: image1,
            alt: "Empty",
            key: "Empty",
          },
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
