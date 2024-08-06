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
      description: "Choose an area of the living space that has at least 10 objects that can be labeled.",
    },
    {
      stepNumber: 2,
      description:
        "Find an object your child does not know the name of and say it out loud.",
    },
    {
      stepNumber: 3,
      description:
        "Have the child repeat that name as you write it on a sticky note.",
    },
    {
      stepNumber: 4,
      description:
        "Place the labeled sticky note on that object.",
    },
    {
      stepNumber: 5,
      description:
        "Find another object your child does not know and repeat the steps above.",
    },
    {
      stepNumber: 6,
      description:
        "After labeling at least 10 objects, go back through them having your child say the name of them.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Just Add a Sticky Note"
        subtitle="Language, Literacy, & Speech - Rainbow Valley"
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
