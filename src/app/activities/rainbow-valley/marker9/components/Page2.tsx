import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import Activity, { ActivityStep } from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";

const Page2: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activitySteps: ActivityStep[] = [
    {
      stepNumber: 1,
      description:
        "Take your child to the park or stay in the comfort of your own backyard.",
    },
    {
      stepNumber: 2,
      description:
        "Allow your child to collect items that pique their interest such as leaves, twigs, and flowers",
    },
    {
      stepNumber: 3,
      description: "Bring all the fun and interesting objects home.",
    },
    {
      stepNumber: 4,
      description: "Glue or tape all of the objects on a piece of paper.",
    },
    {
      stepNumber: 5,
      description:
        "Take a picture of your child's collage so it can last forever. ",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Nature Collage"
        subtitle="Creative Arts - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
      />
      <Activity steps={activitySteps} stepNumberColor="#E75858" />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
      />
    </>
  );
};

export default Page2;
