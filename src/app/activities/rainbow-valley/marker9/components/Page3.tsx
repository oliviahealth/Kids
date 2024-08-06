import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `We hope you have enjoyed making your nature collage! The goal of this activity was to encourage 
  physical activity, learn more about nature, and create a fun arts and craft! We hope you and your toddler were able to 
  spend quality time together as well as create a memory you can keep forever!`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Nature Collage"
        subtitle="Creative Arts - Rainbow Valley"
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
