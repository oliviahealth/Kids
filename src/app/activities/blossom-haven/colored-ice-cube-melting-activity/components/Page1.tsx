"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import foodColoring from "/public/images/activities/blossom-haven/food-coloring.svg";
import iceCubeTray from "/public/images/activities/blossom-haven/ice-cube-tray.svg";
import paperTowel from "/public/images/activities/blossom-haven/paper-towel.svg";
import list from "@/public/images/dashboard/adventure-bay/Vector.png";
import pen from "@/public/images/dashboard/adventure-bay/fluent_pen-20-filled.png";
import paper from "@/public/images/dashboard/adventure-bay/mdi_paper.png";
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
    foodColoring: false,
    iceCubeTray: false,
    paperTowel: false,
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
        title="Colored Ice Cube Melting Activity"
        subtitle="Creative Arts - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

<IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A topic of your child's growth that professionals like to focus on is your child's engagement in creative art activities. Creative arts at a young age creates many opportunities for your child including high creativity and imagination, improved motor skills, emotional expression, visual learning, and problem solving skills. A great, simple activity that you and your child will enjoy to do together is called Colored Ice Cube Melting Activity. This activity is designed to engage your child by looking at the colored ice cubes, showing and feeling their emotions, and touching the colored ice cubes to explore the feeling and the world around them. Your child explores the world through touch and using their senses, so by doing this activity with them you're allowing them to freely explore themselves and have fun all at the same time."
        materialsTitle="Materials Needed"
        materials={[
            {
              name: "Food Coloring",
              image: foodColoring,
              alt: "Food Coloring",
              key: "foodColoring",
            },
            { name: "Ice Cube Tray", image: iceCubeTray, alt: "Ice Cube Tray", key: "iceCubeTray" },
            { name: "Paper Towel", image: paperTowel, alt: "Paper Towel", key: "paperTowel" },
            { name: "", image: foodColoring, alt: "Item 4", key: "item4" },
            { name: "", image: foodColoring, alt: "Item 5", key: "item5" },
            { name: "", image: foodColoring, alt: "Item 6", key: "item6" },
            { name: "", image: foodColoring, alt: "Item 7", key: "item7" },
            { name: "", image: foodColoring, alt: "Item 8", key: "item8" },
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

