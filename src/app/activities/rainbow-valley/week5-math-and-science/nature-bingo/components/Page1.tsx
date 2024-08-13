"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";

import bingoCard from "/public/images/activities/rainbow-valley/week5/bingoCard.svg";
import pen from "/public/images/activities/rainbow-valley/week5/pen.svg";
import outsideSpace from "/public/images/activities/rainbow-valley/week5/outsideSpace.svg";

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
    bingoCard: false,
    pen: false,
    outsideSpace: false,
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
        title="Nature Bingo"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="At 2-3 years old, toddlers have a lot of energy and are very curious about their surroundings! For this activity, we have created a nature bingo that allows your toddler to run around and search for different items outside! This activity is a great way for you to teach your toddler about the world around them. You can teach them about different plants, animals, and insects. This is also a great opportunity to teach your toddler about being respectful towards nature. For example, if your toddler finds a butterfly on a plant, you can teach them that they can look at it, but they cannot hurt it. While we have created a bingo card that gives you and your toddler specific items to look for, encourage them to still ask questions ant point out things that aren’t on the card."
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "Bingo Card",
              image: bingoCard,
              alt: "Bingo Card",
              key: "bingoCard",
          },
          {
              name: "Pen",
              image: pen,
              alt: "Pen",
              key: "pen",
          },
          {
              name: "Outside Space",
              image: outsideSpace,
              alt: "Outside Space",
              key: "outsideSpace",
          },
          { name: "", image: "empty", alt: "Item 4", key: "item4" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
