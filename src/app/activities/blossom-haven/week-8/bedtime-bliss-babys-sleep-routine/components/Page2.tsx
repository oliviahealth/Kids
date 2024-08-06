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
      description: "To get your child ready for bed, give them a warm bath about an hour to hour and a half before bedtime. A warm bath will help sooth your child's body and gets their body ready for bed."
    },
    {
      stepNumber: 2,
      description: "Bedtime for your child may vary by how many months old they are, but to begin this routine you should feed your child before bed. Give your child a bottle around 15-30 minutes before they are to fall asleep."
    },
    {
      stepNumber: 3,
      description: "Read a story or sing a lullaby to your child. When doing these stories or lullabies, you should be speaking in a warm, comforting voice that will help them relax and try to sleep."
    },
    {
      stepNumber: 4,
      description: "Most importantly, keep this routine as consistent as possible. Make changes as necessary that help your child sleep better, but your bedtime routine needs to be in the same place, around the same time, and regularly done."
    },
    {
      stepNumber: 5,
      description: "Bonus points if you have a white noise machine for your child. These sometimes help your child fall asleep, and stay asleep, after doing the listed steps."
    }
  ];

  return (
    <>
      <Header logoSrc={headerIcon} title="Bedtime Bliss: Baby's Sleep Routine" subtitle="Safety - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
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
