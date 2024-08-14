"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";


import ball from "@/public/images/dashboard/StarlightMeadows/week3/ball.svg"


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
    ball: false,
    
    
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
        title="Rolling the Ball"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Rolling the Ball"
          introductionText={`Building positive social and behavioral skills is an important part of development for 1-2 year olds. An important aspect of this is learning cooperation and sharing. A fun way to encourage your child to practice cooperation is through this "rolling the ball" activity. This teaches your toddler how to work together with others along with helping them develop motor skills. This cooperative play activity will translate into every day life when your toddler needs to socialize, take turns, and collaborate with their peers.`}




        materialsTitle="Materials Needed"
        materials={[
          {
            name: "1 ball",
            image: ball,
            alt: "ball",
            key: "ball",
          },
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
