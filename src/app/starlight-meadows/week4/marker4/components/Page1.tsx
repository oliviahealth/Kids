"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";


import clothes from "../../../../../../public/images/dashboard/StarlightMeadows/week3/clothesoptions.svg"
import toys from "../../../../../../public/images/dashboard/StarlightMeadows/week3/childrenstoys.svg"
import books from "../../../../../../public/images/dashboard/StarlightMeadows/week3/books.svg"

import water from "../../../../../../public/images/dashboard/StarlightMeadows/week2/water.svg";

import bubbles from "../../../../../../public/images/dashboard/StarlightMeadows/week4/bubbles.svg";


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
    
    bubbles:false
    
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
        title="Blowing Bubbles!"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Blowing Bubbles!"
          introductionText={`Children love to play with bubbles! It is super exciting and engaging for your child which makes it a great opportunity to practice language and speech! There are lots of words that can be used to describe bubbles and bubbles can be used to practice making sounds. Children learn language from mimicking their caregivers. Using repetitive words while blowing bubbles will help your child develop their speech. In this activity you will be using bubbles to help develop language with your child. This will help model speech for your child while enjoying a fun activity outside!
`}




        materialsTitle="Materials Needed"
        materials={[
          { name: "bubbles", image: bubbles, alt: "bubbles", key: "bubbles" },
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
