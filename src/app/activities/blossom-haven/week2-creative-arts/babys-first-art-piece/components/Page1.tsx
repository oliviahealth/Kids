"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import canvas from "/public/images/activities/blossom-haven/canvas.svg";
import paint from "/public/images/activities/blossom-haven/paint.svg";
import saranWrap from "/public/images/activities/blossom-haven/saran-wrap.svg";
import tape from "/public/images/activities/blossom-haven/tape.svg";
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
    canvas: false,
    paint: false,
    saranWrap: false,
    tape: false
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
        title="Baby's First Art Piece: A Safe Painting Activity"
        subtitle="Creative Arts - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

<IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A super fun, and safe, creative arts activity that you baby can do together is painting! More specifically, you and your child can do their very first painting activity within a plastic bag or any other clear cover. This activity ensures that your child is not in danger of consuming any harmful paint, but still engages their creativity and emotions in a fun, playful environment. This activity does require having some art supplies available, but engaging your child in this activity provides the framework for them to develop  useful skills in their later years. This activity is designed in a way that your child does not come into direct contact with the paint or other art supplies."
        materialsTitle="Materials Needed"
        materials={[
            {
              name: "Canvas",
              image: canvas,
              alt: "Canvas",
              key: "canvas",
            },
            { name: "Paint", image: paint, alt: "Paint", key: "paint" },
            { name: "Saran Wrap", image: saranWrap, alt: "Saran Wrap", key: "saranWrap" },
            { name: "Tape", image: tape, alt: "Tape", key: "tape" },
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