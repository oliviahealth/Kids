"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";

import image1 from "/public/images/dashboard/fantasyForest/week/6/paper.svg";
import image2 from "/public/images/dashboard/fantasyForest/week/6/pencil.svg";

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
        title="My Plate Coloring Page"
        subtitle="Nutrition - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="In this activity, your child will learn about the importance of eating a balanced meal full of lots of different types of food. They will use their memory recall to think of new foods that they have tried or heard of. Your child will also use their imagination to create a unique plate with a variety of colors and shapes. Children at this age like to be involved in the decisions of their life, so including them in the decision of a meal yummy and healthy will help them enjoy it more. It could also be a chance to talk to your child about some of your favorite foods! We hope you enjoy this activity together."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Coloring Page",
            image: image1,
            alt: "image1",
            key: "image1",
          },
          {
            name: "Coloring Utensils",
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}