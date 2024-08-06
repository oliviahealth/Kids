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
        "Mix together all the ingredients in a saucepan.",
    },
    {
      stepNumber: 2,
      description:
        "Cook on low to medium heat and stir until the mixture is thick. ",
    },
    {
      stepNumber: 3,
      description:
        "Remove the dough and place on a plate to cool. For storage, keep in a Tupperware container or Ziplock bag",
    },
    {
      stepNumber: 4,
      description:
        "With the playdough, work with your toddler to point out and name all the different colors.",
    },

    {
      stepNumber: 5,
      description:
        "With cookie cutters, make different shapes with your toddler. Explore and name the different shapes of each cookie cutter.",
    },

    {
      stepNumber: 6,
      description:
        "Try making different “food” with your toddler. This can easily become a game of restaurant! Ask your toddler to make you different “foods” such as a pizza, hamburger, or a cake. ",
    },

    {
      stepNumber: 8,
      description:
        "You can also try making different animals and encourage your child to mimic the sounds of each. For example, make the playdough into a snake and have your child practice saying \“SSsssss\”.",
    },

  ];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Playdough Fun!"
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
