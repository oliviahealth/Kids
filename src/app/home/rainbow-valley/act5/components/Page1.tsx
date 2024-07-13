import Image from "next/image";
import Link from "next/link";
import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import sideImage from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_SideImage.png";
import { useEffect, useState } from "react";
import IntroductionAndMaterials, {
  CheckboxState,
} from "@/components/Template/IntroductionAndMaterials";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import image1 from "../../../../../../public/images/dashboard/rainbowValley/act5/act5_image1.png";
import image2 from "../../../../../../public/images/dashboard/rainbowValley/act5/act5_image2.png";
import image3 from "../../../../../../public/images/dashboard/rainbowValley/act5/act5_image3.png";
import image4 from "../../../../../../public/images/dashboard/rainbowValley/act5/act5_image4.png";

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
        title="Self-Care Wheel"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText={`Listening to music can reduce your stress by helping you focus on the lyrics and the tune of the song. 
          As a caregiver of a 2-3 year old it can be challenging to take time for yourself. However it is important to ensure that 
          you are healthy enough to properly care for the children. That is why we have created the activity, Create Your Own Music 
          Playlist. This activity allows you to go onto your favorite music platform and compile a playlist made of songs that improve 
          your mood. You can make it however long or short you would like and when the playlist is finished you can listen to it for 10-15 
          minutes each day. You can listen to it in the morning as you get ready, during nap time, when you are feeling overwhelmed, or 
          whenever you would like to. `}
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
            name: "Paperclilp",
            image: image4,
            alt: "Paperclilp",
            key: "paperclilp",
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
