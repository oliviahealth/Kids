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
        title="Match the Faces"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="A two year old child will begin to walk around the world and witness the varying facial expressions that others make when they feel certain emotions. They may not understand those expressions which is why it is important to teach them the meaning behind a smile or the furrowing of an eyebrow. This activity is called Match the Faces where the children will get to look at multiple facial expressions shown on cards and match them with the same face on a separate card. When collaborating with their caregiver the child will learn what the expressions look like in addition to the name of that certain expression. They will soon be able to name all of the emotions without the help of their caregiver.
"
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Expressions Template",
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
            name: "Writing Utensils",
            image: image3,
            alt: "Writing Utensils ",
            key: "writing_utensils",
          },
          {
            name: "Paper",
            image: image4,
            alt: "Paper",
            key: "paper",
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
            text: "OLIVIAKIDS Match the Faces.pdf",
            img: downloadIcon,
            url: "https://tamucs.sharepoint.com/teams/Team-OLIVIAContentWorkgroup/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL%2FOLIVIAKIDS%20Match%20the%20Faces%2Epdf&parent=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL",
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
