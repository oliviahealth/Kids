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
        "To create the Self Care Wheel you can either print out the blank template we provided or create your own by getting a blank sheet of paper.",
    },
    {
      stepNumber: 2,
      description:
        "If you choose to print out the template, you can keep the wheel on the page or cut along the dashed line for the wheel itself.",
    },
    {
      stepNumber: 3,
      description:
        "If you choose to make your own, you will draw a circle and 4 lines inside of it (1 horizontal, 1 vertical, and 2 diagonal) to create 8 sections.",
    },
    {
      stepNumber: 4,
      description:
        "Then you will write your activities inside each section and your self care wheel is complete (If you would like some activity ideas we have also provided an example of a completed self care wheel).",
    },
    {
      stepNumber: 5,
      description:
        "To determine the activity you will perform, put the tip of a pencil in the middle of a paperclip and place them both in the center of the wheel (there is an image on this website that shows you what it should look like to eliminate any confusion).",
    },
    {
      stepNumber: 6,
      description:
        "Then you will spin the paperclip around the pencil and whatever space it lands on in the wheel is the activity you will perform.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Self-Care Wheel"
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
