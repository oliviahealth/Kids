"use client";
import React, { useState, useEffect } from "react";
import towel from "/public/images/activities/blossom-haven/week7/towel.svg";
import bearChildsToys from "/public/images/activities/blossom-haven/week7/bearChildsToys.svg";
import secondPlayMat from "/public/images/activities/blossom-haven/week7/secondPlayMat.svg";
import logo from "/public/images/activities/blossom-haven/icon.svg";
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
  towel: false,
  bearChildsToys: false,
  secondPlayMat: false,
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
        title="Happy Tummy Workout"
        subtitle="Physical Activity - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="In the first few months of your child's life, the best way to grow their physical development is through tummy time activities and exercises. Tummy time can be described as any activities done while your child is on their stomach because this position forces the child to use upper body muscles to look, feel, and grab at items or people around them. This is a crucial time of their physical activity development because your child needs to grow the strength of their neck, back, shoulder, and arm muscles in order to reach their later physical activity milestones. Doing these activity steps will significantly help your child reach their current milestones, and keep them on track for future ones."
        materialsTitle="Materials Needed"
        materials = {[
          {
            name: "Towel",
            image: towel,
            alt: "Towel",
            key: "towel",
          },
          {
            name: "Bear Child's Toys",
            image: bearChildsToys,
            alt: "Bear Child's Toys",
            key: "bearChildsToys",
          },
          {
            name: "Second Play Mat",
            image: secondPlayMat,
            alt: "Second Play Mat",
            key: "secondPlayMat",
          },
          { name: "", image: "empty", alt: "Item 4", key: "item4" },
          { name: "", image: "empty", alt: "Item 5", key: "item5" },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
        ]}
        
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FFF7E3"
        emptyCardBackgroundColor="#F8E7BA"
        checkedCardColor="#F1A533"
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