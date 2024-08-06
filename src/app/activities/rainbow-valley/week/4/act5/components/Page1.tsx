"use client";

import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";

import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";

import Footer from "@/components/Template/Footer";
import { useEffect, useState } from "react";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    "1 Cup of Flour": false,
    "2 Tsp Cream of Tartar": false,
    "1 Cup Water": false,
    "1/3 Cup Salt": false,
    "1 Tbs Vegetable Oil": false,
    "Food Coloring": false,
    "Cookie Cutter": false,
    "Ziploc": false,
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
      <Header
        logoSrc={icon}
        title="Playdough Fun!"
        subtitle="Language, Literacy, & Speech - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`By the age of 2-3, toddlers can point to objects and name them, use two-to-four-word sentences, and are rapidly adding to their vocabulary! Playdough is a great activity that not only stimulates sensory and motor development, but it can also aid in speech development! Your toddler can use playdough to make and recognize different shapes and colors, as well as learn different commands such as “roll” and “squish”. You can decide to either make your own playdough, or buy it from the store, the choice is yours! If you decide to make your own, we have provided a recipe for your ease. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "1 Cup of Flour",
            image: "/images/activities/rainbow-valley/flour.svg",
            alt: "1 Cup of Flour",
            key: "1 Cup of Flour",
          },
          {
            name: "2 Tsp Cream of Tartar",
            image: "/images/activities/rainbow-valley/tartar.svg",
            alt: "2 Tsp Cream of Tartar",
            key: "2 Tsp Cream of Tartar",
          },
          {
            name: "1 Cup Water",
            image: "/images/activities/rainbow-valley/droplet.svg",
            alt: "1 Cup Water",
            key: "1 Cup Water",
          },
          {
            name: "1/3 Cup Salt",
            image: "/images/activities/rainbow-valley/shaker.svg",
            alt: "1/3 Cup Salt",
            key: "1/3 Cup Salt",
          },
          {
            name: "1 Tbs Vegetable Oil",
            image: "/images/activities/rainbow-valley/bottle.svg",
            alt: "1 Tbs Vegetable Oil",
            key: "1 Tbs Vegetable Oil",
          },
          {
            name: "Food Coloring",
            image: "/images/activities/rainbow-valley/dropper.svg",
            alt: "Food Coloring",
            key: "Food Coloring",
          },
          {
            name: "Cookie Cutter",
            image: "/images/activities/rainbow-valley/star.svg",
            alt: "Cookie Cutter",
            key: "Cookie Cutter",
          },
          {
            name: "Ziploc",
            image: "/images/activities/rainbow-valley/ziploc.svg",
            alt: "Ziploc",
            key: "Ziploc",
          },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FFD0D0"
        emptyCardBackgroundColor="#FFBABA"
        checkedCardColor="#E75858"
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
};

export default Page1;
