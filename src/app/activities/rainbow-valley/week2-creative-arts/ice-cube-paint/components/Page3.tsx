import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `Your children have now finished this activity and hopefully got to experience many new 
  adventures. They were able to learn how water freezes to transform into ice and use this ice to create their 
  own paint. We hope that the children were able to feel accomplished by using the paint they made and see how 
  it spread across their paper. Additionally we hope that they were able to express creativity by choosing the 
  colors to mix into the water and using the ice cube "paint" to finish their artwork.`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Ice Cube Paint"
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
