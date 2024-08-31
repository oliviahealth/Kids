"use client";
import React, { useState, useEffect } from "react";

import image1 from "/public/images/activities/blossom-haven/week10/camera.svg";
import image2 from "/public/images/activities/blossom-haven/week10/board.svg";
import image3 from "/public/images/activities/blossom-haven/week10/glue.svg";
import image4 from "/public/images/activities/blossom-haven/week10/ribbon.svg";
import image5 from "/public/images/activities/blossom-haven/week10/cotton.svg";
import image6 from "/public/images/activities/blossom-haven/week10/wrap.svg";
import image7 from "/public/images/activities/blossom-haven/week10/cap.svg";
import image8 from "/public/images/activities/blossom-haven/week10/yarn.svg";


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
    image7: false,
    image8: false,
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
        title="Activity 3"
        subtitle="Touch - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A key area of growth for your 0-1 year old child is touch and sensory exploration, which can be defined as touching, feeling, and grabbing at things around them in order to gain knowledge of their surroundings. To promote growth in this area, you as the caregiver need to provide them with different feelings of touch such as feeling different textures and a variety of objects. Your child is naturally curious about their environment and the objects around them, so you can help them out by making your very own texture board. A texture board is simply a board with different objects and textures placed on there for your child to touch and explore as they please. For this activity, we will give you the steps to make a texture board and how to let your child use it."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera lens",
            image: image1,
            alt: "image1",
            key: "image1",
          },
          {
            name: "Poster Board",
            image: image2,
            alt: "image2",
            key: "image2",
          },
          {
            name: "Glue",
            image: image3,
            alt: "image3",
            key: "image3",
          },
          {
            name: "Tape",
            image: image4,
            alt: "image4",
            key: "image4",
          },
          { name: "Cotton balls/Pom Poms", image: image5, alt: "image5", key: "image5" },
          { name: "Bubble Wrap", image: image6, alt: "image6", key: "image6" },
          { name: "Bottle Caps", image: image7, alt: "image7", key: "image7" },
          { name: "Textured Items", image: image8, alt: "image8", key: "image8" },
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