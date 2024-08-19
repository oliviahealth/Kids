"use client";
import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Footer from "@/components/Template/Footer";
import { useEffect, useState } from "react";
import image1 from "@/public/images/dashboard/rainbowValley/week/3/act5/coping_skills_template.png";
import image2 from "@/public/images/dashboard/rainbowValley/week/3/act5/writing_utensils.png";
import image3 from "@/public/images/dashboard/rainbowValley/week/3/act5/paper.png";
import downloadIcon from "@/public/images/dashboard/rainbowValley/shared/download.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    coping_skills_template: false,
    writing_utensils: false,
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
        title="Creating Coping Skills"
        subtitle="Emotional, Behavioral, & Social - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="It can be challenging to express your emotions especially as a two year old who has not had much time practicing these skills. When a child gets mad, it is important to stay calm as the caregiver and offer ideas to them that can help them feel better. This will teach them that there are better ways to cope with emotions than kicking someone or throwing an object. This activity is called Creating Coping Skills and allows the child to practice different coping skills that may help them when feeling a certain emotion. They will get to explain the emotion they are feeling and find an activity to help them feel better. Lets get started!"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Coping Skills Template",
            image: image1,
            alt: "Coping Skills Template",
            key: "coping_skills_template",
          },
          {
            name: "Writing Utensils",
            image: image2,
            alt: "Writing Utensils",
            key: "writing_utensils",
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
        link={[
          {
            text: "OLIVIAKIDS Creating Coping Skills.pdf",
            img: downloadIcon,
            url: "https://tamucs.sharepoint.com/teams/Team-OLIVIAContentWorkgroup/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL%2FOLIVIAKIDS%20Creating%20Coping%20Skills%2Epdf&parent=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL",
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
