"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import image1 from "@/public/images/dashboard/blossomHaven/week/3/act3/yarn.png";
import image2 from "@/public/images/dashboard/blossomHaven/week/3/act3/baby_sling_carrier.png";
import image3 from "@/public/images/dashboard/blossomHaven/week/3/act3/childs_toys.png";
import image4 from "@/public/images/dashboard/blossomHaven/week/3/act3/child_stroller.png";


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
    baby_sling_carrier: false,
    childs_toys: false,
    child_stroller: false,
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
        title="Baby's Day Out!"
        subtitle="Emotional, Behavioral, & Social - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Getting your child to learn and gain emotional, behavioral, and social skills can be done in a number of ways, and one of the popular ways caregivers use is socialization exposing your baby to the outside world. A child's exposure to the world first begins at home with their caregiver, but the benefits of getting your child out of the house to see other people, nature, and other children greatly increases your baby's social skills. Today we're going to walk you through an activity where you, the caregiver, will help your child get social exposure.Continuing to use this activity will not only increase the emotional bond between the caregiver and child, but give your child opportunities to explore and learn about the world."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera Lens",
            image: image1,
            alt: "Camera Lens",
            key: "camera_lens",
          },
          {
            name: "Baby Sling/Carrier",
            image: image2,
            alt: "Baby Sling/Carrier",
            key: "baby_sling_carrier",
          },
          {
            name: "Child's Toys",
            image: image3,
            alt: "Child's Toys",
            key: "childs_toys",
          },
          {
            name: "Child Stroller",
            image: image4,
            alt: "Child Stroller",
            key: "child_stroller",
          },
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
