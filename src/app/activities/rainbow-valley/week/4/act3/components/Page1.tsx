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
    "Pictures of Animals": false
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
        title="The Animals on the Farm"
        subtitle="Language, Literacy, & Speech - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`By 3 years old, most toddlers understand the meaning of about 900 words and can form 3–5-word sentences! For this activity, we are going to focus on building that vocabulary by learning about different animals!  Your toddler is most likely exposed to many different animals each day – the family dog, the bird that is building a nest outside, animals on TV shows, and maybe even stuffed or toy animals! Learning the different sounds animals make can help improve your toddler’s pronunciation of different words and can help prepare them for school! This activity is a great opportunity to facilitate play while also encouraging learning. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Pictures of Animals",
            image: "/images/activities/rainbow-valley/bear.svg",
            alt: "Pictures of Animals",
            key: "Pictures of Animals",
          },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
          { name: "", image: "", alt: "Empty", key: "empty" },
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
