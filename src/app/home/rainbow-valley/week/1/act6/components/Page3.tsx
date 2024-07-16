import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/../../public/images/dashboard/rainbowValley/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `We hope that being able to split up the cleaning throughout the week helped reduce some of the stress 
  that came with looking at all that needed to be completed. Additionally we hope that after completing this schedule you will 
  feel accomplished for getting a significant amount of work done around the living space. With a cleaner environment and being 
  able to focus on a small section each day, we hope this activity improved your mental health and helps you better care for your 
  children.`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Cleaning Schedule"
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
