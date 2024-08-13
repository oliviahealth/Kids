"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";


import clothes from "@/public/images/dashboard/StarlightMeadows/week3/clothesoptions.svg"
import toys from "@/public/images/dashboard/StarlightMeadows/week3/childrenstoys.svg"
import books from "@/public/images/dashboard/StarlightMeadows/week3/books.svg"

import water from "@/public/images/dashboard/StarlightMeadows/week2/water.svg";

import floatObject from "@/public/images/dashboard/StarlightMeadows/week5/floatobj.svg";
import container from "@/public/images/dashboard/StarlightMeadows/week5/bigcontainer.svg";


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
    
    floatObject: false,
    container: false,
    
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
        title="Sink and Float"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Sink and Float"
          introductionText={`At the ages of 1-2, your child is developing curiosity about the world around them. They learn best by using their senses and motor skills so letting them explore and experiment with things is a great way to enhance their learning. At this age, it is important to encourage curiosity in your child and to help them explore and learn new things. An easy science experiment you can complete with your toddler is to test whether items will sink or float! In this activity you will collect items from around the house with your toddler and place them in a bowl of water to see whether they sink or float. `}




        materialsTitle="Materials Needed"
        materials={[
          { name: "Floatable Object", image: floatObject, alt: "floatObject", key: "floatObject" },
          { name: "Container", image: container, alt: "container", key: "container" },
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
