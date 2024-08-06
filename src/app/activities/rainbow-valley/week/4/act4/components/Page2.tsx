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
        "Start this activity by cutting out a train engine. You can use our template to print out or you can draw a train engine on paper and cut it out. ",
    },
    {
      stepNumber: 2,
      description:
        "Next, write your toddlers name on different colors of paper. You may put 1 – 2 letters on each paper depending on the length of your child’s name. Each piece of paper with letters on them will serve as the “train cars”. ",
    },
    {
      stepNumber: 3,
      description:
        "Tape the engine and cars onto the wall. If you don’t want to put anything on the wall, you can lay out the engine and cars along a table or the floor. ",
    },
    {
      stepNumber: 4,
      description:
        "Next, use post-it notes to write out each letter of your child’s name. Each letter should have its own post-it note. ",
    },

    {
      stepNumber: 5,
      description:
        "Hide each of the post-it notes around the house in places where your toddler can find them.",
    },

    {
      stepNumber: 6,
      description:
        "Have your child bring each post-it notes back and match it with the letter on the train car. ",
    },

    {
      stepNumber: 7,
      description:
        "Once your child has successfully stuck all the post-it notes onto the train you can hide the letters again for endless play! ",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Name Train"
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
