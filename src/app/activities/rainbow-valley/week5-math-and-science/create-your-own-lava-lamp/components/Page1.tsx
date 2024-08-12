"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";

import iceCubeTray from "/public/images/activities/rainbow-valley/week5/icecubeTray.svg";
import water from "/public/images/activities/rainbow-valley/week5/water.svg";
import vegetableOil from "/public/images/activities/rainbow-valley/week5/vegetableOil.svg";
import foodColoring from "/public/images/activities/rainbow-valley/week5/foodColoring.svg";
import clearJar from "/public/images/activities/rainbow-valley/week5/clearJar.svg";

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
    iceCubeTray: false,
    water: false,
    vegetableOil: false,
    foodColoring: false,
    clearJar: false,
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
        title="Create Your Own Lava Lamp"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="The science behind a lava lamp is incredible. Watching the bubbles float through the lamp and stick to each other is mesmerizing. This activity allows you to work with your child and create a lava lamp together. It will teach them about the different properties of water and vegetable oil, and how their opposition is the reason this lava lamp will work. Soon enough your child will want to create multiple lava lamps to have around the living space. Let's get started!"
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "Ice Cube Tray",
              image: iceCubeTray,
              alt: "Ice Cube Tray",
              key: "iceCubeTray",
          },
          {
              name: "Water",
              image: water,
              alt: "Water",
              key: "water",
          },
          {
              name: "Vegetable Oil",
              image: vegetableOil,
              alt: "Vegetable Oil",
              key: "vegetableOil",
          },
          {
              name: "Food Coloring",
              image: foodColoring,
              alt: "Food Coloring",
              key: "foodColoring",
          },
          {
              name: "Clear Jar",
              image: clearJar,
              alt: "Clear Jar",
              key: "clearJar",
          },
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
