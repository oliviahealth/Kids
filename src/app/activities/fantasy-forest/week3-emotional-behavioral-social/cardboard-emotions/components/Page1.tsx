"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/activities/fantasy-forest/header-icon.svg";
import tp from "@/public/images/activities/fantasy-forest/toilet-paper.svg";
import marker from "@/public/images/activities/fantasy-forest/marker.svg";
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
    tp: false,
    marker: false,
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
        title="Cardboard Emotions"
        subtitle="Caregiver Wellness - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="During this activity your child will display memory recall as they use emotion vocabulary learned in the past and as they recall a time when they felt a specific emotion. Your child will also exhibit dramatic play as they show an expressive emotion when requested. This activity will also allow your child to practice independent thinking while answering thought promoting, open-ended questions that require a more in-depth response than yes or no.  The sentences in quotations are suggestions for things to say during the activity."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Empty Toilet Paper Rolls (6)",
            image: tp,
            alt: "tp",
            key: "tp",
          },
          { name: "Marker", image: marker, alt: "marker", key: "marker" },
          { name: "", image: marker, alt: "Item 3", key: "item3" },
          { name: "", image: marker, alt: "Item 4", key: "item4" },
          { name: "", image: marker, alt: "Item 5", key: "item5" },
          { name: "", image: marker, alt: "Item 6", key: "item6" },
          { name: "", image: marker, alt: "Item 7", key: "item7" },
          { name: "", image: marker, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#B5F6D0'
        emptyCardBackgroundColor='#88DFAC'
        checkedCardColor='#35A663'
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
