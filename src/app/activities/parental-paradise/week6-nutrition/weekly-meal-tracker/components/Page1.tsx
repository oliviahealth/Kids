"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import image1 from "/public/images/dashboard/pregnancy/paper.svg";
import image2 from "/public/images/dashboard/pregnancy/journal.svg";
import image3 from "/public/images/dashboard/pregnancy/Pen.png";
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
    paper: false,
    journal: false,
    pen: false,
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
        title="Weekly Meal Tracker"
        subtitle="Nutrition - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Proper nutrition during pregnancy is crucial for the health and development of both you and your baby. Consuming a well balanced diet rich in essential nutrients supports the baby's growth and reduces the risk of birth defects and complications. Good nutrition can help you as the caregiver to maintain adequate energy levels, manage pregnancy symptoms, and prepare your body for labor and recovery. Key nutrients like folic acid, iron, calcium, and omega-3 fatty acids play vital roles in ensuring a healthy pregnancy. Prioritizing nutrition promotes the immediate well-being of both mom and baby, but it also lays the foundation for a healthy future. For this activity, you are going to track the meals that you eat each day in order to help you figure out which foods/meals that make you feel good!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Meal Tracking Template",
            image: image1,
            alt: "paper",
            key: "paper",
          },
          { name: "Notebook", image: image2, alt: "journal", key: "journal" },
          { name: "Pen", image: image3, alt: "pen", key: "pen" },
          { name: "", image: logo, alt: "Image 4", key: "image4" },
          { name: "", image: logo, alt: "Item 5", key: "item5" },
          { name: "", image: logo, alt: "Item 6", key: "item6" },
          { name: "", image: logo, alt: "Item 7", key: "item7" },
          { name: "", image: logo, alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#FEEDFF'
        emptyCardBackgroundColor='#FCD3FF'
        checkedCardColor='#F797FF'
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
