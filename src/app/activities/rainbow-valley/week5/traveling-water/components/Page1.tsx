"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";
import foodColoring from "/public/images/activities/rainbow-valley/week5/foodColoring.svg";
import paperTowels from "/public/images/activities/rainbow-valley/week5/paperTowels.svg";
import water from "/public/images/activities/rainbow-valley/week5/water.svg";
import largeCup from "/public/images/activities/rainbow-valley/week5/largeCup.svg";

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
    foodColoring: false,
    paperTowels: false,
    water: false,
    largeCup: false,
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
        title="Traveling Water"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Completing a project with your child is a great way to teach them about math and science. A 2 year old may have a difficult time understanding mathematical or scientific reasoning, but they can experience the joys of watching colors spread across paper towels. This activity is called Traveling Water and consists of watching water move along a chain of paper towels. They will learn that what looks like moving water is actually the paper towels getting coated in the water and spreading towards the next cup. This activity is unbelievable so lets get started!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Food Coloring",
            image: foodColoring,
            alt: "Food Coloring",
            key: "foodColoring",
          },
          {
            name: "Paper Towels",
            image: paperTowels,
            alt: "Paper Towels",
            key: "paperTowels",
          },
          {
            name: "Water",
            image: water,
            alt: "Water",
            key: "water",
          },
          {
            name: "Large Cup",
            image: largeCup,
            alt: "Large Cup",
            key: "largeCup",
          },
          { name: "", image: "empty", alt: "Item 5", key: "item5" },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
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
}
