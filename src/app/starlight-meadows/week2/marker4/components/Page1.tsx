"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";
import book from "../../../../../../public/images/dashboard/StarlightMeadows/book.svg";

import flowers from "../../../../../../public/images/dashboard/StarlightMeadows/week2/flowers.svg";
import leaves from "../../../../../../public/images/dashboard/StarlightMeadows/week2/leaves.svg";
import sticks from "../../../../../../public/images/dashboard/StarlightMeadows/week2/sticks.svg";
import paper from "../../../../../../public/images/dashboard/StarlightMeadows/week2/paper.svg";
import scissors from "../../../../../../public/images/dashboard/StarlightMeadows/week2/scissors.svg";




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
    flowers: false,
    leaves: false,
    sticks: false,
    paper: false,
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
        title="Nature Collage"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Nature Collage"
        introductionText="An important part of development at this age is for the child to have the ability to explore. This helps them learn new things about the world we live in and practice their motor skills. A fun way to do this is to bring your child outside and allow them to find flowers, leaves, or whatever else catches their eye. In this activity you will allow your toddler to pick things from nature and help them create a collage out of what they find. This is a unique and exciting way for your toddler to learn about nature and use their creativity."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "flowers",
            image: flowers,
            alt: "flowers",
            key: "flowers",
          },
          { name: "leaves", image: leaves, alt: "leaves", key: "leaves" },
          { name: "sticks", image: sticks, alt: "sticks", key: "sticks" },
          { name: "paper", image: paper, alt: "paper", key: "paper" },
          { name: "Scissors (for parent use)", image: scissors, alt: "scissors", key: "scissors" },
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
