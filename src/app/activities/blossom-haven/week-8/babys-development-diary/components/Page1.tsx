"use client";

import Header from "@/components/Template/Header";
import IntroductionAndMaterials, { CheckboxState } from "@/components/Template/IntroductionAndMaterials";

import Footer from "@/components/Template/Footer";
import { useEffect, useState } from "react";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const Page1: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    "Camera lens": false,
    "Blank Diary/Journal": false,
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
      <Header logoSrc={headerIcon} title="Baby's Development Diary" subtitle="Safety - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`There is a lot of growth and development that occurs while your child is between the ages of 0-1. A key component of your child's safety during this time period is tracking your child's achievements of their milestones so your aware of where your child is doing good in, and where you need to pay more attention in to ensure they reach all necessary milestones. There are numerous resources for you to find and track your child's growth, but creating your own development diary will ensure you're well informed of your child's progress and strengthen the emotional bond you have with them. For this activity, we will give you the steps necessary to create a development diary to track your child's growth, and learn where to best help your child going forward.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera lens",
            image: "/images/activities/blossom-haven/camera.svg",
            alt: "Camera lens",
            key: "Camera lens",
          },
          {
            name: "Blank Diary/Journal",
            image: "/images/activities/blossom-haven/journal.svg",
            alt: "Blank Diary/Journal",
            key: "Blank Diary/Journal",
          },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#FFF7E3'
        emptyCardBackgroundColor='#F8E7BA'
        checkedCardColor='#F1A533'
      />
      <Footer
        onNext={onNext}
        onBack={onBack}
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={false}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
