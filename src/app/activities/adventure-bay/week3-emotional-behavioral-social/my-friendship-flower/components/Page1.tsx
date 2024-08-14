"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import template from "@/public/images/dashboard/adventure-bay/week3/template.png";
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
    Crayons: false,
    Template: false,
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
        title="My Friendship Flower"
        subtitle="Emotional, Behavioral, & Social - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Fundamentally, this 'My Friendship Flower' activity will encourage your child to demonstrate independent thinking and verbal expression as they thoughtfully think about what qualities they would appreciate in their friends. Your child will be able to verbally express those thoughts in order for them to be drawn in the flower. As your child thinks through this activity, your child will get to anticipate and learn more about positive social relationships.

Whenever we teach our young children the meaning and importance of certain character traits, they are able to expound upon social skills and values that can guide them in everyday life. When the foundation for quality character traits are built, our children are able to keep building healthy and positive friendships and relationships with not only their fellow classmates but also teachers or coaches and other family members."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Crayons/Colored-Pencils",
            image: crayons,
            alt: "Crayons",
            key: "Crayons",
          },
          {
            name: " Olivia-KIDS Printable Worksheet",
            image: template,
            alt: "Template",
            key: "Template",
          },
          { name: "", image: template, alt: "Item 6", key: "item6" },
          { name: "", image: template, alt: "Item 8", key: "item8" },
          { name: "", image: template, alt: "Item 6", key: "item6" },
          { name: "", image: template, alt: "Item 6", key: "item6" },
          { name: "", image: template, alt: "Item 7", key: "item7" },
          { name: "", image: template, alt: "Item 8", key: "item8" },
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
