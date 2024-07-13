import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `This activity should allow you to take a deep breath and focus on caring for yourself. 
  You will get to reflect on your day and the things that went well compared that those that did not. Then you 
  get to express your feelings about those events and prepare for the upcoming day. Ultimately through this journal 
  reflection you can grow in your self care to better provide for your children.`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Journaling"
        subtitle="Caregiver Wellness - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <KeyTakeaways text={takeawayText} photoSrc={image1} photoAlt="Photo" />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
        rightHasLink={true}
        rightLinkHref={"/home"}
      />
    </>
  );
};

export default Page3;
