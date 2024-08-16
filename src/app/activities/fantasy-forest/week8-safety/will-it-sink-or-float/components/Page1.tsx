"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";

import image1 from "/public/images/dashboard/fantasyForest/week/8/paper.svg";
import image2 from "/public/images/dashboard/fantasyForest/week/8/bear.svg";
import image3 from "/public/images/dashboard/fantasyForest/week/8/water.svg";
import image4 from "/public/images/dashboard/fantasyForest/week/8/crayon.svg";

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
    image3: false,
    image4: false,
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
        title="Will it Sink or Float?"
        subtitle="Safety - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A very important topic to discuss and emphasize with your child is water safety. It is important for your child to understand that without the right equipment or swimming abilities, being in the water can be very dangerous. Exposing your child to water at a young age and teaching them rescue strategies is very important for their safety. This activity is a fun way to open up the conversation of water safety with your child, allowing your child to see what sinks and what floats, and how quickly it can happen. In this activity, you will be testing your child’s hypothesis that an item will sink or float. Talking about and describing the items will develop critical thinking and verbal expression."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Provided Worksheet",
            image: image1,
            alt: "image1",
            key: "image1",
          },
          {
            name: "Home Items",
            image: image2,
            alt: "image2",
            key: "image2",
          },
          { name: "Water (bathtub or container)", image: image3, alt: "image3", key: "image3" },
          { name: "Crayons/Markers", image: image4, alt: "image4", key: "image4" },
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
            text: "Download \“Provided Worksheet\”",
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