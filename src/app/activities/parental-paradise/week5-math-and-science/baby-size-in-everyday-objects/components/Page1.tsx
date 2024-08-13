"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import tape from "/public/images/dashboard/pregnancy/measuring-tape.svg";
import paper from "/public/images/dashboard/pregnancy/paper.svg";

import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";

type CheckboxState = {
  [key: string]: boolean;
};

export default function Page1({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    Tape: false,
    Paper: false,
  });

  const handleCheckboxChange = (type: keyof typeof isChecked) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const allChecked = Object.values(isChecked).every(Boolean);
    setButtonDisabled(!allChecked);
  }, [isChecked]);

  return (
    <>
      <Header
        logoSrc={logo}
        title="Your Baby's Size in Everyday Objects"
        subtitle="Math & Science - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Your Baby's Size in Everyday Objects is a fun and educational activity that blends math and science to celebrate the growth of your baby during your pregnancy. Each week, as your baby develops, we'll find common household items that match the size of your little one. This activity not only helps you visualize your baby's growth but also brings a touch of excitement and curiosity into your home. By estimating and measuring objects, you'll engage in basic mathematical concepts, such as size comparison and measurement. At the same time, you'll learn fascinating facts about your baby's development stages, making this a holistic experience. Get ready to explore your home and your growing baby!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Ruler/Tape Measure",
            image: tape,
            alt: "Tape",
            key: "Tape",
          },
          { name: "Paper", image: paper, alt: "Paper", key: "Paper" },
          { name: "", image: logo, alt: "Item 3", key: "item3" },
          { name: "", image: logo, alt: "Item 4", key: "item4" },
          { name: "", image: logo, alt: "Item 5", key: "item5" },
          { name: "", image: logo, alt: "Item 6", key: "item6" },
          { name: "", image: logo, alt: "Item 7", key: "item7" },
          { name: "", image: logo, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FEEDFF"
        emptyCardBackgroundColor="#FCD3FF"
        checkedCardColor="#F797FF"
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
}
