import icon from "@/public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `Congratulations! You have completed your paper plate sun. We hope that your child had a 
  great time learning about the different properties of the sun (its temperature, shape, size, etc.) as they 
  created it with a few household items. We also hope they were able to express their creativity by choosing 
  where to place the glue dots and seeing how the pacement of those straws/pipe cleaners transformed a paper 
  plate into a sun.`;

  return (
    <>
      <Header
        logoSrc={icon}
        title="Create Your Own Paper Plate Sun"
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
