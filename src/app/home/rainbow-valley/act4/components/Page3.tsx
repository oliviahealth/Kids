import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activitySteps = [
    {
      stepNumber: 9,
      description:
        "If it is safe and you would like to, feel free to roll the windows down and listen to the world around you. Focus on the sounds of birds chirping or the cars whizzing by. These noises can bring peace, help you stay calm, and might also entertain your child. ",
    },
    {
      stepNumber: 10,
      description:
        "If you do not like the sound of cars, try putting the radio on and focusing on singing along to the music that makes you smile. ",
    },
    {
      stepNumber: 11,
      description:
        " Finally, you will reach your destination and can put your car in park. ",
    },
    {
      stepNumber: 12,
      description:
        " Before getting out think back to what you saw, heard, smelt, felt, and possibly tasted and how you were able to be safe. ",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Mindful Driving"
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

export default Page3;
