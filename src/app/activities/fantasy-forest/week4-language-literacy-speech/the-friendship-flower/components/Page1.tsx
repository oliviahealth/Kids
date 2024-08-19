"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import crayons from "/public/images/activities/fantasy-forest/week4/crayons.svg";
import thirdActivitySheet from "/public/images/activities/fantasy-forest/week4/third-activity-sheet.svg";
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
    crayons: false,
    thirdActivitySheet: false,
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
        title="The Friendship Flower"
        subtitle="Language, Literacy, and Speech - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="As your child develops and starts to make friendships at school, daycare, or other social settings, it is important for them to know what makes a good friend and how to be a good friend to others. One way to help your child start thinking about these qualities is to start a discussion about what a good friend might do or say to others. A big part of being a good friend to other people is thinking through how they would want a friend to treat them. This activity will encourage your child to demonstrate independent thinking and verbal expression as they thoughtfully think about what qualities they would appreciate in their friends and then verbally express those thoughts in order for them be drawn in the flower. As your child thinks through this activity, your child will get to anticipate and learn more about positive social relationships."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Activity Sheet",
            image: thirdActivitySheet,
            alt: "Activity Sheet",
            key: "thirdActivitySheet",
          },
          {
            name: "Crayons",
            image: crayons,
            alt: "Crayons",
            key: "crayons",
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