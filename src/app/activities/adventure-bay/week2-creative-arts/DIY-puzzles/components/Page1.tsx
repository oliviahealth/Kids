"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import cardboard from "@/public/images/dashboard/adventure-bay/Creative-Arts/cardboard.png";
import scissors from "@/public/images/dashboard/adventure-bay/Creative-Arts/scissors.png";
import glue from "@/public/images/dashboard/adventure-bay/Creative-Arts/glue.png";
import paper from "@/public/images/dashboard/adventure-bay/Creative-Arts/paper.png";
import crayons from "@/public/images/dashboard/adventure-bay/Creative-Arts/crayon.png";
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
    Cardboard: false,
    Scissors: false,
    Tape: false,
    Paper: false,
    Pencils: false,
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
        title="DIY Puzzles"
        subtitle="Creative Arts - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Jigsaw puzzles are a great activity for your preschool aged child! Not only are they a bunch of fun, but they also teach kids a lot of valuable skills, such as hand-eye coordination, problem solving , patience, and concentration. What makes this activity even better is that it is so simple for the caregiver to put together, and the possibilities for puzzle images are endless! You and your child can work as a team, or your child can create their puzzle independently. Working together can build social and teamwork skills, while working independently can help to challenge your child's mental skills, so either option is beneficial. Choosing a picture that. your child enjoys will make them more interested in completing the activity. Once you get the hang of making a puzzle, feel free to make many more, using different images!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Cardboard",
            image: cardboard,
            alt: "Cardboard",
            key: "Cardboard",
          },
          {
            name: "Scissors",
            image: scissors,
            alt: "Scissors",
            key: "Scissors",
          },
          { name: "Glue", image: glue, alt: "Tape", key: "Tape" },
          { name: "Blank Paper", image: paper, alt: "Item 4", key: "Paper" },
          {
            name: "Crayons Or Markers",
            image: crayons,
            alt: "Pencils",
            key: "Pencils",
          },
          { name: "", image: paper, alt: "Item 6", key: "item6" },
          { name: "", image: paper, alt: "Item 7", key: "item7" },
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
