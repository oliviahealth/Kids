"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
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
    list: false,
    pen: false,
    paper: false,
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
        title="Popsicle Stick Puppets"
        subtitle="Creative Arts - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="In general, creative arts is important when it comes to growing in communication, self-expression, and many other skills. When we participate in activites as simple as do-it-yourself crafts and interactive pretend play, we are able to expand the realm of our imaginative and creative mind. Many of us believe we can “grow out” of imaginative play and be too old for arts and crafts, but the creative arts as a whole is something for everyone, for the whole family! When we partake in pretend play, we have the opportunity to be anything, anyone, and anywhere we want to be. Essentially, we gain a sense of freedom and limitless possibility when we are able to explore the worlds within our powerful minds and outside the bounds of reality.
There is an infinite amount of activities you can use to implement imaginative play and the creative arts, and today we get to have a blend of both with craft sticks or spare popsicle sticks you may have around the house!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "OliviaKids Affirmation List",
            image: list,
            alt: "List",
            key: "list",
          },
          { name: "Pencil", image: pen, alt: "Pen", key: "pen" },
          { name: "Paper", image: paper, alt: "Paper", key: "paper" },
          { name: "", image: list, alt: "Item 4", key: "item4" },
          { name: "", image: pen, alt: "Item 5", key: "item5" },
          { name: "", image: paper, alt: "Item 6", key: "item6" },
          { name: "", image: list, alt: "Item 7", key: "item7" },
          { name: "", image: pen, alt: "Item 8", key: "item8" },
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
