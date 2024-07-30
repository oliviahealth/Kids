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
        "You can print out our BINGO card template or transfer the activities over to a paper of your own.",
    },
    {
      stepNumber: 2,
      description:
        " In order to receive a BINGO you will perform 5 of the 25 activities in a row. This can be vertically, horizontally, or diagonally. ",
    },
    {
      stepNumber: 3,
      description:
        "Each time you complete an activity you will mark it off on the BINGO card which will bring you closer to winning a BINGO.",
    },
    {
      stepNumber: 4,
      description:
        " If you would like an extra challenge, you are more than welcome to complete all of the activities for an extra badge at the end of this activity. ",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Self-Care Bingo"
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
