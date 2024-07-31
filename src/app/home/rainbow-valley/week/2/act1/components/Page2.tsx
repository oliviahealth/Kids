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
        "You will simply lay out a sheet of foil  on any hard surface either inside or outside of your living space.",
    },
    {
      stepNumber: 2,
      description:
        "Then you will get out some paint and and let the kids paint on top of it. ",
    },
    {
      stepNumber: 3,
      description:
        "They can even crumple up a section of it and create different characters for them to paint.",
    },
    {
      stepNumber: 4,
      description:
        "You can also paint with the child and have them copy certain shapes that you paint.",
    },
    {
      stepNumber: 5,
      description:
        "At the end of all their fun you can pick up the foil, fold it, and throw it away for an easy clean up.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Foil Painting"
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
