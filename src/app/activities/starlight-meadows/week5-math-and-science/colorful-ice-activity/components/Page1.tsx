"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";


import clothes from "@/public/images/dashboard/StarlightMeadows/week3/clothesoptions.svg"
import toys from "@/public/images/dashboard/StarlightMeadows/week3/childrenstoys.svg"
import books from "@/public/images/dashboard/StarlightMeadows/week3/books.svg"

import water from "@/public/images/dashboard/StarlightMeadows/week2/water.svg";

import iceCubeTray from "@/public/images/dashboard/StarlightMeadows/week5/icecubetray.svg";
import foodColoring from "@/public/images/dashboard/StarlightMeadows/week5/foodcoloring.svg";
import toyHammer from "@/public/images/dashboard/StarlightMeadows/week5/hammer.svg";


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
    
    iceCubeTray: false,
    foodColoring: false,
    toyHammer: false,
    water: false,
    
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
        title="Colorful Ice Activity"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Colorful Ice Activity"
          introductionText={`As your child is learning and growing, they are become more and more curious. At this age they love to learn and discover new things and are fascinated with the world. Providing your child with hands-on opportunities to learn new things is great for their development. Children at this age love bright colors and will love this colorful ice cube activity! In this activity you will be teaching your child about freezing and melting water and colors by experimenting with food coloring and ice! `}




        materialsTitle="Materials Needed"
        materials={[
          { name: "ice cube tray", image: iceCubeTray, alt: "iceCubeTray", key: "iceCubeTray" },
          { name: "food coloring", image: foodColoring, alt: "foodColoring", key: "foodColoring" },
          { name: "toy hammer", image: toyHammer, alt: "toyHammer", key: "toyHammer" },
          { name: "water", image: water, alt: "water", key: "water" },
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
