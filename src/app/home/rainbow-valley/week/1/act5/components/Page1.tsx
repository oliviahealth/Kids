import Image from "next/image";
import Link from "next/link";
import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import sideImage from "@/../../public/images/dashboard/rainbowValley/week/1/act1/act1_SideImage.png";
import { useEffect, useState } from "react";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import image1 from "@/../../public/images/dashboard/rainbowValley/week/1/act5/act5_image1.png";
import image2 from "@/../../public/images/dashboard/rainbowValley/week/1/act5/act5_image2.png";
import image3 from "@/../../public/images/dashboard/rainbowValley/week/1/act5/act5_image3.png";
import image4 from "@/../../public/images/dashboard/rainbowValley/week/1/act5/act5_image4.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    paper: false,
    pen: false,
    marker: false,
    paperclip: false,
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
        title="Self-Care Wheel"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Caring for a child between the ages of 2-3 can be challenging. They may be full of energy and ready to 
          move on from one activity to the next within a matter of minutes. It is important to be able to take a deep breath and 
          ensure that you can fill yourself with energy in order to properly look after your child. We created an activity for you 
          that allows you to write down self care ideas and come back to them when you are stressed. This activity is called the 
          Self Care Wheel. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Paper",
            image: image1,
            alt: "Paper",
            key: "paper",
          },
          {
            name: "Pen",
            image: image2,
            alt: "Pen",
            key: "pen",
          },
          { name: "Marker", image: image3, alt: "Marker", key: "marker" },
          {
            name: "Paperclip",
            image: image4,
            alt: "Paperclip",
            key: "paperclip",
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
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
