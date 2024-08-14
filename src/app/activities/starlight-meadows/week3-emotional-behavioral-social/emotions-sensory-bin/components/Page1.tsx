"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";


import container from "@/public/images/dashboard/StarlightMeadows/week3/container.svg"
import sensoryFilling from "@/public/images/dashboard/StarlightMeadows/week3/sensoryfilling.svg"
import paper from "@/public/images/dashboard/StarlightMeadows/week3/paper (2).svg"

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
    container: false,
    sensoryFilling: false,
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
        title="Emotions Sensory Bin"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Emotions Sensory Bin"
          introductionText = "Introducing your child to emotions is an important part of their development. As they grow older, being able to understand how they are feeling, as well as recognize emotions in others will help their social development. This activity will allow you to encourage your child to find and practice thinking about different emotions. IMPORTANT NOTE: The sensory filling (beans, rice, sand, etc) used in this activity is small, and is a choking hazard for children. They must be under constant adult supervision in order to prevent choking."

        materialsTitle="Materials Needed"
        materials={[
          {
            name: "container",
            image: container,
            alt: "container",
            key: "container",
          },
          { name: "Sensory Filling", image: sensoryFilling, alt: "sensoryFilling", key: "sensoryFilling" },
          { name: "paper", image: paper, alt: "paper", key: "paper" },
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
