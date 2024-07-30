"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import caterpillar from "@/public/images/dashboard/adventure-bay/week4/caterpillar.png";
import scissors from "@/public/images/dashboard/adventure-bay/week4/scissors.png";
import crayons from "@/public/images/dashboard/adventure-bay/week4/crayons.png";
import paper from "@/public/images/dashboard/adventure-bay/week4/paper.png";
import glue from "@/public/images/dashboard/adventure-bay/week4/glue.png";
import pencil from "@/public/images/dashboard/adventure-bay/week4/pencil.png";

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
    Caterpillar: false,
    Crayons: false,
    Pencils: false,
    Printable: false,
    Tape: false,
    Scissors: false,
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
        title="Eric carle Read-Along & Caterpillar Craft"
        subtitle="Language, Literacy, & Speech - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="The hobby story-time between caregiver and child invites the child to expand upon their listening, language, and literacy skills while solidifying interpersonal connections with their loved ones. At this age, your child starts to blossom in curiosity and imagination. Therefore, using arts and crafts to explore various picture books allows children to exercise their creative outlet and establish a lifelong love for books and reading. 

In this activity, we are going to be reading  “The Very Hungry Caterpillar” by Eric Carle. As we follow our hungry caterpillar through their food adventure, we invite children to reflect on growth, change, and even healthy eating! In this craft inspired by the book, we also let our child recognize and count various fruits directly from the story. Happy reading! "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "'The Very Hungry Caterpillar' by Eric Carle",
            image: caterpillar,
            alt: "Caterpillar",
            key: "Caterpillar",
          },
          {
            name: "Colored Paper",
            image: paper,
            alt: "Paper",
            key: "Paper",
          },
          {
            name: "Tape/Glue",
            image: glue,
            alt: "Tape",
            key: "Tape",
          },
          { name: "Scissors", image: scissors, alt: "String", key: "Scissors" },
          { name: "Crayons", image: crayons, alt: "Crayons", key: "Crayons" },
          {
            name: "Colored Pencils",
            image: pencil,
            alt: "Pencils",
            key: "Pencils",
          },
          {
            name: "OliviaKids Printable",
            image: paper,
            alt: "Printable",
            key: "Printable",
          },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
