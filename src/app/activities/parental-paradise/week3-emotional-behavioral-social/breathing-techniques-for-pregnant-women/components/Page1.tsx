"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import camera from "/public/images/dashboard/pregnancy/camera.svg";
import towel from "/public/images/dashboard/pregnancy/yoga-mat.svg";
import template from "/public/images/dashboard/pregnancy/template.png";
import pen from "/public/images/dashboard/pregnancy/pen.png";
import bino from "/public/images/dashboard/pregnancy/Bino.png";
import cake from "/public/images/dashboard/pregnancy/cake.png";

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
    Camera: false,
    Towel: false,
    Template: false,
    Pen: false,
    Bino: false,
    Cake: false,
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
        title="Breathing Techniques for Pregnant Women"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="During pregnancy, a woman's body goes through many changes that can be challenging both physically and emotionally. Intentional breathing techniques are proven to  be extremely beneficial in helping both the mother and baby stay healthy and calm. These techniques offer several benefits, such as reducing stress, managing pain, improving oxygen flow to the baby, and preparing for labor. By practicing these breathing exercises, you can feel more relaxed, sleep better, and connect more deeply with your growing baby! Learning and using proper breathing methods not only makes pregnancy more comfortable, but also helps make childbirth smoother and less stressful. We will walk you through several different breathing techniques. Feel free to try them all, or pick your favorites!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera",
            image: camera,
            alt: "Camera",
            key: "Camera",
          },
          { name: "Towel", image: towel, alt: "Towel", key: "Towel" },
          {
            name: "List Template",
            image: template,
            alt: "Template",
            key: "Template",
          },
          { name: "Pen", image: pen, alt: "Pen", key: "Pen" },
          { name: "Binoculars", image: bino, alt: "Bino", key: "Bino" },
          { name: "Birthday Cake", image: cake, alt: "Cake", key: "Cake" },
          { name: "", image: logo, alt: "Item 7", key: "item7" },
          { name: "", image: logo, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FEEDFF"
        emptyCardBackgroundColor="#FCD3FF"
        checkedCardColor="#F797FF"
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
