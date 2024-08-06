"use client";

import Header from "@/components/Template/Header";
import IntroductionAndMaterials, { CheckboxState } from "@/components/Template/IntroductionAndMaterials";

import Footer from "@/components/Template/Footer";
import { useEffect, useState } from "react";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const Page1: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    "Pillow": false,
    "Blanket": false,
    "Child Book/Lullaby": false,
    "Child's Bottle": false,
  });

  const handleCheckboxChange = (type: keyof typeof isChecked) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  useEffect(() => {
    const allChecked = Object.values(isChecked).every(Boolean);
    setButtonDisabled(!allChecked);
  }, [isChecked]);


  return (
    <>
      <Header logoSrc={headerIcon} title="Bedtime Bliss: Baby's Sleep Routine" subtitle="Safety - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Part of ensuring your child's safety within the home environment can be stemmed from making sure your child has a nigh time sleep routine because having healthy sleep is a key component of one's overall health. With your child being within the 0-1 age range, this is a vital time to try and get your child onto a regular sleep routine so a regular habit is set and help sustain a healthy baby. In this activity, we will provide you with the steps that will help you, the caregiver, set up a nigh time sleep routine for your child. While the routine may not take effect immediately, regularly using the routine's steps will put your child on track to have a safe and healthy home environment.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Pillow",
            image: "/images/activities/blossom-haven/pillow.svg",
            alt: "Pillow",
            key: "Pillow",
          },
          {
            name: "Blanket",
            image: "/images/activities/blossom-haven/blanket.svg",
            alt: "Blanket",
            key: "Blanket",
          },
          {
            name: "Child Book/Lullaby",
            image: "/images/activities/blossom-haven/book2.svg",
            alt: "Child Book/Lullaby",
            key: "Child Book/Lullaby"
          },
          {
            name: "Child’s Bottle",
            image: "/images/activities/blossom-haven/baby-bottle.svg",
            alt: "Child’s Bottle",
            key: "Child’s Bottle"
          },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#FFF7E3'
        emptyCardBackgroundColor='#F8E7BA'
        checkedCardColor='#F1A533'
      />
      <Footer
        onNext={onNext}
        onBack={onBack}
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={false}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
