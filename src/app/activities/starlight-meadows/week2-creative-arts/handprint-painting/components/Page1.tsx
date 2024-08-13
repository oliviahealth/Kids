"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";
import book from "@/public/images/dashboard/StarlightMeadows/book.svg";

import paint from "@/public/images/dashboard/StarlightMeadows/week2/acrylic paint.svg";
import paper from "@/public/images/dashboard/StarlightMeadows/week2/paper.svg";
import apron from "@/public/images/dashboard/StarlightMeadows/week2/apron.svg";




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
    paint: false,
    paper: false,
    apron: false,
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
        title="Handprint Painting"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <IntroductionAndMaterials
        introductionTitle="Handprint Painting"
        introductionText="Children at this age are quickly learning  about the world around them. A fun way for them to do this is through creative arts, where they can develop motor skills and find their sense of creativity! This fun handprint painting activity is a great way to get creative with your child! For this activity you will use paint to create a piece of artwork out of your child's handprints. Use your imagination and work with your toddler to come up with a fun creation! Some ideas include handprint flowers and animals (jellyfish, giraffe, turkey). You can also just make a unique abstract piece of art with multiple handprints. "
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Non-toxic paint for kids",
            image: paint,
            alt: "paint",
            key: "paint",
          },
          { name: "paper or canvas", image: paper, alt: "paper", key: "paper" },
          { name: "apron", image: apron, alt: "apron", key: "apron" },
          { name: "", image: book, alt: "Item 4", key: "item4" },
          { name: "", image: book, alt: "Item 5", key: "item5" },
          { name: "", image: book, alt: "Item 6", key: "item6" },
          { name: "", image: book, alt: "Item 7", key: "item7" },
          { name: "", image: book, alt: "Item 8", key: "item8" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
