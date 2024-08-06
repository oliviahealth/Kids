"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";

import flour from "/public/images/activities/fantasy-forest/week5/flour.svg";
import funnel from "/public/images/activities/fantasy-forest/week5/funnel.svg";
import bottle from "/public/images/activities/fantasy-forest/week5/bottle.svg";
import balloon from "/public/images/activities/fantasy-forest/week5/balloon.svg";
import sharpie from "/public/images/activities/fantasy-forest/week5/sharpie.svg";

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
    flour: false,
    funnel: false,
    bottle: false,
    balloon: false,
    sharpie: false,
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
        title="DIY Stress Ball"
        subtitle="Domain name - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Learning to control emotions, especially worry and stress, is a hard skill to learn. It involves coming up with mechanisms to help us cope and sort through these powerful emotions when we experience them. This activity works on giving your child a mechanism to express their emotions in a productive and helpful way. From this activity your child will have the opportunity to practice following directions by learning how to make the stress ball. Also, your child will practice self-regulation by learning how to use the stress ball in times of worry or unease. Depending on your child’s ability you may need to actively make the stress ball yourself but be sure to narrate what you’re doing as you do it, so your child can follow along."
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "3/4 Cup of Flour",
              image: flour,
              alt: "Flour",
              key: "flour",
          },
          {
              name: "Funnel",
              image: funnel,
              alt: "Funnel",
              key: "funnel",
          },
          {
              name: "Empty Plastic Bottle",
              image: bottle,
              alt: "Bottle",
              key: "bottle",
          },
          {
              name: "Balloon",
              image: balloon,
              alt: "Balloon",
              key: "balloon",
          },
          {
              name: "Sharpie",
              image: sharpie,
              alt: "Sharpie",
              key: "sharpie",
          },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}
///./////////////////////////////////////////////////////////////////////////

// type CheckboxState = {
//   [key: string]: boolean;
// };

// export default function Page1({
//   onNext,
//   onBack,
// }: {
//   onNext: () => void;
//   onBack: () => void;
// }) {
//   const [isChecked, setIsChecked] = useState<CheckboxState>({
//     list: false,
//     pen: false,
//     paper: false,
//   });

//   const handleCheckboxChange = (type: keyof typeof isChecked) => {
//     setIsChecked((prevState) => ({
//       ...prevState,
//       [type]: !prevState[type],
//     }));
//   };

//   const [buttonDisabled, setButtonDisabled] = useState(true);

//   useEffect(() => {
//     const allChecked = Object.values(isChecked).every(Boolean);
//     setButtonDisabled(!allChecked);
//   }, [isChecked]);

//   return (
//     <>
//       <Header
//         logoSrc={logo}
//         title="Affirmations for Children and Caregivers"
//         subtitle="Caregiver Wellness - Adventure Bay"
//         homeLink="/home"
//         subtitleColor="#52C5C0"
//       />

//       <IntroductionAndMaterials
//         introductionTitle="Introduction"
//         introductionText="At 3-4 years of age, children are little bundles of energy that are learning, growing, and exploring every day. They require a lot of attention from their caregiver, which can be physically and mentally taxing for that caregiver. As wonderful as it is for you to give so much of your attention to your child's health and development, it may cause burnout and negative thoughts over time. One way to combat these negative thoughts is by practicing daily affirmations. These short statements can help retrain your brain into a mindset that is supportive and encouraging, aiding in in your resilience as a caregiver. Your child could practice positive affirmations as well! Not only could it help boost their confidence and self-image, but it could also help them make advancements in their speech and language skills. The affirmations can be short and simple while still making a powerful impact on their positive thinking. This is an activity that you and your child can practice together each day. You can recite them together, brainstorm unique ones for each of you, and even use a pencil and paper to write them out and practice letters at the same time!"
//         materialsTitle="Materials Needed"
//         materials={[
//           {
//             name: "OliviaKids Affirmation List",
//             image: list,
//             alt: "List",
//             key: "list",
//           },
//           { name: "Pencil", image: pen, alt: "Pen", key: "pen" },
//           { name: "Paper", image: paper, alt: "Paper", key: "paper" },
//           { name: "", image: "empty", alt: "Item 4", key: "item4" },
//           { name: "", image: pen, alt: "Item 5", key: "item5" },
//           { name: "", image: paper, alt: "Item 6", key: "item6" },
//           { name: "", image: list, alt: "Item 7", key: "item7" },
//           { name: "", image: pen, alt: "Item 8", key: "item8" },
//         ]}
//         isChecked={isChecked}
//         handleCheckboxChange={handleCheckboxChange}
//         mainBackgroundColor="#C5FFFC"
//         emptyCardBackgroundColor="#8AEFEB"
//         checkedCardColor="#52C5C0"
//       />
//       <Footer
//         onNext={onNext}
//         onBack={onBack}
//         rightButtonDisabledAllowed={true}
//         rightButtonDisabled={buttonDisabled}
//         leftButtonText="Learn More"
//         rightButtonText="Continue"
//       />
//     </>
//   );
// }
