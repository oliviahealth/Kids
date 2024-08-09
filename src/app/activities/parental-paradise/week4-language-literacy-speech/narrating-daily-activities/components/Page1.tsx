"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
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
        title="Narrating Your Daily Activities"
        subtitle="Language, Literacy, & Speech - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Language, Literacy, and Speech are very important milestones your child will develop throughout their life! Did you know you can help your baby start developing these skills while still in the womb? According to the March of Dimes, your baby can recognize sounds starting at 23 weeks of pregnancy. Hearing you voice while in the womb then starts the process of teaching your baby how to talk and read. The activity, Narrating Your Daily Activities, will encourage you to talk to your baby as much as possible throughout your pregnancy! Talking aloud can be strange at first, but remember who you are talking to: your baby, who will be able to recognize and learn from you voice each day!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "",
            image: logo,
            alt: "Item 1",
            key: "item1",
          },
          { name: "", image: logo, alt: "Item 2", key: "item2" },
          { name: "", image: logo, alt: "Item 3", key: "item3" },
          { name: "", image: logo, alt: "Item 4", key: "item4" },
          { name: "", image: logo, alt: "Item 5", key: "item5" },
          { name: "", image: logo, alt: "Item 6", key: "item6" },
          { name: "", image: logo, alt: "Item 7", key: "item7" },
          { name: "", image: logo, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#FEEDFF'
        emptyCardBackgroundColor='#FCD3FF'
        checkedCardColor='#F797FF'
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
