"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/activities/fantasy-forest/header-icon.svg";
import paper from "@/public/images/activities/fantasy-forest/activity-sheet.svg";
import dice from "@/public/images/activities/fantasy-forest/dice.svg";
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
    tape: false,
    dice: false,
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
        title="The Rainbow Road"
        subtitle="Emotional, Behavioral, Social - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Learning to express emotions is a challenging part of development for many kids as they experience lots of new feelings but struggle to understand what they mean or why they may feel them. This is an activity that 4-5 year old children can participate in with their parents or an adult that can help them read the cues on each colored paper. It also works on your child being able to recognize numbers on a dice and count aloud to move along their rainbow road. During this activity your child will practice gross motor control as they walk, hop, or jump along the rainbow road. Additionally, your child will have the opportunity to explore expressive feelings and emotions as they complete the prompts on each color block."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Colored Papers",
            image: paper,
            alt: "paper",
            key: "paper",
          },
          { name: "Tape", image: tape, alt: "tape", key: "tape" },
          { name: "Dice", image: dice, alt: "dice", key: "dice" },
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
