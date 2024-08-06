import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";
import keyTakeaway from "@/public/images/dashboard/rainbowValley/week/3/act2/keyTakeaway.png";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `Congratulations! You have successfully worked together to complete this activity. We hope you were able to see how important it is to work with others. It is okay if you made mistakes, because teamwork takes time. Keep up the good work because you can get better the more you practice!`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Sorting With Friends"
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
