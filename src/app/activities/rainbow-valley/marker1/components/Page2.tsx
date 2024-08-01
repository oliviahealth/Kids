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
      description: "Choose a music platform you will create your playlist on.",
    },
    {
      stepNumber: 2,
      description:
        "Venture through the platform and add songs to your playlist.",
    },
    {
      stepNumber: 3,
      description:
        "When your day begins, choose a time that you plan to listen to your playlist.",
    },
    {
      stepNumber: 4,
      description:
        "Put it on for at least 10-15 minutes and enjoy grooving along to the beat.",
    },
    {
      stepNumber: 5,
      description:
        "You can even include your children by having a dance party with them.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Create Your Own Music Playlist"
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
