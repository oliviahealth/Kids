import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/../../public/images/dashboard/rainbowValley/week/1/act2/act2_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `Congratulations on making your new creations! We hope that you and your toddler got to spend quality play time together as well as learning time! Continue to make new creations and explore new words and sounds!.`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Playdough Fun!"
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
