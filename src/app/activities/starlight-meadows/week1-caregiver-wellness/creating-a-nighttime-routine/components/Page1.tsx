"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/StarlightMeadows/nightlogo.svg";
import book from "/public/images/dashboard/StarlightMeadows/book.svg";
import journal from "/public/images/dashboard/StarlightMeadows/journal.svg";
import music from "/public/images/dashboard/StarlightMeadows/music.svg";

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
    book: false,
    journal: false,
    music: false,
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
        title="Sleep Health - Creating a Nighttime Routine"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction "
        introductionText="Getting good sleep is one of the keys to maintaining your physical and mental health. Maintaining good sleep health will help you function each day as a caregiver and will help reduce fatigue and burnout.  However, the excitement and stress of parenthood can affect the quality and amount of sleep you get. A great way to promote sleep health is to create a bedtime routine you can follow each night. This helps your brain to adjust to your routine and start preparing for sleep at the same time each night. For this activity, you will be creating your own nighttime routine. Use the template to create and follow your nightly routine!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Book",
            image: book,
            alt: "Book",
            key: "book",
          },
          { name: "Journal", image: journal, alt: "Journal", key: "journal" },
          { name: "Music", image: music, alt: "Music", key: "music" },
          { name: "", image: music, alt: "Item 4", key: "item4" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
