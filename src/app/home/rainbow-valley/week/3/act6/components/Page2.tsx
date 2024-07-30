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
      description:
        "Print out the facial expression template and cut along the dashed lines.",
    },
    {
      stepNumber: 2,
      description:
        "If you would like to draw your own expressions you can do this on your own paper as well.",
    },
    {
      stepNumber: 3,
      description:
        "Spread the pieces of paper out so the same expressions are not near each other.",
    },
    {
      stepNumber: 4,
      description:
        "Encourage your child to find two of the same face within the pile sitting in front of them.",
    },
    {
      stepNumber: 5,
      description:
        "When they have a match read to them the name of the expression found on the bottom of one of the cards.",
    },
    {
      stepNumber: 6,
      description:
        "Ask your child to make that expression so they can have more practice of what it looks like.",
    },
    {
      stepNumber: 7,
      description:
        "Continue matching up the facial expressions until all of them have been matched.",
    },
    {
      stepNumber: 8,
      description:
        "Spread out the cards again and repeat as many times as you would like.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Match the Faces"
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
