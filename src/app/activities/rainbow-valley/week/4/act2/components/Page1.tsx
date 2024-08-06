"use client";

import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
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
    "Letter Templates": false,
    "Writing Utensils": false,
    "Paper": false,
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
        title="Trace That Letter"
        subtitle="Language, Literacy, & Speech - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Letters are the starting point when a child learns how to communicate. Words cannot be formed without understanding the sounds of different letters which is why it is important to teach your child both how to say and write each letter of the alphabet. This activity teaches your child about the different letters as they trace them with either their hand or a writing utensil. Understanding the sounds different letters make helps them connect certain letters to words that begin with those letters. Before you know it your child will be so eager to show you the letters they traced that day!`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Letter Templates",
            image: "/images/activities/rainbow-valley/paper.svg",
            alt: "Letter Templates",
            key: "Letter Templates",
          },
          {
            name: "Writing Utensils",
            image: "/images/activities/rainbow-valley/pen.svg",
            alt: "Writing Utensils",
            key: "Writing Utensils",
          },
          {
            name: "Paper",
            image: "/images/activities/rainbow-valley/paper.svg",
            alt: "Paper",
            key: "Paper"
          },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
