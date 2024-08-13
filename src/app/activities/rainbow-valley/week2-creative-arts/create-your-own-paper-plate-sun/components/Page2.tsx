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
        "Help your 2 year old coat the plate with yellow paint if it is not already that color. ",
    },
    {
      stepNumber: 2,
      description:
        "Then you will use the scissors to cut the straws/pipe cleaners down to size for your child, as they will be soon attached to the back of the plate. ",
    },
    {
      stepNumber: 3,
      description:
        "Before continuing to the next step you can ask the child a few questions about the sun. You can ask them if they know what colors you are using, or what the shape of the paper plate is. Additionally you can teach them about the temperature of the sun and how it is important to not stare into it. We have created a list of questions that can be asked if you would like to use it.",
    },
    {
      stepNumber: 4,
      description:
        "The next step will consist of your 2 year old helping you place glue dots on the back of the plate in a circle for the straws/pipe cleaners to sit. ",
    },
    {
      stepNumber: 5,
      description:
        "Then you will place the straws/pipe cleaners on the glue dots on the back of the plate.",
    },
    {
      stepNumber: 6,
      description:
        "When you turn the plate back over, you will have your completed paper plate sun. There is an instruction sheet that provides pictures for each step to help make the process easier.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Create Your Own Paper Plate Sun"
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
