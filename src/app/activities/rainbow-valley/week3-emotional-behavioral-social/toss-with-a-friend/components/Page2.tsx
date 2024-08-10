import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";

const Page2: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activitySteps = [
    {
      stepNumber: 1,
      description: "Find a ball that you can safely throw to a 2 year old. ",
    },
    {
      stepNumber: 2,
      description: "Stand across from the child and throw the ball to them.",
    },
    {
      stepNumber: 3,
      description:
        "Encourage them to throw it back and continue going back and forth.",
    },
    {
      stepNumber: 4,
      description:
        "For another challenge, try kicking or bouncing the ball to each other.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Toss With a Friend"
        subtitle="Emotional, Behavioral, & Social - Rainbow Valley"
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
