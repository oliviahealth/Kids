"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import pencil from "/public/images/dashboard/pregnancy/pencil.svg";
import template from "/public/images/dashboard/pregnancy/template.png";
import phone from "/public/images/dashboard/pregnancy/Phone.png";
import poster from "/public/images/dashboard/pregnancy/box-items.svg";

import paper from "/public/images/dashboard/pregnancy/paper.svg";
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
    Pencil: false,
    Template: false,
    Phone: false,
    Paper: false,
    Poster: false
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
        title="Birth Affirmations"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Your emotional, behavioral, and social wellbeing is crucial to your overall health, especially as a parent. By practicing emotional self-care during pregnancy, you can build confidence and equip yourself with powerful emotional health skills. Positive affirmations are one way to practice your emotional wellbeing and reduce anxiety and doubt about giving birth. Affirmations serve as a reminder that you are capable of birthing your baby! In this activity, you will create a Birth Affirmations list to use throughout your pregnancy. "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Writing Utensil",
            image: pencil,
            alt: "Pencil",
            key: "Pencil",
          },
          { name: "Template", image: template, alt: "Template", key: "Template" },
          { name: "Phone", image: phone, alt: "Phone", key: "Phone" },
          { name: "Paper", image: paper, alt: "Paper", key: "Paper" },
          { name: "Poster", image: poster, alt: "Poster", key: "Poster" },
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
