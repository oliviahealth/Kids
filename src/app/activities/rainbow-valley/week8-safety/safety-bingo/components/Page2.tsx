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
      description: "Print out the Safety BINGO template or grab paper and a writing utensil to create your own.",
    },
    {
      stepNumber: 2,
      description: "Talk with your child and choose the first item you want to look for.",
    },
    {
      stepNumber: 3,
      description: "Find it in the living space.",
    },
    {
      stepNumber: 4,
      description: "Discuss what this item does and why it is important for safety.",
    },
    {
      stepNumber: 5,
      description: "Mark it off on the bingo card.",
    },
    {
      stepNumber: 6,
      description: "Continue with the next item on the bingo card.",
    },
    {
      stepNumber: 7,
      description: "After earning a bingo (vertically, horizontally, or diagonally), you can finish or keep going to mark off all the spaces on the card.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={icon}
        title="Safety BINGO"
        subtitle="Safety - Rainbow Valley"
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
