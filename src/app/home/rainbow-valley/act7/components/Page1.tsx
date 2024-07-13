import Image from "next/image";
import Link from "next/link";
import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import sideImage from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_SideImage.png";
import { useEffect, useState } from "react";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Header from "@/components/Template/Header";
import image1 from "../../../../../../public/images/dashboard/rainbowValley/act7/act7_image1.png";
import image2 from "../../../../../../public/images/dashboard/rainbowValley/act7/act7_image2.png";
import Footer from "@/components/Template/Footer";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    headphones: false,
    favorite_app: false,
    music: false,
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
        title="Self-Care Bingo"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Taking care of yourself is extremely important when in charge of children. Kids ages 2-3 have enormous 
          amounts of energy which can be difficult as a caregiver. That is why self care helps you take care of yourself to ensure 
          that you are giving the children an uplifting environment to grow up in. The National Institute of Mental Health (NIH) 
          wrote an article about the importance of mental health and how it can affect your entire wellbeing. They also provide 
          advice on when to seek help for your mental health. Reading this article and completing the Self Care BINGO activity will 
          help improve your mental health so you can better care for your children.`}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Marker",
            image: image1,
            alt: "Marker",
            key: "marker",
          },
          {
            name: "Bingo Card",
            image: image2,
            alt: "Bingo Card",
            key: "bingo_card",
          },
          { name: "", image: image1, alt: "Empty", key: "empty" },
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
