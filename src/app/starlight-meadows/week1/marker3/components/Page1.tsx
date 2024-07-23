"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg"
import book from "../../../../../../public/images/dashboard/StarlightMeadows/book.svg";
import personIcon from "../../../../../../public/images/dashboard/StarlightMeadows/personIcon.svg";
import yogaMat from "../../../../../public/images/dashboard/StarlightMeadows/yogaMat.svg";

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
    personIcon: false,
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
        title="Stress Management - Box Breathing"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Just breathe. "
        introductionText="Being a parent, guardian, or caregiver can be a very busy lifestyle! This can make it hard sometimes to find the time to take care of yourself when you are feeling stressed or overwhelmed. However, it is very important to make sure that you make some time each day to take care of your needs. One quick way to do this is by using breathing techniques to calm yourself. 

One breathing technique we will be trying today is called Box breathing. Box breathing is a technique used worldwide, notably by Navy SEALs, as a form of stress relief. You may have also heard of this technique being called equal breathing, or square breathing.  

You can practice this breathing technique regularly, or just as needed for stress. 
 "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Alone Time",
            image: personIcon,
            alt: "personIcon",
            key: "personIcon",
          },
          { name: "", image: book, alt: "Item 5", key: "item5" },
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
