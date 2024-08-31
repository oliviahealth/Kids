"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Footer from "@/components/Template/Footer";

import image1 from "@/public/images/dashboard/rainbowValley/week/3/act6/paper.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/3/act6/writing_utensils.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/3/act6/paper.png";


import { useEffect, useState } from "react";
import downloadIcon from "@/public/images/dashboard/rainbowValley/shared/download.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    paper1: false,
    pencil: false,
    paper2: false,
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
        title="Safety BINGO"
        subtitle="Safety - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="Toddlers love to run around and play numerous activities each day. It is great for them to try out new activities, but it is important to educate them on the importance of safety. At any point in the day there is a chance that something can go wrong which is why it is crucial for children to know how to react. This Safety BINGO is a card with multiple safety items that can be found in a living space. The child will work together with their caregiver to locate and discuss those different items. They will then mark it off their cards and continue until they earn a bingo."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Safety BINGO Template",
            image: image1,
            alt: "paper1",
            key: "paper1",
          },
          {
            name: "Writing Utensils",
            image: image2,
            alt: "pencil",
            key: "pencil",
          },
          {
            name: "Paper",
            image: image3,
            alt: "paper2",
            key: "paper2",
          },
          {
            name: "",
            image: image1,
            alt: "Empty",
            key: "empty",
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
            text: "Download “OliviaKIDS Safety BINGO Template",
            img: downloadIcon,
            url: "https://tamucs.sharepoint.com/teams/Team-OLIVIAContentWorkgroup/Shared%20Documents/General/Olivia-KIDS/Content%20Team%20Folder/Week%206%20Nutrition/OLIVIAKIDS%20Sort%20the%20Food%20Groups%20Template.pdf?csf=1&web=1&e=WVqEMV&CID=20226acd-39db-4fa1-9d43-9dea00cb3cac",
          },
        ]}
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
