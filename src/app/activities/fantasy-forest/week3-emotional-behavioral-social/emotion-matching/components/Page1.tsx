"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/activities/fantasy-forest/header-icon.svg";
import paper from "@/public/images/activities/fantasy-forest/activity-sheet.svg";
import scissors from "@/public/images/activities/fantasy-forest/scissors.svg";
import tape from "@/public/images/activities/fantasy-forest/tape.svg";
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
    paper: false,
    scissors: false,
    tape: false,
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
        title="Emotion Matching"
        subtitle="Emotional, Behavioral, Social - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Helping your child start recognizing and expressing their emotions at an early age can improve their ability to manage them as they grow and develop. Sometimes we do not know how to express what we are feeling, and we may need pictures or descriptions to help us recognize our emotions. This exercise uses pictures and graphics to help children begin to recognize different emotions they may be feeling, and also work to help them start identifying other people's emotions as well. From this activity your child will practice visual discrimination by noting the differences between the expressive emotions on the faces and matching the faces with their appropriate label. Expressive emotions are observable details that communicate internal emotion. Your child will have the opportunity to practice memory recall as they describe a time when they felt a particular emotion."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Activity Sheet",
            image: paper,
            alt: "paper",
            key: "paper",
          },
          { name: "Scissors", image: scissors, alt: "scissors", key: "scissors" },
          { name: "Tape", image: tape, alt: "tape", key: "tape" },
          { name: "", image: paper, alt: "Item 4", key: "item4" },
          { name: "", image: paper, alt: "Item 5", key: "item5" },
          { name: "", image: paper, alt: "Item 6", key: "item6" },
          { name: "", image: paper, alt: "Item 7", key: "item7" },
          { name: "", image: paper, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#B5F6D0'
        emptyCardBackgroundColor='#88DFAC'
        checkedCardColor='#35A663'
      />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
