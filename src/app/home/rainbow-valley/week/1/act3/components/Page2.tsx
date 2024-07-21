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
        "Take some distraction free time to figure out what inspires you.",
    },
    {
      stepNumber: 2,
      description:
        "Decide where you want to make your vision board? Do you want to use paper, posterboard, or PowerPoint?",
    },
    {
      stepNumber: 3,
      description:
        "Find pictures for your vision board. This may be online pictures, magazine clippings, personal photos, or drawings",
    },
    {
      stepNumber: 4,
      description: "Create a collage with your pictures.",
    },
    {
      stepNumber: 5,
      description:
        "Hang your vision board in a place where you can see it every day. For example, next to the bedroom mirror.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Vision Board for Self-Care"
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
