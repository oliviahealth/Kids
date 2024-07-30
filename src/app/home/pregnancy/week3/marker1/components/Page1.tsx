"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import camera from "@/public/images/dashboard/pregnancy/camera.svg";
import towel from "@/public/images/dashboard/pregnancy/towel.svg";
import template from "@/public/images/dashboard/pregnancy/template.png";
import pen from "@/public/images/dashboard/pregnancy/pen.png";
import binocular from "@/public/images/dashboard/pregnancy/binocular.png";
import cake from "@/public/images/dashboard/pregnancy/cake.png";
import download from "@/public/images/dashboard/pregnancy/download.png";
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
    Camera: false,
    Towel: false,
    Template: false,
    Pen: false,
    Binocular: false,
    Cake: false,
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
        title="Breathing Techniques For Pregnant Women"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Throughout pregnancy and beyond, having a safe and supportive system surrounding you and your baby can improve mental health, promote a healthy lifestyle, and overall create a stimulating environment for your baby to grow in. A big part of this support system is using available resources and making connections in your community. There are tons of resources available that provide all kinds of support, especially for pregnant women. Some examples include government funded programs for needed supplies, pregnancy support groups, pregnancy and birthing classes, and more. In this activity, you will find resources available to you and create a plan on how you will use them. "
        materialsTitle="Materials Needed"
        link={[
          {
            text: "Download 'List Template'",
            url: "",
            img: download,
          },
        ]}
        materials={[
          {
            name: "Camera lens",
            image: camera,
            alt: "Camera",
            key: "Camera",
          },
          {
            name: "Towel",
            image: towel,
            alt: "Towel",
            key: "Towel",
          },
          {
            name: "List Template",
            image: template,
            alt: "Template",
            key: "Template",
          },
          { name: "Pen", image: pen, alt: "Pen", key: "Pen" },
          {
            name: "Binocular",
            image: binocular,
            alt: "Pencils",
            key: "Pencils",
          },
          { name: "Birthday Cake", image: cake, alt: "Cake", key: "Cake" },
          { name: "", image: cake, alt: "Item 7", key: "item7" },
          { name: "", image: cake, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#C5FFFC"
        emptyCardBackgroundColor="#8AEFEB"
        checkedCardColor="#52C5C0"
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
