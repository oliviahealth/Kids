"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import image1 from "@/public/images/dashboard/blossomHaven/week/9/camera_lens.png";
import image2 from "@/public/images/dashboard/blossomHaven/week/9/cups.png";
import image3 from "@/public/images/dashboard/blossomHaven/week/9/glue.png";
import image4 from "@/public/images/dashboard/blossomHaven/week/9/marker.png";
import image5 from "@/public/images/dashboard/blossomHaven/week/9/tape.png";
import image6 from "@/public/images/dashboard/blossomHaven/week/9/kernels.png";

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
    cups: false,
    glue: false,
    marker: false,
    tape: false,
    kernels: false,
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
        title="Baby's Homemade Maracas"
        subtitle="Sound & Music - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="One of the best things you can do with your child to promote their growth and development, and have a whole lot of fun, is to sing and dance around with your child. One instrument that will definitely get your child's attention and get them dancing and singing along are maracas. Along with the maracas, your child will become very interested and work on achieving their milestones when you start singing and dancing with them. For today’s activity, we are going to show you the steps on how to make some homemade maracas, and how to engage your child using sound and music to achieve their growth and development milestones."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera Lens",
            image: image1,
            alt: "Camera Lens",
            key: "camera_lens",
          },
          {
            name: "Plastic Cups",
            image: image2,
            alt: "Plastic Cups",
            key: "cups",
          },
          {
            name: "Non-toxic Glue",
            image: image3,
            alt: "Non-toxic Glue",
            key: "glue",
          },
          {
            name: "Markers",
            image: image4,
            alt: "Markers",
            key: "marker",
          },
          { name: "Tape", image: image5, alt: "tape", key: "tape" },
          {
            name: "Rice, Corn Kernels, etc.",
            image: image6,
            alt: "Rice, Corn Kernels, etc.",
            key: "kernels",
          },
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
