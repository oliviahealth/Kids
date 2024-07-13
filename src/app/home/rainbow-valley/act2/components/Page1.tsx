import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import { useEffect, useState } from "react";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import image1 from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_image1.png";
import image2 from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_image2.png";
import image3 from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_image3.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    journal_templates: false,
    journal: false,
    pen: false,
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
        title="Create Your Own Music Playlist"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Caring for a child or multiple children between the ages of 2-3 is a difficult task and practicing self-care may 
          feel like the least important task on your to-do list. As a caregiver it is important to implement self-care so you can best take
           care of others. It can improve confidence, mood, and foster an encouraging environment for the children. This activity consists of 
           setting aside a certain amount of time each day to write about anything you may want to clear from your head. You can write down 
           what events happened that day, what you are thankful for, or even what obstacle(s) you faced and how you handled it/them or wished
            you handled it/them. If you feel remorseful for how you handled  a certain situation, thinking  through how it went and what to 
            improve in the future can help you try to avoid that circumstance again. Jotting down the moments that went well and brought you 
            joy can instill in you the energy you need to take care of the children. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Journal Templates",
            image: image1,
            alt: "Journal Templates",
            key: "journal_templates",
          },
          {
            name: "Journal",
            image: image2,
            alt: "Journal",
            key: "journal",
          },
          { name: "Pen", image: image3, alt: "Pen", key: "pen" },
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
