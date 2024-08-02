import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import Header from "@/components/Template/Header";
import Activity, { ActivityStep } from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";

const Page2: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activitySteps: ActivityStep[] = [
    {
      stepNumber: 1,
      description:
        "Walk around the living space with your child and pick out 10 household items.",
      subSteps: [
        {
          description:
            "The goal is for them to be able to be put the items into two groups based on color so make sure the items allow for that.",
        },
      ],
    },
    {
      stepNumber: 2,
      description:
        "Next put all of the items into a pile in front of you and your child (or both of the children if there are multiple children). ",
    },
    {
      stepNumber: 3,
      description:
        "You will explain that two piles should be made based on the color of the item.",
    },
    {
      stepNumber: 4,
      description:
        "Watch as they start to create the piles and encourgage discussion between the people completing the task, whether it is you and the child or multiple children.",
      subSteps: [
        {
          description:
            "As the caregiver it is important to start conversations between the children or between you and the child as their mindset will be to complete the activity by themselves.",
        },
        {
          description:
            " It may not be perfect cooperation but introducing this to them will get them thinking about how to interact with others.",
        },
      ],
    },
    {
      stepNumber: 5,
      description:
        "After the piles are done, go through each of the items and confirm with the child what color they are.",
    },
    {
      stepNumber: 6,
      description:
        "If you would like to, put those items back where they belong and find 10 new items to play again with! ",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Sorting With Friends"
        subtitle="Emotional, Behavioral, & Social - Rainbow Valley"
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
