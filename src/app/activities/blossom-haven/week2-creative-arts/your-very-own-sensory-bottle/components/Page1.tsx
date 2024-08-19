"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import waterBottle from "/public/images/activities/blossom-haven/water-bottle.svg";
import glitter from "/public/images/activities/blossom-haven/glitter.svg";
import rice from "/public/images/activities/blossom-haven/rice.svg";
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
    waterBottle: false,
    rice: false,
    glitter: false,
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
        title="Your Very Own Sensory Bottle"
        subtitle="Creative Arts - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

<IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Sensory bottles have become a popular creative art activity for caregivers and their child to do together. Sensory bottles were designed as a fun creative art activity that helps your child in their growth/development, creating a calming, relaxed feeling for your child no matter where you're at. Some of the benefits sensory bottles bring include growth in motor skills, sensory exploration with their five senses, and even helps your child understand and regulate their emotions. Today, we are going to teach how you, the caregiver, can get your child interested in these sensory bottles and how this can be used throughout your child's growth across ages."
        materialsTitle="Materials Needed"
        materials={[
            {
              name: "Water Bottle",
              image: waterBottle,
              alt: "Water Bottle",
              key: "waterBottle",
            },
            { name: "Glitter", image: glitter, alt: "Glitter", key: "glitter" },
            { name: "Rice", image: rice, alt: "Rice", key: "rice" },
            { name: "", image: "empty", alt: "Item 4", key: "item4" },
            { name: "", image: "empty", alt: "Item 5", key: "item5" },
            { name: "", image: "empty", alt: "Item 6", key: "item6" },
            { name: "", image: "empty", alt: "Item 7", key: "item7" },
            { name: "", image: "empty", alt: "Item 8", key: "item8" },
          ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FFF7E3"
        emptyCardBackgroundColor="#F8E7BA"
        checkedCardColor="#F1A533"
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

