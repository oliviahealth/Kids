"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";



import camera from "/public/images/dashboard/blossomHaven/camera.svg";
import snacks from "/public/images/dashboard/blossomHaven/snacks.svg";
import fruit from "/public/images/dashboard/blossomHaven/fruit.svg";
import vegetables from "/public/images/dashboard/blossomHaven/vegetables.svg";
import food1 from "/public/images/dashboard/blossomHaven/food.svg";
import food2 from "/public/images/dashboard/blossomHaven/food.svg";



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
    camera: false,
    snacks: false,
    fruit: false,
    vegetables: false,
    food1: false,
    food2: false,
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
        title="The Many Textures of Foods"
        subtitle="Nutrition - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="When your 0-1 year old child has began eating solid foods, it is recommended to get them used to the different styles and textures of the same foods they are eating. This not only gets them more interested in solid foods, but it provides a sensory experience for the child to touch and explore the foods they enjoy. As your child continually grows, the types of foods you can expose them to will grow and they'll soon be able to understand how one food can look different but be the same. Before beginning any solid foods, you should check with your doctor that your child can eat solid foods and always watch your child when they are eating solid foods."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera Lens",
            image: camera,
            alt: "camera",
            key: "camera",
          },
          { name: "Child Snacks", image: snacks, alt: "snacks", key: "snacks" },
          { name: "Fruits", image: fruit, alt: "fruit", key: "fruit" },
          { name: "Vegetables", image: vegetables, alt: "vegetables", key: "vegetables" },
          { name: "Child Purees", image: food1, alt: "food1", key: "food1" },
          { name: "Child’s Mashed Foods", image: food2, alt: "food2", key: "food2" },
          { name: "", image: logo, alt: "Item 7", key: "item7" },
          { name: "", image: logo, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#FFF7E3'
        emptyCardBackgroundColor='#F8E7BA'
        checkedCardColor='#F1A533'
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
