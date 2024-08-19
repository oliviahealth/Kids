"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import image1 from "/public/images/dashboard/pregnancy/internet.svg";
import image2 from "/public/images/dashboard/pregnancy/printer.svg";
import image3 from "/public/images/dashboard/pregnancy/paper.svg";
import image4 from "/public/images/dashboard/pregnancy/pencil.svg";
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
    internet: false,
    printer: false,
    paper: false,
    pencil: false,
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
        title="Trying New Recipes"
        subtitle="Nutrition - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Eating nutritious meals throughout pregnancy ensures you and your baby are getting the necessary fuel to grow. It is also important to know what foods to avoid during pregnancy to reduce the risk of harm. The U.S. Department of Agriculture offers several resources on ensuring you are eating the right foods and avoiding the harmful ones. In today's activity, we will use the USDA's series, WIC Meals of the Month, to choose at least 3, pregnancy safe and beneficial,  recipes to make at home."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "An Internet Source",
            image: image1,
            alt: "internet",
            key: "internet",
          },
          { name: "Printer", image: image2, alt: "printer", key: "printer" },
          { name: "Paper", image: image3, alt: "paper", key: "paper" },
          { name: "Writing Utensil", image: image4, alt: "pencil", key: "pencil" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
