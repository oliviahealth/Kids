"use client";
import React, { useState, useEffect } from "react";
import camera from "/public/images/activities/blossom-haven/week5/camera.svg";
import tape from "/public/images/activities/blossom-haven/week7/tape.svg";
import streamer from "/public/images/activities/blossom-haven/week7/streamer.svg";
import childsToys from "/public/images/activities/blossom-haven/week7/childsToys.svg";
import snacks from "/public/images/activities/blossom-haven/week7/snacks.svg";
import stuffedAnimals from "/public/images/activities/blossom-haven/week7/stuffedAnimals.svg";
import playMat from "/public/images/activities/blossom-haven/week7/playMat.svg";

import logo from "/public/images/activities/blossom-haven/icon.svg";
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
    tape: false,
    streamer: false,
    childsToys: false,
    snacks: false,
    stuffedAnimals: false,
    playMat: false,
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
        title="Baby's Obstacle Course"
        subtitle="Physical Activity - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A primary area of your 0-1 year old child's physical activity development is using their hands to grasp objects, crawling, and gaining strength in their muscles for continual growth. One fun and effective way to get your child to reach their physical activity milestones is by creating an at-home obstacle course for your child to go through. This activity will get your child using their muscles to move around, grab and move objects, and develop gross and fine motor skills. Today, we will give you instructions on ways you can create a child-safe obstacle course for your child to navigate in order to reach their physical activity milestones."
        materialsTitle="Materials Needed"
        materials = {[
          {
            name: "Camera",
            image: camera,
            alt: "Camera",
            key: "camera",
          },
          {
            name: "Tape",
            image: tape,
            alt: "Tape",
            key: "tape",
          },
          {
            name: "Streamers",
            image: streamer,
            alt: "Streamer",
            key: "streamer",
          },
          {
            name: "Child's Toys",
            image: childsToys,
            alt: "Child's Toys",
            key: "childsToys",
          },
          {
            name: "Snacks",
            image: snacks,
            alt: "Snacks",
            key: "snacks",
          },
          {
            name: "Stuffed Animals",
            image: stuffedAnimals,
            alt: "Stuffed Animals",
            key: "stuffedAnimals",
          },
          {
            name: "Play Mat",
            image: playMat,
            alt: "Play Mat",
            key: "playMat",
          },
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