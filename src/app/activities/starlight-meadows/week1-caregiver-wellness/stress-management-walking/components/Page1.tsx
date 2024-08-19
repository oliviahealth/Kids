"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/StarlightMeadows/nightlogo.svg"
import book from "/public/images/dashboard/StarlightMeadows/book.svg";
import water from "/public/images/dashboard/StarlightMeadows/water.svg";
import sunglasses from "/public/images/dashboard/StarlightMeadows/sunglasses.svg";
import apple from "/public/images/dashboard/StarlightMeadows/apple.svg";

import yogaMat from "/public/images/dashboard/StarlightMeadows/yogaMat.svg";

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
    sunglasses: false,
    apple: false,
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
        title="Stress Management - Walking"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Walk it off."
        introductionText="Parenting can be very stressful at times, so finding ways to manage your stress is key.  Exercise and mindfulness are some forms of stress management that help many people. This activity will allow you to practice mindfulness, by engaging with your five senses during the walk, while also getting exercise. You may even bring your child along if you choose! 
 "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Water",
            image: water,
            alt: "water",
            key: "water",
          },
          { name: "Sunglasses", image: sunglasses, alt: "sunglasses", key: "sunglasses" },
          { name: "Snack", image: apple, alt: "apple", key: "apple" },
          { name: "", image: book, alt: "Item 5", key: "item5" },
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
