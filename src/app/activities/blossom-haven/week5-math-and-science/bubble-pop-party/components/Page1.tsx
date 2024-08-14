"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import camera from "/public/images/activities/blossom-haven/week5/camera.svg";
import bubbles from "/public/images/activities/blossom-haven/week5/bubbles.svg";
import sunnyDay from "/public/images/activities/blossom-haven/week5/sunny-day.svg";
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
    bubbles: false,
    sunnyDay: false,
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
        title="Bubble Pop Party!"
        subtitle="Math & Science - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Your child is constantly observing their world around them and everything that interacts with it in order for them to work on reaching their math & science growth and development milestones. One activity that will work on your child's understanding of basic science processes but still provide a lot of fun is playing with bubbles. Playing with bubbles has numerous benefits in your child's development as they are learning what bubbles are, watching them float and pop, touching them, and can even get your child up and moving if they become interested in the bubbles. Early exposure to the bubbles and continual use of this activity will get your child interested in learning more on how their world work around them, but give them an opportunity to have some fun at the same time."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera",
            image: camera,
            alt: "Camera",
            key: "camera",
          },
          {
            name: "Bubbles",
            image: bubbles,
            alt: "Bubbles",
            key: "bubbles",
          },
          {
            name: "Sunny Day",
            image: sunnyDay,
            alt: "Sunny Day",
            key: "sunnyDay",
          },
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