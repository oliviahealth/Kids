"use client";
import React, { useState, useEffect } from "react";
import towel from "/public/images/activities/blossom-haven/week7/towel.svg";
import bearChildsToys from "/public/images/activities/blossom-haven/week7/bearChildsToys.svg";
import secondPlayMat from "/public/images/activities/blossom-haven/week7/secondPlayMat.svg";
import logo from "/public/images/activities/blossom-haven/icon.svg";
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
  towel: false,
  bearChildsToys: false,
  secondPlayMat: false,
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
        title="Week 7 Activity B"
        subtitle="Physical Activity - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="In the first few months of your child's life, the best way to grow their physical development is through tummy time activities and exercises. Tummy time can be described as any activities done while your child is on their stomach because this position forces the child to use upper body muscles to look, feel, and grab at items or people around them. This is a crucial time of their physical activity development because your child needs to grow the strength of their neck, back, shoulder, and arm muscles in order to reach their later physical activity milestones. Doing these activity steps will significantly help your child reach their current milestones, and keep them on track for future ones."
        materialsTitle="Materials Needed"
        materials = {[
          {
            name: "Towel",
            image: towel,
            alt: "Towel",
            key: "towel",
          },
          {
            name: "Bear Child's Toys",
            image: bearChildsToys,
            alt: "Bear Child's Toys",
            key: "bearChildsToys",
          },
          {
            name: "Second Play Mat",
            image: secondPlayMat,
            alt: "Second Play Mat",
            key: "secondPlayMat",
          },
          { name: "", image: "empty", alt: "Item 4", key: "item4" },
          { name: "", image: "empty", alt: "Item 5", key: "item5" },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
        ]}
        
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#FFF7E3"
        emptyCardBackgroundColor="#F8E7BA"
        checkedCardColor="#F1A533"
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
