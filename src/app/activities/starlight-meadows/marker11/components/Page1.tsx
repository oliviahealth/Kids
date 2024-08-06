"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";


import clothes from "@/public/images/dashboard/StarlightMeadows/week3/clothesoptions.svg"
import toys from "@/public/images/dashboard/StarlightMeadows/week3/childrenstoys.svg"
import animalPictures from "@/public/images/dashboard/StarlightMeadows/week4/animalpictures.svg"

import water from "@/public/images/dashboard/StarlightMeadows/week2/water.svg";



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
    animalPictures: false
    
    
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
        title='The Cow Says "Moo!"'
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
          introductionTitle='The Cow Says "Moo!"'
          introductionText={`Children aged 1-2 years old are rapidly learning both how to understand words and how to speak them. A great way to practice language with your toddler is through matching animals with animal sounds! This helps them to practice recognizing different animals and making connections between animals and the sounds they make. It also helps teach them how to make different sounds with their own voice by moving their mouth in different ways! In this activity, you will show your toddler pictures of different animals and help them learn their names and sounds. Here is a link to a Youtube video with 20 animal sounds: https://youtu.be/h8Q-jlHBcXM?si=zBCaPlP-qQaL8bAM`}




        materialsTitle="Materials Needed"
        materials={[
          { name: "Pictures of animals, either printed or on your computer", image: animalPictures, alt: "animalPictures", key: "animalPictures" },
          { name: "", image: water, alt: "Item 4", key: "item4" },
          { name: "", image: water, alt: "Item 4", key: "item4" },
          { name: "", image: water, alt: "Item 4", key: "item4" },
          { name: "", image: water, alt: "Item 5", key: "item5" },
          { name: "", image: water, alt: "Item 6", key: "item6" },
          { name: "", image: water, alt: "Item 7", key: "item7" },
          { name: "", image: water, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#C5CEFF"
        emptyCardBackgroundColor="#A9B6FF"
        checkedCardColor="#5A6EDD"
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
