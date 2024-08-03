"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";
import block from "/public/images/activities/starlight-meadows/week5/block.svg";

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
    block: false,
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
        title="Blocks"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Young children are often paying a lot of attention to the people and things around them, soaking up information like a sponge. It is important to introduce math concepts (such as counting, shapes, and spacial awareness) to them as soon as you can. In fact, even just counting items out loud can help introduce your child to numbers and counting! In this activity, you will be using playtime with blocks as an opportunity to practice counting, shapes, and where things are (such as “under”, “over”, or “next to”) to your child. Following the activity instructions, you will count, talk about the shape, how many blocks there are, etc. This will allow your child to hear basic math concepts from an early age.  "
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "Block",
              image: block,
              alt: "Block",
              key: "block",
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
        mainBackgroundColor="#C5CEFF"
        emptyCardBackgroundColor="#A9B6FF"
        checkedCardColor="#5A6EDD"
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
