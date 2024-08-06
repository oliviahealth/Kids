import Header from "@/components/Template/Header";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const Page2: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activitySteps = [
    {
      stepNumber: 1,
      description: "Grab yourself a blank journal or notebook that you will use to document your child's growth. You are going to create sections of growth based on your child's age like the following: 0-2 months, 2-4 months, 4-6 months, 6-9 months, 9-12 months."
    },
    {
      stepNumber: 2,
      description: "For each monthly age section, create some space to take notes in the following milestone groups of your child's growth: social/emotional, language/communication, movement/physical development, and cognitive growth. Keep some space for general notes and observations as well."
    },
    {
      stepNumber: 3,
      description: "Take pictures and put them in your diary to visualize child's growth, and create some happy memories to look back onto."
    },
    {
      stepNumber: 4,
      description: "As your child is growing, take notes within each of the sections to document your child's milestone achievements. Examples of this include what and how much did your child eat, is child trying to communicate, does child recognize people, and what funny thing did they do today. The notes can be endless but should help you understand your child's growth."
    },
    {
      stepNumber: 5,
      description: "Bring this diary to doctor's visits as necessary. This will help you ask questions if you have any concerns on where your child's growth is at."
    },
    {
      stepNumber: 6,
      description: "Update as necessary, this diary is yours and should be a great way to reflect on how your child is growing and make you a well-informed caregiver."
    }
  ];

  return (
    <>
      <Header logoSrc={headerIcon} title="Baby's Development Diary" subtitle="Safety - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />

      <Activity steps={activitySteps} stepNumberColor="#FFF7E3" />
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
