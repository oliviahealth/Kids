"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";


import clothes from "../../../../../../public/images/dashboard/StarlightMeadows/week3/clothesoptions.svg"
import toys from "../../../../../../public/images/dashboard/StarlightMeadows/week3/childrenstoys.svg"
import books from "../../../../../../public/images/dashboard/StarlightMeadows/week3/books.svg"

import water from "../../../../../../public/images/dashboard/StarlightMeadows/week2/water.svg";



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
        title="Walking Tour"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Walking Tour"
          introductionText={`Between ages one and two, children are constantly listening to and observing what is happening around them. Providing them with many opportunities to hear language will help their language development. In this activity, you will go on a walk with your child (this could be in your neighborhood, a park, even a store), and talk to them about the things you see around you. Even if they still aren't able to say many words back to you, they are picking up the rules of language, and may be hearing new words along the way!

Note: when you are talking to your child, try to avoid using "baby talk". They are learning from you, and will likely mimic the speaking habits you frequently show them. `}




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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
