"use client";
import React, { useState, useEffect } from 'react';
import { PageContainer } from '@/components/activity/white-page';
import IntroductionAndMaterials, { Material } from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';
import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

type CheckboxState = {
  [key: string]: boolean;
};

const MindfulMovementPage = ({ onBack, onNext }: { onBack: () => void, onNext: () => void }) => {
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    yogaMat: false,
    timer: false,
    water: false,
    gymClothes: false,
  });

  const handleCheckboxChange = (key: keyof CheckboxState) => {
    setIsChecked(prevState => ({
      ...prevState,
      [key]: !prevState[key],
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
        title="Caregiver Wellness - Blossom Haven"
        subtitle="Mindful Movement"
        homeLink="/"
        subtitleColor="#F1A533"
      />
      <IntroductionAndMaterials
        mainBackgroundColor='#FFF7E3'
        emptyCardBackgroundColor='#F8E7BA'
        checkedCardColor='#F1A533'
        introductionTitle='Mindful Movement'
        introductionText={`
          Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.
          First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases.
          Please note, for postpartum caregivers, talk to your doctor to make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise.
        `}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Yoga Mat",
            key: "yogaMat",
            alt: "Yoga Mat",
            image: "/images/activities/blossom-haven/yogamat.svg"
          } as Material,
          {
            name: "Timer",
            key: "timer",
            alt: "Timer",
            image: "/images/timer.svg",
          },
          {
            name: "Water",
            key: "water",
            alt: "Water",
            image: "/images/water.svg",
          },
          {
            name: "Gym Clothes",
            key: "gymClothes",
            alt: "Gym Clothes",
            image: "/images/gymclothes.svg",
          }
        ]}
      />
      <Footer
        onBack={onBack}
        onNext={onNext}
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default MindfulMovementPage;
