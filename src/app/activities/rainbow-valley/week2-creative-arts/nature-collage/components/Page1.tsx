"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/2/act2/collected_items.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/2/act2/glue.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/2/act2/paper.png";
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
    collected_items: false,
    glue: false,
    paper: false,
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
        title="Nature Collage"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`During the ages of 2-3, your child is constantly learning about the environment that surrounds 
          them. When objects are pointed out, they are able to recognize and verbalize what they are. Research shows that 
          spending time in nature can decrease the risk of developing obesity, diabetes, and cardiovascular disease. In 
          addition, spending time outside leads to improved cognitive function by decreasing stress and anxiety. We have 
          created this nature collage activity that allows children to build on their sensory development, learn more 
          about nature, create a fun arts and crafts project, and even get some physical activity in at the same time!`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Collected Items",
            image: image1,
            alt: "Collected Items",
            key: "collected_items",
          },
          {
            name: "Glue",
            image: image2,
            alt: "Glue",
            key: "glue",
          },
          { name: "Paper", image: image3, alt: "Paper", key: "paper" },
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
