"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import image1 from "@/public/images/dashboard/fantasyForest/week/2/act3/flour.png"
import image2 from "@/public/images/dashboard/fantasyForest/week/2/act3/balloon.png"
import image3 from "@/public/images/dashboard/fantasyForest/week/2/act3/funnel.png"
import image4 from "@/public/images/dashboard/fantasyForest/week/2/act3/water_bottle.png"
import image5 from "@/public/images/dashboard/fantasyForest/week/2/act3/yarn.png"
import image6 from "@/public/images/dashboard/fantasyForest/week/2/act3/permanent_marker.png"



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
        title="DIY Stress Ball"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="From this activity, your child will have the opportunity to practice following directions by learning how to make a stress ball. Also, your child will practice self-regulation by learning how to use the stress ball in times of worry or unease. Depending on your child’s ability, you may need to actively make the stress ball yourself, but be sure to narrate what you’re doing as you do it so your child can follow along. The BOLD text consists of things you can say throughout the activity when teaching your child! The prompts in parentheses are actions to take within the activity."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Flour",
            image: image1,
            alt: "Flour",
            key: "flour",
          },
          { name: "Balloon", image: image2, alt: "Balloon", key: "balloon" },
          { name: "Funnel", image: image3, alt: "Funnel", key: "funnel" },
          {
            name: "Water Bottle",
            image: image4,
            alt: "Water Bottle",
            key: "water_bottle",
          },
          { name: "Yarn", image: image5, alt: "Yarn", key: "yarn" },
          {
            name: "Permanent Marker",
            image: image6,
            alt: "Permanent Marker",
            key: "permanent_marker",
          },
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
