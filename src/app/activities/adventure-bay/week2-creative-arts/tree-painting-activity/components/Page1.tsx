"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import cotton from "@/public/images/dashboard/adventure-bay/Creative-Arts/cotton.png";
import paint from "@/public/images/dashboard/adventure-bay/Creative-Arts/paint.png";
import template from "@/public/images/dashboard/adventure-bay/Creative-Arts/template.png";
import paper from "@/public/images/dashboard/adventure-bay/Creative-Arts/paper.png";
import pin from "@/public/images/dashboard/adventure-bay/Creative-Arts/pin.png";
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
    Cotton: false,
    Paint: false,
    Paper: false,
    Clothespin: false,
    Template: false,
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
        title="Tree Painting Activity"
        subtitle="Creative Arts - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Painting does not always have to be done with a paintbrush! Using items around the house is a great 
way to make art more fun! Cotton ball painting is an activity that helps your preschooler
improve their fine motor skills and be creative. In this activity, your preschooler can also learn and explore more about the 4 seasons by creating different types of trees based on the time of year.  Your child will love this craft and will be proud to display their version of the nature all around us!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Cotton Balls",
            image: cotton,
            alt: "Cotton",
            key: "Cotton",
          },
          {
            name: "Paint",
            image: paint,
            alt: "Paint",
            key: "Paint",
          },
          {
            name: "Clothespin",
            image: pin,
            alt: "Clothespin",
            key: "Clothespin",
          },
          { name: "Paper", image: paper, alt: "Item 4", key: "Paper" },
          {
            name: "OliviaKIDS Tree Trunk Template (Optional)",
            image: template,
            alt: "Template",
            key: "Template",
          },
          { name: "", image: paper, alt: "Item 8", key: "item8" },
          { name: "", image: paper, alt: "Item 8", key: "item8" },
          { name: "", image: paper, alt: "Item 8", key: "item8" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
