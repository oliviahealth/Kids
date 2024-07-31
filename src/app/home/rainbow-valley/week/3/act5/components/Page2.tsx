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
        "Print out the template we have created or grab a piece of paper and a writing utensil if you would like to write it down yourself.",
    },
    {
      stepNumber: 2,
      description:
        "If you choose to use the blank template, begin discussing with your child the different emotions and how they would like to respond to the different feelings.",
      subSteps: [
        {
          description:
            " Once the template is complete you can begin the activity.",
        },
      ],
    },
    {
      stepNumber: 3,
      description:
        "Start by having your child identify and circle the emotion they are feeling.",
    },
    {
      stepNumber: 4,
      description:
        "Talk to them about why they are feeling that way before moving on to the next step.",
    },
    {
      stepNumber: 5,
      description:
        "Then go on to the next page and have your child choose the activity they would like to participate in.",
    },
    {
      stepNumber: 6,
      description:
        "After they have completed the activity talk with them about how they are feeling",
    },
    {
      stepNumber: 7,
      description:
        "If that activity helped them feel better you can keep it in your mind for the next time they experience that emotion.",
      subSteps: [
        {
          description:
            "If not, continue working through the activities to find one that helps.",
        },
      ],
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Creating Coping Skills"
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
