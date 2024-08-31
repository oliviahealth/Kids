"use client";
import React, { useState } from "react";

import image1 from "/public/images/activities/blossom-haven/week10/camera.svg";
import image2 from "/public/images/activities/blossom-haven/week10/box.svg";
import image3 from "/public/images/activities/blossom-haven/week10/toy.svg";
import image4 from "/public/images/activities/blossom-haven/week10/snack.svg";
import image5 from "/public/images/activities/blossom-haven/week10/cotton.svg";
import image6 from "/public/images/activities/blossom-haven/week10/texturedItems.svg";


import logo from "/public/images/activities/blossom-haven/icon.svg";
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
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
  });

  const handleCheckboxChange = (type: keyof typeof isChecked) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby’s Sensory Bin"
        subtitle="Touch - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Your 0-1 year old child is naturally curious about the world around them, and they gain valuable knowledge about their world through touch sensory exploration, and observing things themselves. Letting your child touch objects and explore on their own promotes brain growth, physical movement, and even work on their language skills. One activity that significantly promotes growth and development of your child is what's called a sensory bin. A sensory bin can be described as a container filled with multiple items for your child to touch, grab, hold, and observe to learn about them. For today's activity, we will give you the steps required to make your child's very own sensory bin."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera lens",
            image: image1,
            alt: "image1",
            key: "image1",
          },
          {
            name: "Medium Size Box",
            image: image2,
            alt: "image2",
            key: "image2",
          },
          {
            name: "Child Toys",
            image: image3,
            alt: "image3",
            key: "image3",
          },
          {
            name: "Snacks",
            image: image4,
            alt: "image4",
            key: "image4",
          },
          { name: "Cotton Balls", image: image5, alt: "image5", key: "image5" },
          { name: "Other Textured Items", image: image6, alt: "image6", key: "image6" },
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

