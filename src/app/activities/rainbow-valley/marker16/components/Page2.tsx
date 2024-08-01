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
        "Grab three toys for each of the people who will be participating in the circle.",
    },
    {
      stepNumber: 2,
      description:
        "Sit in a circle (or right across from each other if there are only two people) with the toys sitting in front of you.",
    },
    {
      stepNumber: 3,
      description: `The caregiver will go first as they say "I would like to share my toy with (insert name)". Then they will pass their toy to that person.`,
    },
    {
      stepNumber: 4,
      description:
        "Next encourage the child to do the same and pass their toy to someone.",
    },
    {
      stepNumber: 5,
      description:
        "Continue passing the toys until all three of your original toys are no longer sitting in front of you.",
    },
    {
      stepNumber: 6,
      description:
        "If the child had a hard time during this activity, talk with them about why they did not want to share.",
      subSteps: [
        {
          description:
            "Explain the importance of sharing and how it gives everyone a chance to play with that toy, and them a chance to find a new one.",
        },
      ],
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="The Sharing Circle"
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
