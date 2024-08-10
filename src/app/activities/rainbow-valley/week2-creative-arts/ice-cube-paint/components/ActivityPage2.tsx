import ActivityPage, {
  ActivityPageProps,
} from "@/components/Template/ActivityPage";
import activityImage from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrowImage from "@/public/images/dashboard/adventure-bay/icon.png";

const ActivityPage2: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activityPageProps: ActivityPageProps = {
    stepNumber: 2,
    onNext: onNext,
    onBack: onBack,
    title: "Heading",
    description:
      "Then you will place a drop of the food coloring into the water to prevent a mess and can let your child mix the coloring with the water. You can color each cube differently or choose to use one color for the entire tray.",
    imageUrl: activityImage,
    buttonImageUrl: arrowImage,
    color: "#FF5B5B",
    backgroundColor: "#FF9595",
  };
  return <ActivityPage {...activityPageProps} />;
};

export default ActivityPage2;
