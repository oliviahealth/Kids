"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import muffinTin from "/public/images/activities/fantasy-forest/week4/muffin-tin.svg";
import activitySheet from "/public/images/activities/fantasy-forest/week4/activity-sheet.svg";
import secondPen from "/public/images/activities/fantasy-forest/week4/second-pen.svg";
import sourItems from "/public/images/activities/fantasy-forest/week4/sour-items.svg";
import sweetItems from "/public/images/activities/fantasy-forest/week4/sweet-items.svg";
import saltyItems from "/public/images/activities/fantasy-forest/week4/salty-items.svg";
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
    muffinTin: false,
    activitySheet: false,
    secondPen: false,
    sourItems: false,
    sweetItems: false,
    saltyItems: false,
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
        title="Taste Test Challenge"
        subtitle="Language, Literacy, and Speech - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Encouraging your child to explore their five senses and how they work helps to increase your child's understanding of and communication about their world. Your child will practice language development by using their words to explore different tastes and textures. Additionally, this promotes self-awareness and sensory discrimination. Your child will also demonstrate logical thinking as they complete the activity sheet by thinking logically through predictions of what each food item will taste like, and confirming if their prediction was true. The sentences in quotations are suggestions for things to say throughout the activity to promote engagement with your child. "
        materialsTitle="Materials Needed"
        materials={[
          {
              name: "Muffin Tin",
              image: muffinTin,
              alt: "Muffin Tin",
              key: "muffinTin",
          },
          { 
              name: "Activity Sheet", 
              image: activitySheet, 
              alt: "Activity Sheet", 
              key: "activitySheet" 
          },
          { 
              name: "Second Pen", 
              image: secondPen, 
              alt: "Second Pen", 
              key: "secondPen" 
          },
          { 
              name: "Sour Items", 
              image: sourItems, 
              alt: "Sour Items", 
              key: "sourItems" 
          },
          { 
              name: "Sweet Items", 
              image: sweetItems, 
              alt: "Sweet Items", 
              key: "sweetItems" 
          },
          { 
              name: "Salty Items", 
              image: saltyItems, 
              alt: "Salty Items", 
              key: "saltyItems" 
          },
          { 
              name: "", 
              image: "empty", 
              alt: "Item 7", 
              key: "item7" 
          },
          { 
              name: "", 
              image: "empty", 
              alt: "Item 8", 
              key: "item8" 
          },
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
