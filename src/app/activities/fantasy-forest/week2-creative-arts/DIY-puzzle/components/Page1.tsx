"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import image1 from "@/public/images/dashboard/fantasyForest/week/2/act2/coloring_pages.png";
import image2 from "@/public/images/dashboard/fantasyForest/week/2/act2/crayons.png";
import image3 from "@/public/images/dashboard/fantasyForest/week/2/act2/scissors.png";

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
    coloring_pages: false,
    crayons: false,
    scissors: false,
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
        title="DIY Puzzle"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Creativity and problem-solving are two important parts of development for a child ages 4-5. It allows your child to build their imagination and develop strategies to start working through minor challenges on their own. Puzzles are a great way for young children to work on fine motor skills, hand-eye coordination, develop their attention span, and provide a challenge to work through on their own or with guidance from a parent. It can also teach your child the importance of patience and critical thinking. This is a creative arts activity that allows your child to create their own puzzle from a coloring page that they have completed. "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Coloring Pages",
            image: image1,
            alt: "Coloring Pages",
            key: "coloring_pages",
          },
          { name: "Crayons", image: image2, alt: "Crayons", key: "crayons" },
          { name: "Scissors", image: image3, alt: "Scissors", key: "scissors" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
