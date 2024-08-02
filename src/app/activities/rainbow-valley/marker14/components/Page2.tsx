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
        "Grab your balloon and stretch out the top so there is a larger opening.",
    },
    {
      stepNumber: 2,
      description:
        "Fill that opening with either rice or molding dough until the balloon is halfway full. ",
    },
    {
      stepNumber: 3,
      description: "Tie off the end of the balloon with a knot.",
    },
    {
      stepNumber: 4,
      description:
        "Use a marker to draw different faces on the balloons representing emotions (happy, sad, angry, and scared). ",
    },
    {
      stepNumber: 5,
      description:
        "As you draw the faces ask your child if they can guess the emotions you are drawing.",
    },
    {
      stepNumber: 6,
      description:
        "After your stress balls are complete, teach the child that when they are feeling a certain emotion, they can squeeze the corresponding stress ball. ",
    },
    {
      stepNumber: 7,
      description:
        "When your child does squeeze a certain stress ball, ask them what is making them feel that certain emotion.",
      subSteps: [
        {
          description:
            "It is important to let them feel the emotion they are experiencing but also ensuring that the child and others around them are safe.",
        },
        {
          description:
            "Let them explain themselves, and if there is a negative behavior they performed, offer alternate actions they can choose in the future.",
        },
      ],
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Create Your Own Stress Ball"
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
