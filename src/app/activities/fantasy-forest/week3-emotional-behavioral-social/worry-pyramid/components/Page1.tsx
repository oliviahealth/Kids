"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/activities/fantasy-forest/header-icon.svg";
import paper from "@/public/images/activities/fantasy-forest/activity-sheet.svg";
import marker from "@/public/images/activities/fantasy-forest/marker.svg";
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
    marker: false,
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
        introductionText="During this activity your child will be able to practice sensory discrimination and task concentration by naming different items derived from their five senses. The 5-4-3-2-1 method learned during this activity also allows the child to practice their counting. This activity is a great introduction to the concept of spatial perception as they learn and explore the world around them. Understanding ways to cope with emotions when they feel too big for them to handle is a great skill to start building early in childhood. The sentences in parenthesis are suggestions for things to say throughout the activity to promote engagement with your child."
        materialsTitle="Worry Pyramid"
        materials={[
          {
            name: "Activity Sheet",
            image: paper,
            alt: "paper",
            key: "paper",
          },
          { name: "Coloring Utensils", image: marker, alt: "marker", key: "marker" },
          { name: "", image: paper, alt: "Item 3", key: "item3" },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
