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
        "To complete this activity you will start with an ice tray and fill it with water.",
    },
    {
      stepNumber: 2,
      description:
        "Then you will place a drop of the food coloring into the water to prevent a mess and can let your child mix the coloring with the water. You can color each cube differently or choose to use one color for the entire tray.",
    },
    {
      stepNumber: 3,
      description:
        "Place either popsicle sticks, spoons, or any household item that can serve as the handle for your new paintbrus into each ice cube spot.",
    },
    {
      stepNumber: 4,
      description:
        "Move your tray into the freezer until your ice cubes have formed.",
    },
    {
      stepNumber: 5,
      description:
        "After the ice cubes have been frozen you can take them out of the trays and begin painting on paper.",
    },
    {
      stepNumber: 6,
      description:
        "For an easier clean up your child can take this outside however this activity can be performed wherever you would like them to do it.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Ice Cube Paint"
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
