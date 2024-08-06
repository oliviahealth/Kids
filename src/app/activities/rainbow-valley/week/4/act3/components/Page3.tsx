import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/../../public/images/dashboard/rainbowValley/week/1/act2/act2_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `Learning about animals and their sounds is important in your toddler’s speech development! Through this activity, we hope that your toddler has a greater understanding about the animals around them and has built upon their vocabulary! Remember to keep practicing as learning does not happen after one play session! Once your toddler has a good understanding of these animals, try and go see them in real life! This may be as simple as taking a trip to the park or maybe even getting the whole family together and taking a trip to the zoo!`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="The Animals on the Farm"
        subtitle="Language, Literacy, & Speech - Rainbow Valley"
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
