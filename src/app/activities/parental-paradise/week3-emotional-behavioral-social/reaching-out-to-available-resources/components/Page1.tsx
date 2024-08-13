"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";

import internet from "/public/images/dashboard/pregnancy/Internet.png";
import paper from "/public/images/dashboard/pregnancy/paper.svg";
import device from "/public/images/dashboard/pregnancy/device.png";
import pencil from "/public/images/dashboard/pregnancy/pencil.svg";

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
    Internet: false,
    Paper: false,
    Device: false,
    Pencil: false,
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
        title="Reaching Out to Available Resources"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Throughout pregnancy and beyond, having a safe and supportive system surrounding you and your baby can improve mental health, promote a healthy lifestyle, and overall create a stimulating environment for your baby to grow in. A big part of this support system is using available resources and making connections in your community. There are tons of resources available that provide all kinds of support, especially for pregnant women. Some examples include government funded programs for needed supplies, pregnancy support groups, pregnancy and birthing classes, and more. In this activity, you will find resources available to you and create a plan on how you will use them. "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "An Internet Source",
            image: internet,
            alt: "Internet",
            key: "Internet",
          },
          { name: "Paper", image: paper, alt: "Paper", key: "Paper" },
          {
            name: "Technology Device",
            image: device,
            alt: "Device",
            key: "Device",
          },
          {
            name: "Writing Utensil",
            image: pencil,
            alt: "Device",
            key: "Device",
          },
          { name: "", image: logo, alt: "Item 5", key: "item5" },
          { name: "", image: logo, alt: "Item 6", key: "item6" },
          { name: "", image: logo, alt: "Item 7", key: "item7" },
          { name: "", image: logo, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FEEDFF"
        emptyCardBackgroundColor="#FCD3FF"
        checkedCardColor="#F797FF"
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
