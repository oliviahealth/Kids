"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import theBook from "/public/images/activities/fantasy-forest/week4/book.svg";
import sheet from "/public/images/activities/fantasy-forest/week4/activity-sheet.svg";
import pen from "/public/images/activities/fantasy-forest/week4/pen.svg";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import { tap } from "node:test/reporters";

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
    theBook: false,
    sheet: false,
    pen: false
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
        title="Spot Goes to the Swimming Pool"
        subtitle="Language, Literacy, and Speech - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

<IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="This activity allows kids to practice reading while learning about water safety. These skills are achieved by reading the book, Spot Goes to the Swimming Pool. You can use either a physical copy or a video reading. Both can be found here. This activity allows children to discuss what pool safety habits Spot was practicing. By writing down what your children say, you are supporting print concepts/letter recognition. You can also have your child practice writing skills by copying the letters you wrote. The sentences in quotation marks are suggestions for what to say to promote more engagement with your child."
        materialsTitle="Materials Needed"
        materials={[
            {
              name: "The Book",
              image: theBook,
              alt: "The Book",
              key: "theBook",
            },
            { name: "Sheet", image: sheet, alt: "Sheet", key: "sheet" },
            { name: "Pen", image: pen, alt: "Pen", key: "pen" },
            { name: "", image: "empty", alt: "Item 5", key: "item4" },
            { name: "", image: "empty", alt: "Item 5", key: "item5" },
            { name: "", image: "empty", alt: "Item 6", key: "item6" },
            { name: "", image: "empty", alt: "Item 7", key: "item7" },
            { name: "", image: "empty", alt: "Item 8", key: "item8" },
          ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor='#B5F6D0'
        emptyCardBackgroundColor='#88DFAC'
        checkedCardColor='#35A663'
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
