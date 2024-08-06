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
    "Colored Cardstock": false,
    "Tape": false,
    "Sharpie": false,
    "Sticky Notes": false,
    "Scissors": false,
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
        title="Name Train"
        subtitle="Language, Literacy, & Speech - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`By ages 2-3, toddlers can consistently say their name when asked. For toddlers, name recognition and being able to spell their name can help with building their identity, creating a foundation for reading and spelling, and can facilitate communication. For this activity, you and your toddler will build a train with the letters of their name. Your toddler will then use post-it notes with letters on them to match the letters on the train. For this activity, we will provide you with a train engine template for you to cut out and build your train, but as the caregiver you will be in charge of teaching your toddler to recognize and learn different letters!`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Colored Cardstock",
            image: "/images/activities/rainbow-valley/paper.svg",
            alt: "Colored Cardstock",
            key: "Colored Cardstock",
          },
          {
            name: "Tape",
            image: "/images/activities/rainbow-valley/tape.svg",
            alt: "Tape",
            key: "Tape",
          },
          {
            name: "Sharpie",
            image: "/images/activities/rainbow-valley/marker.svg",
            alt: "Sharpie",
            key: "Sharpie",
          },
          {
            name: "Sticky Notes",
            image: "/images/activities/rainbow-valley/sticky-notes.svg",
            alt: "Sticky Notes",
            key: "Sticky Notes",
          },
          {
            name: "Scissors",
            image: "/images/activities/rainbow-valley/scissors.svg",
            alt: "Scissors",
            key: "Scissors",
          },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
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
