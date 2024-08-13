"use client";
import React, { useState, useEffect } from "react";
import camera from "/public/images/activities/blossom-haven/week5/camera.svg";
import sheet from "/public/images/activities/blossom-haven/week5/sheet.svg";
import writingUtensil from "/public/images/activities/blossom-haven/week5/writing-utensil.svg";
import householdItems from "/public/images/activities/blossom-haven/week5/household-items.svg";
import logo from "/public/images/activities/blossom-haven/icon.svg";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import { tap } from "node:test/reporters";

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
    camera: false,
    sheet: false,
    writingUtensil: false,
    householdItems: false,
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
        title="Baby's Shape Play Mat"
        subtitle="Math & Science - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Being the caregiver of a 0-1 year old means you've got quite a curious learning trying to learn more about themselves and their surroundings. An important area of growth that you can help your child in reaching their growth and development milestones is their math and science skills. For this at home activity, we're going to have you, the caregiver, work on an activity where you trace household objects on a sheet of paper, and guide your child on matching the objects shapes. This activity exposes your child to the shapes of objects, and assists them using math classification tools and scientific processes that will significantly assist your child reach their math and science milestones."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera",
            image: camera,
            alt: "Camera",
            key: "camera",
          },
          {
            name: "Sheet",
            image: sheet,
            alt: "Sheet",
            key: "sheet",
          },
          {
            name: "Writing Utensil",
            image: writingUtensil,
            alt: "Writing Utensil",
            key: "writingUtensil",
          },
          {
            name: "Household Items",
            image: householdItems,
            alt: "Household Items",
            key: "householdItems",
          },
          { name: "", image: "empty", alt: "Item 5", key: "item5" },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FFF7E3"
        emptyCardBackgroundColor="#F8E7BA"
        checkedCardColor="#F1A533"
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