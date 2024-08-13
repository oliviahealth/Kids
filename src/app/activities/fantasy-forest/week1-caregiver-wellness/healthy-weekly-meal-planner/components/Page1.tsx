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

export default function HealthyWeeklyMealPlanner({
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
        title="Healthy Weekly Meal Planner"
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
          There are many things you can't control in life, especially when you have to take care of others. But one thing you can control is making a meal plan each week! This can help reduce some stress.

          Simple planning:
          Here, you can find a printable template for a weekly meal plan as well as a template for a grocery list. You can fill them out alone or you can include your kids in the planning process. Two benefits of including your kids is that you can teach them about the importance of balance with nutrition, and they are more likely to eat the meals if they help choose them. To increase involvement, a kid-friendly food group plate is included that shows the recommended amounts of each food group with common examples.

          Taking some time once a week to make a meal plan and a grocery list can remove some of the stress during the week.
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
