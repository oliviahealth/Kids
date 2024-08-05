"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../../public/images/dashboard/pregnancy/prenatal-icon.svg";
import book from "../../../../../../../public/images/dashboard/pregnancy/journal.svg";
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
    book: false,
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
        title="Books for your Baby!"
        subtitle="Language, Literacy, & Speech - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Reading to your baby in the womb may seem a little silly and unusual, but it is actually proven to provide many wonderful benefits. While the baby is growing inside the mother, its brain is developing quickly, and during the second trimester the baby will begin to be able to hear different sounds and voices! During the third trimester, the baby may start to respond to sounds from outside of the womb. By reading aloud during pregnancy, parents can help the baby's early language development, create a strong emotional bond, and establish a calming routine. This practice introduces the baby to the sounds and patterns of speech and helps the baby feel safe and connected to the parents even before birth! We have compiled a list of books for you to read to your growing baby while awaiting their arrival!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Books",
            image: book,
            alt: "book",
            key: "book",
          },
          { name: "", image: logo, alt: "Item 2", key: "item2" },
          { name: "", image: logo, alt: "Item 3", key: "item3" },
          { name: "", image: logo, alt: "Item 4", key: "item4" },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
