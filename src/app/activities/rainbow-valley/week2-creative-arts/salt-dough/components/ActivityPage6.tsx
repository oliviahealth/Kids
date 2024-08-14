import ActivityPage, {
  ActivityPageProps,
} from "@/components/Template/ActivityPage";
import activityImage from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrowImage from "@/public/images/dashboard/adventure-bay/icon.png";

const ActivityPage6: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activityPageProps: ActivityPageProps = {
    stepNumber: 6,
    onNext: onNext,
    onBack: onBack,
    title: "Heading",
    description:
      "Use your favorite cookie cutters to make different shapes with your dough. You can also try allowing your toddler to make a handprint in the dough!",
    imageUrl: activityImage,
    buttonImageUrl: arrowImage,
    color: "#FF5B5B",
    backgroundColor: "#FF9595",
  };
  return <ActivityPage {...activityPageProps} />;
};

export default ActivityPage6;
