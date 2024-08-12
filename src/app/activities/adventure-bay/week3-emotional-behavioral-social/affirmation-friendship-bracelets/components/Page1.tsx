"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import beads from "@/public/images/dashboard/adventure-bay/week3/beads.png";
import colorBeads from "@/public/images/dashboard/adventure-bay/week3/colored-beads.png";
import strings from "@/public/images/dashboard/adventure-bay/week3/string.png";
import scissors from "@/public/images/dashboard/adventure-bay/week3/scissors.png";
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
    LetterBeads: false,
    ColorBeads: false,
    Strings: false,
    Scissors: false,
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
        title="Affirmation Friendship Bracelets"
        subtitle="Emotional, Behavioral, & Social - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="In this ever-changing modern world, our sense of self or identity evolves over time. With the utilization of positive affirmations, we invite ourselves to reflect upon our personal character traits that make us unique. In general, affirmations are a way to reinforce a positive growth mindset in our children. Additionally, it helps our children gain a greater sense of confidence and where exactly they belong in their community. In this activity, we invite our children to reflect upon quality traits they believe they embody, and encourage them to celebrate their individuality and identity  through colorful affirmation bracelets. What's more is that we can swap or trade bracelets with other family members, neighbors, or friends! Happy bracelet making!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Letter Beads",
            image: beads,
            alt: "Letter Beads",
            key: "LetterBeads",
          },
          {
            name: "Scissors",
            image: scissors,
            alt: "Scissors",
            key: "Scissors",
          },
          {
            name: "Color Beads",
            image: colorBeads,
            alt: "ColorBeads",
            key: "ColorBeads",
          },
          { name: "String", image: strings, alt: "String", key: "Strings" },
          { name: "", image: strings, alt: "Item 6", key: "item6" },
          { name: "", image: strings, alt: "Item 6", key: "item6" },
          { name: "", image: strings, alt: "Item 7", key: "item7" },
          { name: "", image: strings, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#C5FFFC"
        emptyCardBackgroundColor="#8AEFEB"
        checkedCardColor="#52C5C0"
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
