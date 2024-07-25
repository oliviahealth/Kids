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
      description: "Begin by preheating your oven to 250 degrees Fahrenheit",
    },
    {
      stepNumber: 2,
      description: "Mix 2 cup of flour with 1/2 cup of salt. ",
    },
    {
      stepNumber: 3,
      description: "Add 1/2 cup of water and mix.",
    },
    {
      stepNumber: 4,
      description: "Knead the dough until its soft.",
    },
    {
      stepNumber: 5,
      description:
        "Use a rolling pin (or a reuseable water bottle!) to roll the dough out to 1/4-inch thickness.",
    },
    {
      stepNumber: 6,
      description:
        "Use your favorite cookie cutters to make different shapes with your dough. You can also try allowing your toddler to make a handprint in the dough!",
    },
    {
      stepNumber: 7,
      description: "Bake your creation in the oven for 2-3 hours or until dry.",
    },
    {
      stepNumber: 8,
      description: "Allow to cool completely and then decorate with paint.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Salt Dough"
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
