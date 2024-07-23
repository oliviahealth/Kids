"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg"
import book from "../../../../../../public/images/dashboard/StarlightMeadows/book.svg";
import spaceIcon from "../../../../../../public/images/dashboard/StarlightMeadows/spaceIcon.svg";
import yogaMat from "../../../../../../public/images/dashboard/StarlightMeadows/yogaMat.svg";

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
    spaceIcon: false,
    yogaMat: false,
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
        title="Stress Management - Stretching"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Muscle Tension"
        introductionText="Being a caregiver is a super important and rewarding role. However, the every day responsibilities of parenthood can create stress and it is just as important to care for yourself. Stress can cause uncomfortable tension to build up in your muscles. Finding ways to manage your stress can have great outcomes on your wellbeing. A quick way to relieve tension caused by stress is through simple stretching exercises. Follow these 3 stretches to alleviate tension and manage your stress. 
 "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "space",
            image: spaceIcon,
            alt: "spaceIcon",
            key: "spaceIcon",
          },
          { name: "yoga mat", image: yogaMat, alt: "yogaMat", key: "yogaMat" },
          { name: "", image: book, alt: "Item 5", key: "item5" },
          { name: "", image: book, alt: "Item 5", key: "item5" },
          { name: "", image: book, alt: "Item 5", key: "item5" },
          { name: "", image: book, alt: "Item 6", key: "item6" },
          { name: "", image: book, alt: "Item 7", key: "item7" },
          { name: "", image: book, alt: "Item 8", key: "item8" },
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
