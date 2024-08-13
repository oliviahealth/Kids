"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import camera from "/public/images/activities/blossom-haven/week5/camera.svg";
import ziplocBag from "/public/images/activities/blossom-haven/week5/ziplock-bags.svg";
import cleanWaterBottle from "/public/images/activities/blossom-haven/week5/clean-water-bottle.svg";
import foodColoring from "/public/images/activities/blossom-haven/week5/food-coloring.svg";
import oil from "/public/images/activities/blossom-haven/week5/oil.svg";
import duckTape from "/public/images/activities/blossom-haven/week5/duct-tape.svg";
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
    camera: false,
    ziplocBag: false,
    cleanWaterBottle: false,
    foodColoring: false,
    oil: false,
    duckTape: false,
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
        title="Colorful Oil and Water Science Bag"
        subtitle="Math & Science - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Growing and developing your 0-1 year old’s math & science skills comes from getting them exposed to different shapes, colors, and activities that get your child interested and making observations in their head. An interesting activity that will get your child's attention is a colorful water and oil sensory bag. The science behind this is that water and oil do not mix, and adding in some food coloring almost creates a lava lamp in a bag for your child to observe and touch to feel and gain information. The bright colors, shape, and feel of the oil and water in the bag will gain your child's attention and they will want to keep touching these sensory bags to try and get an understanding for what they are feeling/seeing. You will also be able to expose them to the words of the items in this activity so they become familiar with parts of this activity."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera",
            image: camera,
            alt: "Camera",
            key: "camera",
          },
          {
            name: "Ziploc Bag",
            image: ziplocBag,
            alt: "Ziploc Bag",
            key: "ziplocBag",
          },
          {
            name: "Clean Water Bottle",
            image: cleanWaterBottle,
            alt: "Clean Water Bottle",
            key: "cleanWaterBottle",
          },
          {
            name: "Food Coloring",
            image: foodColoring,
            alt: "Food Coloring",
            key: "foodColoring",
          },
          {
            name: "Oil",
            image: oil,
            alt: "Oil",
            key: "oil",
          },
          {
            name: "Duct Tape",
            image: duckTape,
            alt: "Duct Tape",
            key: "duckTape",
          },
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