"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import image1 from "@/public/images/dashboard/fantasyForest/week/7/paper.png";
import image2 from "@/public/images/dashboard/fantasyForest/week/7/pen.png";
import image3 from "@/public/images/dashboard/fantasyForest/week/7/bowl.png";
import image4 from "@/public/images/dashboard/fantasyForest/week/7/music.png";
import image5 from "@/public/images/dashboard/fantasyForest/week/7/flashlights.png";

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
    paper: false,
    pen: false,
    bowl: false,
    music: false,
    flashlights: false,
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
        title="Family Dance Party!"
        subtitle="Physical Activity - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`
          An important part of keeping your body strong and healthy is finding a way to move and be physically active every day. Teaching your child about the importance of exercise from a young age is important for their physical and mental health. This activity is a fun way to get the whole family up and moving. This is a great activity for children of all ages, so siblings can get involved in the fun as well. Dance parties are a great way to move your body, get your heart rate up, and break a little sweat, all while having a lot of fun!
          `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Small Pieces of Paper",
            image: image1,
            alt: "Small Pieces of Paper",
            key: "paper",
          },
          {
            name: "Pen",
            image: image2,
            alt: "Pen",
            key: "pen",
          },
          {
            name: "Bowl",
            image: image3,
            alt: "Bowl",
            key: "bowl",
          },
          {
            name: "Music",
            image: image4,
            alt: "Music",
            key: "music",
          },
          {
            name: "Flashlights (Optional)",
            image: image5,
            alt: "Flashlights (Optional)",
            key: "flashlights",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#B5F6D0"
        emptyCardBackgroundColor="#88DFAC"
        checkedCardColor="#35A663"
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
