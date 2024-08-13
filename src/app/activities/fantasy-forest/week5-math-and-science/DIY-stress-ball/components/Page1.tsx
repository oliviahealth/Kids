"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";

import flour from "/public/images/activities/fantasy-forest/week5/flour.svg";
import funnel from "/public/images/activities/fantasy-forest/week5/funnel.svg";
import bottle from "/public/images/activities/fantasy-forest/week5/bottle.svg";
import balloon from "/public/images/activities/fantasy-forest/week5/balloon.svg";
import sharpie from "/public/images/activities/fantasy-forest/week5/sharpie.svg";

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
    flour: false,
    funnel: false,
    bottle: false,
    balloon: false,
    sharpie: false,
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
        title="DIY Stress Ball"
        subtitle="Domain name - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Learning to control emotions, especially worry and stress, is a hard skill to learn. It involves coming up with mechanisms to help us cope and sort through these powerful emotions when we experience them. This activity works on giving your child a mechanism to express their emotions in a productive and helpful way. From this activity your child will have the opportunity to practice following directions by learning how to make the stress ball. Also, your child will practice self-regulation by learning how to use the stress ball in times of worry or unease. Depending on your child’s ability you may need to actively make the stress ball yourself but be sure to narrate what you’re doing as you do it, so your child can follow along."
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "3/4 Cup of Flour",
              image: flour,
              alt: "Flour",
              key: "flour",
          },
          {
              name: "Funnel",
              image: funnel,
              alt: "Funnel",
              key: "funnel",
          },
          {
              name: "Empty Plastic Bottle",
              image: bottle,
              alt: "Bottle",
              key: "bottle",
          },
          {
              name: "Balloon",
              image: balloon,
              alt: "Balloon",
              key: "balloon",
          },
          {
              name: "Sharpie",
              image: sharpie,
              alt: "Sharpie",
              key: "sharpie",
          },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
      ]}
      
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#B5F6D0"
        emptyCardBackgroundColor="#88DFAC"
        checkedCardColor="#35A663"
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