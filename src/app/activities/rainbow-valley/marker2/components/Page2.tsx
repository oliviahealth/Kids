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
        "This task can be completed by using the journal templates we have created as inspiration for what to write about. You can choose to print the templates out and write on them or transfer the information into a journal of your own. ",
    },
    {
      stepNumber: 2,
      description:
        "You will fill out the information for each section and reflect on how you answered each of the questions.",
    },
    {
      stepNumber: 3,
      description:
        "If you would like to incorporate the children into this activity, you can follow the templates and have the kid(s) think of ideas for how they would answer each section. You can either write down their answers or just listen to what they are saying.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Journaling"
        subtitle="Caregiver Wellness - Rainbow Valley"
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
