"use client";

import React, { useState, useEffect } from 'react';
import { PageContainer } from '@/components/activity/white-page';
import IntroductionAndMaterials from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

type CheckboxState = {
  [key: string]: boolean;
};

export default function NatureWalk({
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
        title="Nature Walk"
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
          Going on a nature walk is good for your mind and body! You might wonder what makes a nature walk different from a regular walk. The big difference is paying more attention to what’s around you. Follow these steps to enjoy your walk and feel calm and happy.
          Nature walks are easy to do with kids, or you can go alone for some quiet time. Just remember to leave your phone and music at home so you can enjoy the walk without distractions.  
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