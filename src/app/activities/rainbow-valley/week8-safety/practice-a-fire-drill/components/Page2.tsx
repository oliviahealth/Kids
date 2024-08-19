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
      description: "Talk with your child to create different routes to leave the living space in the event of a fire.",
    },
    {
      stepNumber: 2,
      description: "Draw an example of these routes.",
    },
    {
      stepNumber: 3,
      description: "Hang the picture in an area that is accessible to the child.",
    },
    {
      stepNumber: 4,
      description: "Discuss with your child where you will meet outside the living space (for example - by the mailbox).",
    },
    {
      stepNumber: 5,
      description: "Teach your child different fire safety facts.\n- Crawl on the ground to leave the living space.\n- Roll around if your clothes are on fire.",
    },
    {
      stepNumber: 6,
      description: "Practice a fire drill by making a loud noise and having the child exit using the planned route.",
    },
    {
      stepNumber: 7,
      description: "Discuss with the child how the practice fire drill went and how you can improve in the future.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={icon}
        title="Practice a Fire Drill"
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
