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
        description: "Print out the food group template or create your own food group template to use.",
    },
    {
        stepNumber: 2,
        description: "Cut out the foods/drinks and mix them into a pile in front of you and your child.",
    },
    {
        stepNumber: 3,
        description: "Place the titles of the food groups in separate places in front of you both.",
    },
    {
        stepNumber: 4,
        description: "As you place each title down, read them out to your child.",
    },
    {
        stepNumber: 5,
        description: "Work together with your child to place a food/drink into their correct category. Your child may not know exactly what food group the foods/drinks fit into, so that is why you will work together to show them.",
    },
    {
        stepNumber: 6,
        description: "Talk with your child about why that food/drink is going into that category.",
    },
    {
        stepNumber: 7,
        description: "Repeat until all the foods/drinks are placed in their correct categories.",
    },
    {
        stepNumber: 8,
        description: "Once finished, go through each food group and read aloud with your child the foods/drinks placed in that group.",
    },
];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Sort the Food Groups"
        subtitle="Nutrition - Rainbow Valley"
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
