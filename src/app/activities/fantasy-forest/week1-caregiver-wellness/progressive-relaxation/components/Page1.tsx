"use client";

import React, { useState, useEffect } from 'react';
import IntroductionAndMaterials from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

type CheckboxState = {
  [key: string]: boolean;
};

export default function ProgressiveRelaxation({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  const [isChecked, setIsChecked] = useState<CheckboxState>({});

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
        logoSrc={headerIcon}
        title="Progressive Relaxation"
        subtitle="Caregiver Wellness - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        mainBackgroundColor='#B5F6D0'
        emptyCardBackgroundColor='#88DFAC'
        checkedCardColor='#35A663'
        introductionTitle='Take Control'
        introductionText={`
            "When your child is 4 or 5 years old, they grow and learn a lot. They might start preschool or kindergarten, learn to read and write, or become a good big brother or sister. It can be hard for parents to help their child during this time. It’s important for parents to take a break and relax sometimes.",
            "This is a guide to help you relax. It's called Progressive Relaxation. You will relax each muscle in your body to feel calm."
            `}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Gratitude Jars",
            key: "Gratitude Jars",
            alt: "Gratitude Jars",
            image: "/images/activities/fantasy-forest/gratitude-jar.svg"
          },
          {
            name: "Pen",
            key: "Pen",
            alt: "Pen",
            image: "/images/activities/fantasy-forest/pen.svg",
          },
          {
            name: "Paper",
            key: "Paper",
            alt: "Paper",
            image: "/images/activities/fantasy-forest/paper.svg",
          },
          { name: "", image: "", alt: "4", key: "4" },
          { name: "", image: "", alt: "5", key: "5" },
          { name: "", image: "", alt: "6", key: "6" },
          { name: "", image: "", alt: "7", key: "7" },
          { name: "", image: "", alt: "8", key: "8" },
        ]}
      />

      <Footer
        onBack={onBack}
        onNext={onContinue}
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}