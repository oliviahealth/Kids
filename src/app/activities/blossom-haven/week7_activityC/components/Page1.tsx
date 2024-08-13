"use client";
import React, { useState, useEffect } from "react";
import camera from "/public/images/activities/blossom-haven/week5/camera.svg";

import logo from "/public/images/activities/blossom-haven/icon.svg";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import { tap } from "node:test/reporters";

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
        title="Baby Boot Camp"
        subtitle="Physical Activity - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="While you cannot predict at what age your child will begin to start walking, it is important while they are between 0-1 year old to get them prepared to start walking. While tummy time helps your child grow their upper body muscles on their own, you'll be assisting your child much more to grow the muscles in their lower body and legs. In this activity, you will complete the following steps in order to get your child ready to begin walking, and motivate them to walk on their own once they are ready. Only you will be able to tell when your child is ready to walk, and doing these steps will effectively prepare them for when they're ready to try walking on their own."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera",
            image: camera,
            alt: "Camera",
            key: "camera",
          },
          { name: "", image: "empty", alt: "Item 2", key: "item2" },
          { name: "", image: "empty", alt: "Item 3", key: "item3" },
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
