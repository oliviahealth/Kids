import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";
import keyTakeaway from "@/public/images/dashboard/rainbowValley/week/4/act2/keyTakeaway.png";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText =
    "You have completed this sharing activity! We hope you were able to learn how fun sharing can be. It may not be easy, but sharing helps you grow as a person and we hope you are excited to participate in this activity again.";

  return (
    <>
      <Header
        logoSrc={icon}
        title="The Sharing Circle"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />

      <KeyTakeaways
        text={takeawayText}
        photoSrc={image1}
        photoAlt="Photo"
        img={keyTakeaway}
      />
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
