"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import popsicle from "@/public/images/dashboard/adventure-bay/Creative-Arts/popsicle.png";
import scissors from "@/public/images/dashboard/adventure-bay/Creative-Arts/scissors.png";
import glue from "@/public/images/dashboard/adventure-bay/Creative-Arts/glue.png";
import ruler from "@/public/images/dashboard/adventure-bay/Creative-Arts/ruler.png";
import picture from "@/public/images/dashboard/adventure-bay/Creative-Arts/picture.png";
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
    Popsicle: false,
    Scissors: false,
    Tape: false,
    Paper: false,
    Pencils: false,
    Ruler: false,
    Picture: false,
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
        title="Handcrafted Picture Frames"
        subtitle="Creative Arts - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="We take pictures of the world around us every single day: digital snapshots of our favorite places and people are lovely images to look back on as the years fly by. However, physical and framed family photographs actually have a greater influential impact on the sense of self-worth of a child. Whenever colorful pictures are hand-drawn at home or art pieces are crafted at school, we end up hanging them on our refrigerator, bulletin boards, or shelves to showcase them. By the same token, we can exhibit photographs of the whole family, and this lets our children realize that they are just as valued as the other decorations on our walls.

Framed photographs do not have to be an expensive investment, but rather an easy and interactive arts & crafts activity for the whole family! Once you finish these handcrafted picture frames with your children, you can place it somewhere in the house where you can all see it on a daily basis as a reminder of your shared love and beautiful home."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Popsicle sticks",
            image: popsicle,
            alt: "Cardboard",
            key: "Popsicle",
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
            name: "Markers",
            image: crayons,
            alt: "Pencils",
            key: "Pencils",
          },
          { name: "Ruler", image: ruler, alt: "Ruler", key: "Ruler" },
          { name: "Picture of Choice", image: picture, alt: "Picture", key: "Picture" },
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
