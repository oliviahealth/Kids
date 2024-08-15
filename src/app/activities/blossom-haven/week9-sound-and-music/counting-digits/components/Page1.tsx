"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import image1 from "@/public/images/dashboard/blossomHaven/week/3/act3/camera_lens.png";
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
  const [isChecked, setIsChecked] = useState<CheckboxState>({});

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
        title="Counting Digits"
        subtitle="Sound & Music - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="With a little imagination, you can make anything you do sound like a song to your child's ears. Speaking to them while doing tasks in a comforting, singing voice helps to stiumlate growth in your child's brain and grow emotional bonds with them and this can be applied in anything you do around the house. One way to promote your child's understanding of themselves, their body, and numbers is by sing counting about body parts. This activity will expose your child to the different parts of their body, work on their brain counting skills, and also provide some fun along the way. For today's activity, we will provide you with the steps and actions to take to get your child used to counting numbers, learn their body, and even sing along if able."
        materialsTitle="Materials Needed"
        materials={[
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
