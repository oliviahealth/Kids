"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import paper from "/public/images/dashboard/pregnancy/paper.svg";
import pencil from "/public/images/dashboard/pregnancy/pencil.svg";
import phone from "/public/images/dashboard/pregnancy/Phone.png";

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
    Paper: false,
    Phone: false,
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
        title="Fianncial Planning for Baby's First Year"
        subtitle="Math & Science - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A new baby brings major shifts in your finances. It's an 18 year financial commitment and a lifetime of love and memories! Practicing  budgeting during your pregnancy and throughout your child's life is a great way to track finances, save for necessities and future goals, and instill good financial habits and skills into your child as they grow! In today's activity, you will practice creating a budget for your baby's first year before they arrive! You can then use these skills in your future budgeting and teaching your child financial skills.
In an article from InCharge Debt Solutions, Joey Johnston discusses what budgeting for a baby looks like. We will use his suggestions throughout this activity."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Writing Utensil",
            image: pencil,
            alt: "Pencil",
            key: "Pencil",
          },
          { name: "Paper", image: paper, alt: "Paper", key: "Paper" },
          { name: "Phone", image: phone, alt: "Phone", key: "Phone" },
          { name: "", image: logo, alt: "Item 4", key: "item4" },
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
