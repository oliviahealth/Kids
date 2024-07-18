"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import image1 from "@/public/images/dashboard/fantasyForest/week/2/act1/acrylic_paint.png";
import image2 from "@/public/images/dashboard/fantasyForest/week/2/act1/paint_brushes.png";
import image3 from "@/public/images/dashboard/fantasyForest/week/2/act1/rocks.png";

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
        title="Rock Painting"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="This acitivity focuses on two important parts of a child's development at this age, physical activity and creative arts. Creative arts are important for children because they help work on fine motor skills, encourage creativity, and allow your child to be introduced to a new form of self-expression through art. This activity allows your child to get outside, enjoy the environment around them, and also make a craft that can be enjoyed by other people in their community. Whether your child places their rocks in their own yard, the yard of a family member, or in a nearby park, it allows your child to add to the beauty of the environment around them. This craft can also be used as an act of kindness to bring a smile to a friend, family member or neighbor by encouraging your child to decorate their craft for someone special."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Acrylic Paint",
            image: image1,
            alt: "Acrylic Paint",
            key: "acrylic_paint",
          },
          {
            name: "Paint Brushes",
            image: image2,
            alt: "Paint Brushes",
            key: "paint_brushes",
          },
          { name: "Rocks", image: image3, alt: "Rocks", key: "rocks" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
