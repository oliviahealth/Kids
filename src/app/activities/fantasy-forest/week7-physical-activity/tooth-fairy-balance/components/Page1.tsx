"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import image1 from "@/public/images/dashboard/fantasyForest/week/7/masking_tape.png";
import image2 from "@/public/images/dashboard/fantasyForest/week/7/chalk.png";
import image3 from "@/public/images/dashboard/fantasyForest/week/7/pillows.png";
import image4 from "@/public/images/dashboard/fantasyForest/week/7/mini_marshmallows.png";
import image5 from "@/public/images/dashboard/fantasyForest/week/7/bowls.png";
import image6 from "@/public/images/dashboard/fantasyForest/week/7/spoon.png";
import image7 from "@/public/images/dashboard/fantasyForest/week/7/timer.png";

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
    masking_tape: false,
    chalk: false,
    pillows: false,
    mini_marshmallows: false,
    bowls: false,
    spoon: false,
    timer: false,
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
        title="Tooth Fairy Balance"
        subtitle="Physical Activity - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`
          An important part of keeping your body strong and healthy is finding a way to move and be physically active every day. Teaching your child about the importance of exercise from a young age is important for their physical and mental health. This activity is a fun way to get the whole family up and moving. This is a great activity for children of all ages, so siblings can get involved in the fun as well. Dance parties are a great way to move your body, get your heart rate up, and break a little sweat, all while having a lot of fun!
          
          
          Source: https://www.pinkoatmeal.com/dental-health-gross-motor-activities/
          `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Masking Tape",
            image: image1,
            alt: "Masking Tape",
            key: "masking_tape",
          },
          {
            name: "Chalk",
            image: image2,
            alt: "Chalk",
            key: "chalk",
          },
          {
            name: "Pillows (Optional)",
            image: image3,
            alt: "Pillows (Optional)",
            key: "pillows",
          },
          {
            name: "Mini Marshmallows",
            image: image4,
            alt: "Mini Marshmallows",
            key: "mini_marshmallows",
          },
          { name: "2 Bowls", image: image5, alt: "2 Bowls", key: "bowls" },
          { name: "1 Spoon", image: image6, alt: "1 Spoon", key: "spoon" },
          {
            name: "Timer (Optional)",
            image: image7,
            alt: "Timer (Optional)",
            key: "timer",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#B5F6D0"
        emptyCardBackgroundColor="#88DFAC"
        checkedCardColor="#35A663"
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
