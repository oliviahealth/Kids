"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import image1 from "@/public/images/dashboard/blossomHaven/week/3/act1/camera_lens.png";
import image2 from "@/public/images/dashboard/blossomHaven/week/3/act1/mirror.png";
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
    camera_lens: false,
    mirror: false,
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
        title="Baby's Magic Mirror!"
        subtitle="Emotional, Behavioral, & Social - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Emotional, behavioral, and social activities for your 0-1 year old focus on developing their abilities of attention, regulating emotions, and building relationships between their caregivers and other people they interact with. There are many activities that work on developing these skills, but the one we're going to focus on today is called "Baby's Magic Mirror". Using mirror play activities gives your child the opportunity to learn about themselves, learn to express their emotions, and practice social interactions. Continual mirror play will improve their emotional, behavioral, and social skills, and let you and your child have fun, increasing the social/emotional bond with each other. Below we'll give you the steps on how to do the "Baby's Magic Mirror" activity so your child will achieve their growth and development milestones of a 0-1 year old.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera Lens",
            image: image1,
            alt: "Camera Lens",
            key: "camera_lens",
          },
          {
            name: "Mirror",
            image: image2,
            alt: "Mirror",
            key: "mirror",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
