"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import image1 from "@/public/images/dashboard/blossomHaven/week/3/act2/camera_lens.png";
import image2 from "@/public/images/dashboard/blossomHaven/week/3/act2/paper_bag.png";
import image3 from "@/public/images/dashboard/blossomHaven/week/3/act2/child_safe_marker.png";
import image4 from "@/public/images/dashboard/blossomHaven/week/3/act2/yarn.png";
import image5 from "@/public/images/dashboard/blossomHaven/week/3/act2/googly_eyes.png";
import image6 from "@/public/images/dashboard/blossomHaven/week/3/act2/buttons.png";
import image7 from "@/public/images/dashboard/blossomHaven/week/3/act2/sock.png";
import image8 from "@/public/images/dashboard/blossomHaven/week/3/act2/glove_mitten.png";

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
    paper_bag: false,
    child_safe_marker: false,
    yarn: false,
    googly_eyes: false,
    sock: false,
    buttons:false,
    glove_mitten: false,
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
        title="Baby's Puppet Playtime"
        subtitle="Emotional, Behavioral, & Social - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="There are many different activities that a caregiver of an infant (0-1 year old) can do to help their child reach their growth and development goals for their emotional, behavioral, and social milestones. One of the most efficient activities that children gain needed emotional, behavioral, and social skills comes from caregiver led puppet play. Puppet play is a great opportunity to get your child engaged in a fun activity, begin learning about and expressing their emotions, and work on creating ways for children to learn social skills. Puppet play has been widely used by professionals and caregivers alike for emotional, behavioral, and social development, but also has strong connections to growth in a child's language development, motor skills, and self expression. No matter what supplies you have at home, we're going to teach you three different ways you can create a puppet that will get your child excited to play and end up gaining valuable skills for their growth and development. "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera Lens",
            image: image1,
            alt: "Camera Lens",
            key: "camera_lens",
          },
          {
            name: "Paper Bag",
            image: image2,
            alt: "Paper Bag",
            key: "paper_bag",
          },
          {
            name: "Child Safe Marker",
            image: image3,
            alt: "Child Safe Marker",
            key: "child_safe_marker",
          },
          { name: "Yarn", image: image4, alt: "Yarn", key: "yarn" },
          {
            name: "Googly Eyes",
            image: image5,
            alt: "Googly Eyes",
            key: "googly_eyes",
          },
          { name: "Buttons", image: image6, alt: "Buttons", key: "buttons" },
          { name: "Sock", image: image7, alt: "Sock", key: "sock" },
          {
            name: "Glove/Mitten",
            image: image8,
            alt: "Glove/Mitten",
            key: "glove_mitten",
          },
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
