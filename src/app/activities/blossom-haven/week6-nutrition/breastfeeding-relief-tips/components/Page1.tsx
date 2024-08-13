"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import clothes from "/public/images/dashboard/blossomHaven/clothes.svg";
import bottle from "/public/images/dashboard/blossomHaven/bottle.svg";
import pillow from "/public/images/dashboard/blossomHaven/pillow.svg";
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
    clothes: false,
    bottle: false,
    pillow: false,
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
        title="Breastfeeding Relief Tips for Caregiver"
        subtitle="Nutrition - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="The first few months of your 0-1 year old child's nutrition comes from breastfeeding, but sometimes breastfeeding can cause some soreness that makes feeding your child a more difficult process. While there are many options out there to try and make breastfeeding easier, caregivers still struggle to reduce the aches and soreness breastfeeding can have on them. Today, we are going to teach you some simple but effective stretches, exercises, and tips that have helped many caregivers regain some comfort and make breastfeeding easier on their bodies. These stretches, exercises, and tips will ensure that you are able to still feed your child correctly, make feeding time easier, and reduce the aches and pain to provide comfort so you stay healthy enough to breastfeed your child to gain their vital nutrients."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Comfortable Clothes",
            image: clothes,
            alt: "clothes",
            key: "clothes",
          },
          { name: "Water Bottle", image: bottle, alt: "bottle", key: "bottle" },
          { name: "Pillow", image: pillow, alt: "pillow", key: "pillow" },
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
