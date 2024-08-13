"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import image1 from "@/public/images/dashboard/blossomHaven/week/9/camera_lens.png";
import image2 from "@/public/images/dashboard/blossomHaven/week/9/pots.png";
import image3 from "@/public/images/dashboard/blossomHaven/week/9/pans.png";
import image4 from "@/public/images/dashboard/blossomHaven/week/9/cups.png";
import image5 from "@/public/images/dashboard/blossomHaven/week/9/spoon.png";
import image6 from "@/public/images/dashboard/blossomHaven/week/9/stick.png";

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
    pots: false,
    pans: false,
    cups: false,
    spoon: false,
    stick: false,
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
        title="Baby's Drum Solo"
        subtitle="Sound & Music - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`A fun sound and music activity that can be done by your child, and you joining in with them, is playing the drums or more simply for them, banging on pots and pans like the drums. Letting your child "play the drums" engages them in this sound and music activity and sets the foundation for growth in many key areas of development. Your child will be working on their motor skills and hand eye coordination while playing these homemade drums without even realizing it, they'll just be having fun making some noise and dancing around. For today's activity, we will give you the steps to let your baby take part in this activity and start their love for making sounds through playing with homemade drums.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera Lens",
            image: image1,
            alt: "Camera Lens",
            key: "camera_lens",
          },
          {
            name: "Pots",
            image: image2,
            alt: "Pots",
            key: "pots",
          },
          {
            name: "Pans",
            image: image3,
            alt: "Pans",
            key: "pans",
          },
          {
            name: "Cups",
            image: image4,
            alt: "Cups",
            key: "cups",
          },
          {
            name: "Wooden Spoon",
            image: image5,
            alt: "Wooden Spoon",
            key: "spoon",
          },
          { name: "Drumstick", image: image6, alt: "Drumstick", key: "stick" },
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
