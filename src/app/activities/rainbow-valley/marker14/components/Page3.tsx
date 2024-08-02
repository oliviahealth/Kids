import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText =
    "Overall we hope this activity was fun for your child and taught them how to stay safe when expressing their emotions. These stress balls serve as an alternate activity to hitting when angry or screaming when sad, but also allow the child to feel that certain emotion. It is important not to push away any feelings of anger, fear, or sadness  away, because we want children to stay safe and keep others safe when feeling those emotions. We hope they were able to achieve a better understanding of how to express their emotions.";

  return (
    <>
      <Header
        logoSrc={icon}
        title="Create Your Own Stress Ball"
        subtitle="Emotional, Behavioral, & Social - Rainbow Valley"
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
