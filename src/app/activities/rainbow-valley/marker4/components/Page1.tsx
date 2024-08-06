import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import { useEffect, useState } from "react";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Header from "@/components/Template/Header";
import image1 from "@/../../public/images/dashboard/rainbowValley/week/1/act4/act4_image1.png";
import image2 from "@/../../public/images/dashboard/rainbowValley/week/1/act4/act4_image2.png";
import Footer from "@/components/Template/Footer";

const Page1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    vehicle: false,
    the_road: false,
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
        title="Mindful Driving"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Driving a car can be stressful especially as a caregiver of a child or multiple children between the
          ages of 2-3. If the child is emotional this can distract you as a driver and increase feelings of stress or can make
          you want to get to the destination sooner. This sense of hurry can decrease how aware you are of your surroundings
          and can put the passengers in your car more at risk. We have created an activity for you to focus on your five senses 
          as you drive to increase safety in addition to your mental wellbeing. This activity is called Mindful Driving and 
          encourages you to take an active part in paying attention to the details when driving. This will allow you to calm 
          your mind and ensure you will safely reach your intended destination. `}
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Vehicle",
            image: image1,
            alt: "Vehicle",
            key: "vehicle",
          },
          {
            name: "The Road",
            image: image2,
            alt: "The Road",
            key: "the_road",
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
