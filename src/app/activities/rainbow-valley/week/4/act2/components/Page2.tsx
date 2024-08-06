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
        "Start by printing out the letter templates or creating your own letter templates for your children to trace.",
    },
    {
      stepNumber: 2,
      description:
        "Grab a writing utensil if you would like and show your child how to follow the dotted line to complete both the uppercase and lowercase versions of the letters.",
    },
    {
      stepNumber: 3,
      description:
        "As they are tracing the letter, say the name of the letter and have them repeat after you.",
    },
    {
      stepNumber: 4,
      description:
        "Then they can move on to tracing the letters within the dotted lines.",
    },

    {
      stepNumber: 5,
      description:
        "Repeat with all of the letters of the alphabet.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Trace That Letter"
        subtitle="Language, Literacy, & Speech - Rainbow Valley"
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
