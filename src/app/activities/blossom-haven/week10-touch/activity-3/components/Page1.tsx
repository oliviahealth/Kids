"use client";
import React, { useState, useEffect } from "react";

import image1 from "/public/images/activities/blossom-haven/week10/camera.svg";
import image2 from "/public/images/activities/blossom-haven/week10/board.svg";
import image3 from "/public/images/activities/blossom-haven/week10/glue.svg";
import image4 from "/public/images/activities/blossom-haven/week10/ribbon.svg";
import image5 from "/public/images/activities/blossom-haven/week10/cotton.svg";
import image6 from "/public/images/activities/blossom-haven/week10/wrap.svg";
import image7 from "/public/images/activities/blossom-haven/week10/cap.svg";
import image8 from "/public/images/activities/blossom-haven/week10/yarn.svg";


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
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    image7: false,
    image8: false,
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
        title="Activity 3"
        subtitle="Touch - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A key area of growth for your 0-1 year old child is touch and sensory exploration, which can be defined as touching, feeling, and grabbing at things around them in order to gain knowledge of their surroundings. To promote growth in this area, you as the caregiver need to provide them with different feelings of touch such as feeling different textures and a variety of objects. Your child is naturally curious about their environment and the objects around them, so you can help them out by making your very own texture board. A texture board is simply a board with different objects and textures placed on there for your child to touch and explore as they please. For this activity, we will give you the steps to make a texture board and how to let your child use it."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Camera lens",
            image: image1,
            alt: "image1",
            key: "image1",
          },
          {
            name: "Poster Board",
            image: image2,
            alt: "image2",
            key: "image2",
          },
          {
            name: "Glue",
            image: image3,
            alt: "image3",
            key: "image3",
          },
          {
            name: "Tape",
            image: image4,
            alt: "image4",
            key: "image4",
          },
          { name: "Cotton balls/Pom Poms", image: image5, alt: "image5", key: "image5" },
          { name: "Bubble Wrap", image: image6, alt: "image6", key: "image6" },
          { name: "Bottle Caps", image: image7, alt: "image7", key: "image7" },
          { name: "Textured Items", image: image8, alt: "image8", key: "image8" },
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
