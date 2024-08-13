"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";
import book from "@/public/images/dashboard/StarlightMeadows/book.svg";


import water from "@/public/images/dashboard/StarlightMeadows/week2/water.svg";
import brush from "@/public/images/dashboard/StarlightMeadows/week2/paint brush.svg";
import paper from "@/public/images/dashboard/StarlightMeadows/week2/paper.svg";


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
    water: false,
    brush: false,
    paper: false,
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
        title="Mess-Free Water Painting"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Mess-Free Water Painting"
        introductionText="Having a one-year-old in the house is so exciting, but it can be hard to come up with mess-free ideas to entertain and engage your young one on a day to day basis. This water painting activity is worry-free, as the most mess is can cause is some water splashes! In addition to having easy set up and clean up, this activity will allow your child to practice creative arts, while also practicing their motor skills, such as grasping a painting utensil between their fingers. This activity is intended for ages 1-2, and children of these ages won't have strong fine motor abilities for a while longer. Therefore, it can be expected that your child will hold the painting utensil in a closed fist (or even prefer to just finger paint), which is expected and appropriate for this age. "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "cup of water",
            image: water,
            alt: "water",
            key: "water",
          },
          { name: "brush", image: brush, alt: "brush", key: "brush" },
          { name: "paper", image: paper, alt: "paper", key: "paper" },
          { name: "", image: book, alt: "Item 4", key: "item4" },
          { name: "", image: book, alt: "Item 5", key: "item5" },
          { name: "", image: book, alt: "Item 6", key: "item6" },
          { name: "", image: book, alt: "Item 7", key: "item7" },
          { name: "", image: book, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#C5CEFF"
        emptyCardBackgroundColor="#A9B6FF"
        checkedCardColor="#5A6EDD"
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
