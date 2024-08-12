"use client";
import React, { useState, useEffect } from 'react';
import IntroductionAndMaterials, { Material } from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';
import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

type CheckboxState = {
  [key: string]: boolean;
};

const WalkingNatureJournalPage = ({ onBack, onNext }: { onBack: () => void, onNext: () => void }) => {
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    journal: false,
    marker: false,
    stickers: false,
    postits: false,
    phoneCamera: false,
    phone: false,
    notesApp: false
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
        subtitle="Walking Nature Journal"
        homeLink="/"
        subtitleColor="#F1A533"
      />
      <IntroductionAndMaterials
        mainBackgroundColor='#FFF7E3'
        emptyCardBackgroundColor='#F8E7BA'
        checkedCardColor='#F1A533'
        introductionTitle='Walking Nature Journal'
        introductionText={`
          Taking care of a child, especially an infant (0-1 year old), is not an easy task. The change in routines and constant running around can easily increase feelings of stress and other emotions that can hurt mental and physical health.

          Postpartum depression is a major concern among new caregivers. Strong feelings of sadness, anxiety, and being tired that happen soon after delivery of the child. Those with postpartum depression have difficulty managing their emotions, have mood swings, lose interest in things they used to like, have trouble bonding with their child, and experience depressive emotions such as thoughts of suicide. Luckily for all caregivers, there are exercises you can follow to improve your mental health and learn the risks of postpartum depression.
          
          A great exercise that caregivers can do to improve their mental health is journaling. For this activity, we are going to focus on creating a walking nature journal for the caregiver to use no matter where they may be located. We recommend that caregivers have a physical journal as this helps with engagement, but having an electronic version is okay too.
        `}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Journal",
            key: "journal",
            alt: "journal",
            image: "/images/journal.svg"
          },
          {
            name: "Marker",
            key: "marker",
            alt: "marker",
            image: "/images/marker.svg",
          },
          {
            name: "Sticker",
            key: "stickers",
            alt: "sticker",
            image: "/images/sticker.svg",
          },
          {
            name: "Post-Its",
            key: "postits",
            alt: "Post-Its",
            image: "/images/post-it.svg",
          },
          {
            name: "Phone Camera",
            key: "phoneCamera",
            alt: "Phone Camera",
            image: "/images/camera.svg",
          },
          {
            name: "Phone",
            key: "phone",
            alt: "Phone",
            image: "/images/phone.svg",
          },
          {
            name: "Notes App",
            key: "notesApp",
            alt: "notesApp",
            image: "/images/notes.svg",
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

export default WalkingNatureJournalPage;
