import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import { useEffect, useState } from "react";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import image1 from "@/../../public/images/dashboard/rainbowValley/week/1/act3/act3_image1.png";
import image2 from "@/../../public/images/dashboard/rainbowValley/week/1/act3/act3_image2.png";
import image3 from "@/../../public/images/dashboard/rainbowValley/week/1/act3/act3_image3.png";
import image4 from "@/../../public/images/dashboard/rainbowValley/week/1/act3/act3_image4.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    paper: false,
    scissors: false,
    glue: false,
    magazine: false,
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
        title="Vision Board for Self-Care"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`By the age of two, your child's imagination is beginning to bloom! This creativity is important for your child 
          because it allows for self-expression, problem solving, the expression of feelings, and improves their fine motor skills. Just 
          as it is important for toddlers to be creative, it is also just important for adults to foster their own creativity. This is why 
          we created a Vision Board for Self-Care. A vision board is a collection of pictures that represents your goals and aspirations.
          As a parent, you can decide what it is that gives you motivation, piques your interest, and inspires you! This could be something 
          such as baking, gardening, health goals, or maybe even your five-year plan! It is easy to get caught up in the stress of life, 
          this vision board provides a concrete and observable visual for you to focus on and feel positive about.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Paper",
            image: image1,
            alt: "Paper",
            key: "paper",
          },
          {
            name: "Scissors",
            image: image2,
            alt: "Scissors",
            key: "scissors",
          },
          { name: "Glue", image: image3, alt: "Glue", key: "glue" },
          { name: "Magazine", image: image4, alt: "Magazine", key: "magazine" },
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
