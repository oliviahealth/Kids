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
        "To start, begin by getting inside the vehicle and taking a deep breath. ",
    },
    {
      stepNumber: 2,
      description:
        "Think about what you are hearing as you sit in the car and what the seatbelt feels like when you put it on.",
    },
    {
      stepNumber: 3,
      description:
        "Check your mirrors to make sure they are in the proper positions. What do you see when you are looking through each one of them?",
    },
    {
      stepNumber: 4,
      description:
        "As you start the car and begin to change the gear shift, look at your surroundings and ensure that nothing is near the car. ",
    },
    {
      stepNumber: 5,
      description:
        "Once on the road you can continue taking deep breaths while you look at the cars ahead of you. Relax your shoulders and briefly look down at the screen on your car to see how fast you are going. Are you within the limit?",
    },
    {
      stepNumber: 6,
      description:
        "If you start to feel impatient or in a hurry be sure to take more breaths and remind yourself that you will get to your destination. If you are reckless and try to weave in between other vehicles that might cause an accident and can prevent you from getting where you need to go. ",
    },
    {
      stepNumber: 7,
      description:
        "If you have a child in the backseat who is fussy try to put yourself in their shoes and think why they might be overwhelmed. Are they tired? Is it hot in the car? Did they drop their toy on the floor? Whatever the situation may be offer compassion and encourage them to take deep breaths as well. ",
    },
    {
      stepNumber: 8,
      description:
        "Now focus on your hand placement on the steering wheel and how your hands holding the wheel are keeping you inside the lines. ",
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

export default Page2;
