"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import image1 from "@/public/images/dashboard/fantasyForest/week/7/scissors.png";
import image2 from "@/public/images/dashboard/fantasyForest/week/7/empty_bowl.png";
import image3 from "@/public/images/dashboard/fantasyForest/week/7/animal_cards.png";
import downloadIcon from "@/public/images/dashboard/fantasyForest/shared/download.png";

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
    animal_cards: false,
    empty_bowl: false,
    scissors: false,
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
        title="Move Like an Animal"
        subtitle="Physical Activity - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Physical activity is important for people of any age, but it is a great way to incorporate learning and creativity for children while also allowing them to move their body. Encouraging your child to move their body everyday establishes healthy habits for them to continue in the future. Exercising has many physical, emotional and mental benefits; therefore, it is vital to emphasize the importance of daily exercise to your child. In this activity we will focus on your child's expressive language and dramatic play as they practice howanimals move and sound. This activity allows your child to show their expressive side and allows them to interpret an animal movement and sound the way they like."
        materialsTitle="Materials Needed"
        materials={[
          { name: "Scissors", image: image1, alt: "Scissors", key: "scissors" },
          {
            name: "Empty Bowl (for cards)",
            image: image2,
            alt: "Empty Bowl (for cards)",
            key: "empty_bowl",
          },
          {
            name: "Provided 'Animal Cards'",
            image: image3,
            alt: "Provided 'Animal Cards'",
            key: "animal_cards",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#B5F6D0"
        emptyCardBackgroundColor="#88DFAC"
        checkedCardColor="#35A663"
        link={[
          {
            text: "Animal Cards",
            img: downloadIcon,
            url: "",
          },
        ]}
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
