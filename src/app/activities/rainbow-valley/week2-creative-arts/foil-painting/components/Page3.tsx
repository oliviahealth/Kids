import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `This activity was created to allow your children to be creative while also keeping your living space 
  clean. They are able to paint on a surface that may be new and exciting for them and can crumple up the foil for an 
  additional new experience. We hope that your children had a great time painting on the foil and were able to learn 
  another way to express their creativity through art.`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Foil Painting"
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
