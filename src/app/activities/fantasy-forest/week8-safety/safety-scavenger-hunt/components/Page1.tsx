"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import image1 from "/public/images/dashboard/fantasyForest/week/8/paper.svg";
import image2 from "/public/images/dashboard/fantasyForest/week/8/pencil.svg";

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
    image1: false,
    image2: false,
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
        title="Safety Scavenger Hunt"
        subtitle="Safety - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Before your child heads to kindergarten or as a current kindergartner, teaching safety to your child is important! This safety scavenger hunt will help your child explore their home to discover ways to stay safe. They will look for places to make smart choices to keep themselves and others protected. They will learn how to avoid accidents, recognize dangerous situations, and use safety tools the right way. Some other skills they will practice are paying attention to their surroundings, following rules, and thinking ahead to prevent accidents. After your adventure through the safety scavenger hunt, you and your child will be safety experts!"
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "Worksheet",
              image: image1,
              alt: "Dice",
              key: "dice",
          },
          {
              name: "Writing Utensil",
              image: image2,
              alt: "Item 2",
              key: "item2",
          },
          { name: "", image: "empty", alt: "Item 3", key: "item3" },
          { name: "", image: "empty", alt: "Item 4", key: "item4" },
          { name: "", image: "empty", alt: "Item 5", key: "item5" },
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