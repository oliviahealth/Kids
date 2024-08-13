"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import dice from "/public/images/activities/fantasy-forest/week5/dice.svg";
import worksheet from "/public/images/activities/fantasy-forest/week5/worksheet.svg";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import { tap } from "node:test/reporters";

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
    dice: false,
    worksheet: false,
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
        title="Roll The Dice Movement"
        subtitle="Domain name - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="An important developmental skill of children this age is learning how to count. Playing with dice is a good way for children to practice counting the dots to determine what number the die is showing. This activity incorporates counting and participating in physical exercise. In this activity, children practice various exercise techniques that can be done indoors or outdoors. The activity will further develop your child’s creative expression and gross motor control as well. This can be a family activity that everyone can complete together or something a child can complete on their own once they get the hang of it. "
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "Dice",
              image: dice,
              alt: "Dice",
              key: "dice",
          },
          {
              name: "Provided Worksheet",
              image: worksheet,
              alt: "Worksheet",
              key: "worksheet",
          },
          { name: "", image: "empty", alt: "Item 3", key: "item3" },
          { name: "", image: "empty", alt: "Item 4", key: "item4" },
          { name: "", image: "empty", alt: "Item 5", key: "item5" },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
      ]}
      
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#B5F6D0"
        emptyCardBackgroundColor="#88DFAC"
        checkedCardColor="#35A663"
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