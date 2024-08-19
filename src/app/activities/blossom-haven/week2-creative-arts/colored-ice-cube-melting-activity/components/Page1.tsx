"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import foodColoring from "/public/images/activities/blossom-haven/food-coloring.svg";
import iceCubeTray from "/public/images/activities/blossom-haven/ice-cube-tray.svg";
import paperTowel from "/public/images/activities/blossom-haven/paper-towel.svg";
import list from "@/public/images/dashboard/adventure-bay/Vector.png";
import pen from "@/public/images/dashboard/adventure-bay/fluent_pen-20-filled.png";
import paper from "@/public/images/dashboard/adventure-bay/mdi_paper.png";
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
    foodColoring: false,
    iceCubeTray: false,
    paperTowel: false,
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
        title="Colored Ice Cube Melting Activity"
        subtitle="Creative Arts - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

<IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A topic of your child's growth that professionals like to focus on is your child's engagement in creative art activities. Creative arts at a young age creates many opportunities for your child including high creativity and imagination, improved motor skills, emotional expression, visual learning, and problem solving skills. A great, simple activity that you and your child will enjoy to do together is called Colored Ice Cube Melting Activity. This activity is designed to engage your child by looking at the colored ice cubes, showing and feeling their emotions, and touching the colored ice cubes to explore the feeling and the world around them. Your child explores the world through touch and using their senses, so by doing this activity with them you're allowing them to freely explore themselves and have fun all at the same time."
        materialsTitle="Materials Needed"
        materials={[
            {
              name: "Food Coloring",
              image: foodColoring,
              alt: "Food Coloring",
              key: "foodColoring",
            },
            { name: "Ice Cube Tray", image: iceCubeTray, alt: "Ice Cube Tray", key: "iceCubeTray" },
            { name: "Paper Towel", image: paperTowel, alt: "Paper Towel", key: "paperTowel" },
            { name: "", image: foodColoring, alt: "Item 4", key: "item4" },
            { name: "", image: foodColoring, alt: "Item 5", key: "item5" },
            { name: "", image: foodColoring, alt: "Item 6", key: "item6" },
            { name: "", image: foodColoring, alt: "Item 7", key: "item7" },
            { name: "", image: foodColoring, alt: "Item 8", key: "item8" },
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
