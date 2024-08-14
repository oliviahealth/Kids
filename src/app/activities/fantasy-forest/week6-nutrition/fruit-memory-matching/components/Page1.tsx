"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";

import image1 from "/public/images/dashboard/fantasyForest/week/6/paper.svg";
import image2 from "/public/images/dashboard/fantasyForest/week/6/scissors.svg";

import downloadIcon from "@/public/images/dashboard/rainbowValley/shared/download.png";
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
        title="Fruit Memory Matching"
        subtitle="Nutrition - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="An important part of helping a child learn to eat healthy is helping them recognize which foods provide nutritious benefits. This activity will help with memory recall when they are flipping each fruit card over and trying to match it with its corresponding card. In addition, sequential memory is needed to practice remembering each card placement. This activity also allows them to practice critical thinking while playing and thinking about where each card is placed.  In addition, this activity helps your child recognize healthy food options that are needed for their growth and development. It is important to talk through these fruits with your child to help them understand that they can help them grow, develop their brain, and make them strong."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Provided Worksheet",
            image: image1,
            alt: "image1",
            key: "image1",
          },
          {
            name: "Scissors",
            image: image2,
            alt: "image2",
            key: "image2",
          },
          { name: "", image: image1, alt: "image1", key: "image1" },
          { name: "", image: image1, alt: "image1", key: "image1" },
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
        link={[
          {
            text: "Download \"Provided Worksheet\"",
            img: downloadIcon,
            url: "https://tamucs.sharepoint.com/teams/Team-OLIVIAContentWorkgroup/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL%2FOLIVIAKIDS%20Creating%20Coping%20Skills%2Epdf&parent=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL",
          },
        ]}
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