"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";

import worksheet from "/public/images/activities/fantasy-forest/week5/worksheet.svg";
import water from "/public/images/activities/fantasy-forest/week5/water.svg";
import bathtub from "/public/images/activities/fantasy-forest/week5/bathtub.svg";
import householdObjects from "/public/images/activities/fantasy-forest/week5/householdObjects.svg"
import writingUtensil from "/public/images/activities/fantasy-forest/week5/writingUtensil.svg"

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
    worksheet: false,
    water: false,
    bathtub: false,
    householdObjects: false,
    writingUtensil: false,
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
        title="Will it Sink or Float?"
        subtitle="Math and Science - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="In this activity, you will be testing your child's hypothesis that an item will sink or float. Talking about and describing the items will develop critical thinking and verbal expression. Giving your child the freedom to choose the items they want to explore allows them to learn more about the environment they live in. This can be an activity that brings you outside or it can be an inside activity depending on what works best for your family. This will also help your child practice their writing by filling in the blanks on the worksheet with the names of the items they pick. This is a very adaptable activity so feel free to make it your own!"
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "Activity Worksheet",
              image: worksheet,
              alt: "Worksheet",
              key: "worksheet",
          },
          {
              name: "Water",
              image: water,
              alt: "Water",
              key: "water",
          },
          {
              name: "Bucket or Bathtub",
              image: bathtub,
              alt: "Bathtub",
              key: "bathtub",
          },
          {
              name: "10 Home Items",
              image: householdObjects,
              alt: "Household Objects",
              key: "householdObjects",
          },
          {
              name: "Writing Utensil",
              image: writingUtensil,
              alt: "Writing Utensil",
              key: "writingUtensil",
          },
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
