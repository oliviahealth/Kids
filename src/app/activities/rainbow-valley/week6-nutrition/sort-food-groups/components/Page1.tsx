"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Footer from "@/components/Template/Footer";
import image1 from "@/public/images/dashboard/rainbowValley/week/3/act6/expressions_template.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/3/act6/scissors.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/3/act6/writing_utensils.png";
import image4 from "@/public/images/dashboard/rainbowValley/week/3/act6/paper.png";
import { useEffect, useState } from "react";
import downloadIcon from "@/public/images/dashboard/rainbowValley/shared/download.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    expressions_template: false,
    writing_utensils: false,
    scissors: false,
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
        title="Sort the Food Groups"
        subtitle="Nutrition - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Nutrition is an important component of your child's growth and development which is why it is so crucial to maintain a healthy diet. Starting a routine of healthy eating while your children are still young can help them be more inclined to eat those foods when they are older. The five main food groups your child should be eating and/or drinking are dairy, grains, protein, fruits, and vegetables. To practice learning what foods fit into each category you will work together with your child to complete this Sort the Food Groups activity."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Food Groups Template",
            image: image1,
            alt: "Expressions Template",
            key: "expressions_template",
          },
          {
            name: "Scissors",
            image: image2,
            alt: "Scissors",
            key: "scissors",
          },
          {
            name: "Paper",
            image: image3,
            alt: "Paper",
            key: "paper",
          },
          {
            name: "Writing Utensils",
            image: image4,
            alt: "Writing Utensils ",
            key: "writing_utensils",
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
        link={[
          {
            text: "OLIVIAKIDS Sort the Food Groups Template.pdf",
            img: downloadIcon,
            url: "https://tamucs.sharepoint.com/teams/Team-OLIVIAContentWorkgroup/Shared%20Documents/General/Olivia-KIDS/Content%20Team%20Folder/Week%206%20Nutrition/OLIVIAKIDS%20Sort%20the%20Food%20Groups%20Template.pdf?csf=1&web=1&e=WVqEMV&CID=20226acd-39db-4fa1-9d43-9dea00cb3cac",
          },
        ]}
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
