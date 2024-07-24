"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";


import pan from "../../../../../../public/images/dashboard/StarlightMeadows/week2/pan.svg";
import spatula from "../../../../../../public/images/dashboard/StarlightMeadows/week2/spatula.svg";
import water from "../../../../../../public/images/dashboard/StarlightMeadows/week2/water.svg";
import vegetableOil from "../../../../../../public/images/dashboard/StarlightMeadows/week2/vegetable oil.svg";
import tableSalt from "../../../../../../public/images/dashboard/StarlightMeadows/week2/salt.svg";
import tartar from "../../../../../../public/images/dashboard/StarlightMeadows/week2/cream of tartar.svg";
import flour from "../../../../../../public/images/dashboard/StarlightMeadows/week2/flour.svg";
import foodColoring from "../../../../../../public/images/dashboard/StarlightMeadows/week2/food coloring.svg";


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
    pan: false,
    spatula: false,
    water: false,
    vegetableOil:false,
    tableSalt:false,
    tartar:false,
    flour:false,
    foodColoring:false
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
        title="Playdough Activity"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Playdough Activity"
        introductionText="Play is a very important source of learning for children, and the goal of this activity is to allow children to use playdough to practice creative arts, as well as help develop their motor skills. By one year old, children should be able to pick things up with their fingers, so allowing them to play with playdough can help build on those skills. This activity may also allow for discussion of shapes and colors! For younger children, this could look like you as the parent talking about the shape or the color to your child, and for older children, you can ask them to tell you the shape or color of the playdough, or even have them point to a dough that matches the shape or color you say. "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "1 pan",
            image: pan,
            alt: "pan",
            key: "pan",
          },
          { name: "1 spatula", image: spatula, alt: "spatula", key: "spatula" },
          { name: "2 cups of water", image: water, alt: "water", key: "water" },
          { name: "2 tbsp vegetable oil", image: vegetableOil, alt: "vegetableOil", key: "vegetableOil" },
          { name: "1 cup of table salt", image: tableSalt, alt: "tableSalt", key: "tableSalt" },
          { name: "2 tbsp of tartar", image: tartar, alt: "tartar", key: "tartar" },
          { name: "2 cups of all purpose flour", image: flour, alt: "flour", key: "flour" },
          { name: "Food Coloring (you can also use 2 Kool-Aid packets for color)", image: foodColoring, alt: "foodColoring", key: "foodColoring" },
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
