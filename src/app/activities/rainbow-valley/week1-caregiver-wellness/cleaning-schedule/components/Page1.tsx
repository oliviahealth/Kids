import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import { useEffect, useState } from "react";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import image1 from "@/../../public/images/dashboard/rainbowValley/week/1/act6/act6_image1.png";
import image2 from "@/../../public/images/dashboard/rainbowValley/week/1/act6/act6_image2.png";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    pen: false,
    cleaning_supplies: false,
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
        title="Cleaning Schedule"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Cleaning is a responsibility that some find relaxing and others struggle to complete. Despite your 
          opinions on this task, completing it while caring for children between the ages of 2-3 can be extremely daunting. 
          Laundry builds up, smudges on mirrors become more prevalent, and you start to become more aware of grime from the 
          floors that sticks to your feet. All of this and more can be occurring around you increasing your stress level and 
          making it difficult to choose where to start. That is why we have created the Cleaning Schedule for each day of the week. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Pen",
            image: image1,
            alt: "Pen",
            key: "pen",
          },
          {
            name: "Cleaning Supplies",
            image: image2,
            alt: "Cleaning Supplies",
            key: "cleaning_supplies",
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
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
};

export default Page1;
