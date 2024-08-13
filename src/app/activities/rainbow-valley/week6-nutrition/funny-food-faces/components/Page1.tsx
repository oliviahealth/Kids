"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Footer from "@/components/Template/Footer";
import image1 from "@/public/images/dashboard/rainbowValley/week/6/fruit.svg";
import image2 from "@/public/images/dashboard/rainbowValley/week/6/vegetables.svg";
import { useEffect, useState } from "react";
import downloadIcon from "@/public/images/dashboard/rainbowValley/shared/download.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    fruit: false,
    vegetables: false,
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
        title="Funny Food Faces"
        subtitle="Nutrition - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Has your toddler ever started playing with their food on the table? What you may not know is that this is actually very important in toddler development! Playing with food can help with picky eaters because toddlers are much more likely to eat food they can play with and explore! In addition, it helps form fine motor skills as they use their hands to manipulate their food. For this activity, gather fruits and vegetables from your kitchen and allow your toddler to use them to make silly faces. The goal of this activity is to make healthy eating fun and hopefully encourage your toddler to try some of these new foods!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Fruits",
            image: image1,
            alt: "fruit",
            key: "fruit",
          },
          {
            name: "Vegetables",
            image: image2,
            alt: "vegetables",
            key: "vegetables",
          },
          {
            name: "",
            image: image1,
            alt: "Empty",
            key: "Empty",
          },
          {
            name: "",
            image: image1,
            alt: "Empty",
            key: "Empty",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
