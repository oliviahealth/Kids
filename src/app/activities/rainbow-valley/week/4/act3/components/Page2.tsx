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
        "First begin with gathering a visual reference of just a few animals for your toddler to learn. Begin with two basic animals (for example a cow and a pig). ",
    },
    {
      stepNumber: 2,
      description:
        "Point at each animal and repeat the name of each. You can help facilitate speech by saying “This is a cow. Now you try to say cow”. Speech at this age may not be perfect and that’s okay! ",
    },
    {
      stepNumber: 3,
      description:
        "After some repetition, try pointing to that animal without telling them what it is. For example, point to the cow and say, “What animal is this?”.  ",
    },
    {
      stepNumber: 4,
      description:
        "Once your toddler can recognize the animal’s name, start teaching them the sound of that animal. “Yes, that is a cow! Cows say “Moo”. ",
    },

    {
      stepNumber: 5,
      description:
        "As your child begins mastering the names and sounds of those animals, add more!",
    },

    {
      stepNumber: 6,
      description:
        "Remember, this is a learning process! This activity is meant to take some time as your toddler is adding different words and sounds to their vocabulary. Make this process fun by acting out the different animals and being silly with it!",
    },
  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="The Animals on the Farm"
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
