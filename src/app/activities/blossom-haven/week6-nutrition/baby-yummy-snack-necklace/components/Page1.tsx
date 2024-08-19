"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import camera from "/public/images/dashboard/blossomHaven/camera.svg";
import snacks from "/public/images/dashboard/blossomHaven/snacks.svg";
import strings from "/public/images/dashboard/blossomHaven/string.svg";
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
    camera: false,
    snacks: false,
    strings: false,
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
        title="Baby's Yummy Snack Necklace"
        subtitle="Nutrition - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="The first few months of your child's life requires getting nutrients through breastfeeding or formula. When your child is around 6 months old, this is generally a safe time to introduce solid foods to your child. A fun and creative way to introduce some solid foods to your child is by making them a snack necklace. This activity will introduce safe, solid foods that your child will explore by touching and tasting, and provide some fun with the food being around them. Before doing this activity, it is advised to talk to your doctor to find out when your child is able to safely have solid foods, and must be monitored for their safety while doing this activity."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera Lens",
            image: camera,
            alt: "camera",
            key: "camera",
          },
          { name: "Child-safe Snacks", image: snacks, alt: "snacks", key: "snacks" },
          { name: "String", image: strings, alt: "strings", key: "strings" },
          { name: "", image: logo, alt: "Item 4", key: "item4" },
          { name: "", image: logo, alt: "Item 5", key: "item5" },
          { name: "", image: logo, alt: "Item 6", key: "item6" },
          { name: "", image: logo, alt: "Item 7", key: "item7" },
          { name: "", image: logo, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#FFF7E3'
        emptyCardBackgroundColor='#F8E7BA'
        checkedCardColor='#F1A533'
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
