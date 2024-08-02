import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";
import keyTakeaway from "@/public/images/dashboard/rainbowValley/week/3/act4/keyTakeaway.png";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `Congratulations, you have finished this activity! You did a great job sharing the ball and we hope you had a great time. Remember that sharing is important and can also be very exciting. Good luck with practicing your sharing skills!`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Toss With a Friend"
        subtitle="Emotional, Behavioral, & Social - Rainbow Valley"
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
