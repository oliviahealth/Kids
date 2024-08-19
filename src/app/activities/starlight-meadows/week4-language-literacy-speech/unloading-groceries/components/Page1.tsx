"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";


import clothes from "@/public/images/dashboard/StarlightMeadows/week3/clothesoptions.svg"
import toys from "@/public/images/dashboard/StarlightMeadows/week3/childrenstoys.svg"
import books from "@/public/images/dashboard/StarlightMeadows/week3/books.svg"

import water from "@/public/images/dashboard/StarlightMeadows/week2/water.svg";



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
        title="Unloading Groceries"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Unloading Groceries"
          introductionText={`Practicing language with your child can happen any time, even when putting away groceries! In this activity, you will be speaking to your child as you unpack groceries from the store and put them away in your home. You can name the items, talk about their colors, where you are putting them, anything! Young children are always listening to what you say, so talking out loud about the things around you and what you are doing can allow them more exposure to language from an early age.`}




        materialsTitle="Materials Needed"
        materials={[
          { name: "", image: water, alt: "Item 4", key: "item4" },
          { name: "", image: water, alt: "Item 4", key: "item4" },
          { name: "", image: water, alt: "Item 4", key: "item4" },
          { name: "", image: water, alt: "Item 4", key: "item4" },
          { name: "", image: water, alt: "Item 5", key: "item5" },
          { name: "", image: water, alt: "Item 6", key: "item6" },
          { name: "", image: water, alt: "Item 7", key: "item7" },
          { name: "", image: water, alt: "Item 8", key: "item8" },
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
