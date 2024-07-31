"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/2/act3/salt.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/2/act3/paint.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/2/act3/flour.png";
import image4 from "@/public/images/dashboard/rainbowValley/week/2/act3/rolling_pin.png";
import image5 from "@/public/images/dashboard/rainbowValley/week/2/act3/water.png";
import image6 from "@/public/images/dashboard/rainbowValley/week/2/act3/cookie_cutters.png";
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
    salt: false,
    paint: false,
    flour: false,
    rolling_pin: false,
    water: false,
    cookie_cutters: false,
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
        title="Salt Dough"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Did you know, our sense of touch is the first of our five senses to develop in the womb? 
          Touch is essential for your toddler to learn more about their environment. Through touch, your toddler is able 
          to build muscle strength by grasping, building, and squeezing. Fine motor skills are also enhanced through 
          touch as your toddler learns to use each of the small muscles in their hands. Salt dough is a great craft 
          for a toddler to play with as it will enhance those fine motor skills, allow for creativity, and ease tension.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Salt",
            image: image1,
            alt: "Salt",
            key: "salt",
          },
          {
            name: "Paint",
            image: image2,
            alt: "Paint",
            key: "paint",
          },
          { name: "Flour", image: image3, alt: "Flour", key: "flour" },
          {
            name: "Rolling Pin",
            image: image4,
            alt: "Rolling Pin",
            key: "rolling_pin",
          },
          { name: "Water", image: image5, alt: "Water", key: "water" },
          {
            name: "Cookie Cutters",
            image: image6,
            alt: "Cookie Cutters",
            key: "cookie_cutters",
          },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
