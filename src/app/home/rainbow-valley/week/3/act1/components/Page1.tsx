"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Footer from "@/components/Template/Footer";
import { useEffect, useState } from "react";
import image1 from "@/public/images/dashboard/rainbowValley/week/3/act1/balloon.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/3/act1/sensory_filling.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/3/act1/marker.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    balloon: false,
    sensory_filling: false,
    marker: false,
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
        title="Create Your Own Stress Ball"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="As a caregiver of a 2-3 year old child, it may be challenging to interact with the child if they are experiencing strong emotions. Being able to successfully manage emotions as a toddler can be difficult, but it is a task that should be focused on. Working together with your child to demonstrate the expression of different emotions can build trust and encourage the child to talk more openly with you (https://www.childrens.com/health-wellness/teaching-kids-about-emotions). The activity we would like you to participate in with your child is called Create Your Own Stress Ball. It consists of filling balloons with either rice or molding dough, drawing faces on the outside, and learning what each of those faces mean. Ultimately through squeezing their stress balls and communicating with you about the various emotions, the children will have a greater ability to manage their emotions."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Balloon",
            image: image1,
            alt: "Balloon",
            key: "balloon",
          },
          {
            name: "Sensory Filling",
            image: image2,
            alt: "Sensory Filling",
            key: "sensory_filling",
          },
          {
            name: "Marker",
            image: image3,
            alt: "Marker",
            key: "marker",
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
