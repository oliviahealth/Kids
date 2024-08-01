"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/2/act1/aluminum_foil.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/2/act1/paint.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/2/act1/paint_brush.png";
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
    aluminum_foil: false,
    paint: false,
    paint_brush: false,
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
        title="Foil Painting"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Growing up, toddlers learn about the world around them and how they can express their creativity. 
          They may color on the walls or paint on the floor because these are experiences that may seem new and exciting. 
          While the children may enjoy coloring on the walls, caregivers may not appreciate the mess being made. We created 
          an acitivity for the children to express their creativity while also keeping your living space free from any messes. 
          This activity is called Foil Painting and consists of utilizing aluminum foil as the canvas for your children. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Aluminum Foil",
            image: image1,
            alt: "Aluminum Foil",
            key: "aluminum_foil",
          },
          {
            name: "Paint",
            image: image2,
            alt: "Paint",
            key: "paint",
          },
          {
            name: "Paint Brush",
            image: image3,
            alt: "Paint Brush",
            key: "paint_brush",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
