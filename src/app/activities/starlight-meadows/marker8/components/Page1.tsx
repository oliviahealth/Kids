"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";


import clothes from "../../../../../../public/images/dashboard/StarlightMeadows/week3/clothesoptions.svg"
import toys from "../../../../../../public/images/dashboard/StarlightMeadows/week3/childrenstoys.svg"
import books from "../../../../../../public/images/dashboard/StarlightMeadows/week3/books.svg"

import water from "../../../../../../public/images/dashboard/StarlightMeadows/week2/water.svg";



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
    clothes: false,
    toys: false,
    books: false,
    
    
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
        title="Get Ready With Me!"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Get Ready With Me!"
          introductionText={`Toddlers are in the Erikson's Developmental Stage called "Autonomy vs Shame and Doubt." The goal of this stage is for the toddler to be able to gain more independence and confidence in their own abilities. It is important to allow your child to make some decisions and to try doing things independently during this stage to promote their self-esteem. One way of doing this is by allowing them to make choices about getting ready for the day! In this activity, you will give your toddler options throughout your morning routine to help them with their decision making. 

Note: Try to limit choices to 2-3 simple options to avoid overwhelming your toddler.`}




        materialsTitle="Materials Needed"
        materials={[
          {
            name: "clothes",
            image: clothes,
            alt: "clothes",
            key: "clothes",
          },
          { name: "toys", image: toys, alt: "toys", key: "toys" },
          { name: "books", image: books, alt: "books", key: "books" },
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
