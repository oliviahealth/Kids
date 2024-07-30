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
        "Start by grabbing toilet paper rolls and cutting them down to your desired size.",
    },
    {
      stepNumber: 2,
      description:
        "Put some paint out onto a surface that is accessible for the children.",
    },
    {
      stepNumber: 3,
      description:
        "Show the children how to dip the end of their toilet paper roll into the plate and place it on the paper.",
    },
    {
      stepNumber: 4,
      description:
        "Allow them to try and teach them about how the shape that is created is a circle.",
    },
    {
      stepNumber: 5,
      description:
        "Feel free to hang them up on the fridge. This will show your child that you appreciate the work they completed and that they did a great job. ",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Toilet Paper Roll Stamps"
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
