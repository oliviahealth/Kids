"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";

import foodColoring from "/public/images/activities/rainbow-valley/week5/foodColoring.svg";
import smallCups from "/public/images/activities/rainbow-valley/week5/smallCups.svg";
import water from "/public/images/activities/rainbow-valley/week5/water.svg";
import largeCup from "/public/images/activities/rainbow-valley/week5/largeCup.svg";
import shavingCream from "/public/images/activities/rainbow-valley/week5/shaving-cream.svg";
import pipets from "/public/images/activities/rainbow-valley/week5/foodColoring.svg";

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
    smallCups: false,
    water: false,
    largeCup: false,
    shavingCream: false,
    pipets: false,
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
        title="Cloud in a Jar"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="From the ages to 2-3, you may notice your toddler’s creativity and imagination blossoming. They may ask more “why” questions to try and understand more about the world around them.  For this science experiment, we are going to answer the question of where rain comes from! Rain occurs when water droplets in clouds condense together and become heavy. When the clouds can no longer support the water droplets, they fall to the ground as rain! For the purpose of this experiment, the shaving cream will represent a cloud, the clear water will represent the air, and the colored water droplets represent rain."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Large Cup",
            image: largeCup,
            alt: "Large Cup",
            key: "largeCup",
          },
          {
              name: "Small Cups",
              image: smallCups,
              alt: "Small Cups",
              key: "smallCups",
          },
          {
              name: "Water",
              image: water,
              alt: "Water",
              key: "water",
          },
          {
            name: "Food Coloring",
            image: foodColoring,
            alt: "Food Coloring",
            key: "foodColoring",
          },
          {
              name: "Shaving Cream",
              image: shavingCream,
              alt: "Shaving Cream",
              key: "shavingCream",
          },
          {
              name: "Pipets",
              image: pipets,
              alt: "Pipets",
              key: "pipets",
          },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
