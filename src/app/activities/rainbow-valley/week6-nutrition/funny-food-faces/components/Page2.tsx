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
        description: "Find fruits and vegetables in your kitchen.",
    },
    {
        stepNumber: 2,
        description: "Cut the fruits and vegetables into facial features for your toddlers to use, you may need to get creative! For example, an apple or cantaloupe slice could be used for a smile.",
    },
    {
        stepNumber: 3,
        description: "Give your toddler the cut-up fruits and vegetables and encourage them to make the silliest face they can. If your toddler does not want to make a face, allow them to make a different design!",
    },
    {
        stepNumber: 4,
        description: "After they have made a face, encourage them to try one piece of fruit or vegetable. Remember to not force your child to eat a certain food. If your toddler refuses, try this activity again in a week!",
    },
];

  return (
    <>
      <Header
        logoSrc={icon}
        title="Funny Food Faces"
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
