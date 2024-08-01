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
      description: "This schedule begins on Sunday and follows the days of the week with different chores split up based on sections of the living space. Examples of the sections are bedrooms, laundry, bathrooms, etc. ",
    },
    {
      stepNumber: 2,
      description:
        "You can choose to print out our pre-made schedule or the blank schedule if you would like to create your own routine. ",
    },
    {
      stepNumber: 3,
      description:
        "If you use the pre-made schedule you will follow along each day completing the tasks and marking them off on the list. ",
    },
    {
      stepNumber: 4,
      description:
        "Creating your own includes determining the tasks you want to focus on each day and writing them onto your schedule. Then you will follow that plan throughout the next 7 days. ",
    },
    {
      stepNumber: 5,
      description:
        "By the end of the week you will have cleaned your whole house while most importantly ensuring your children are well cared for.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Cleaning Schedule"
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
