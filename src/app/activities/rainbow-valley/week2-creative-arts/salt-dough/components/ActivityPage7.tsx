import ActivityPage, {
  ActivityPageProps,
} from "@/components/Template/ActivityPage";
import activityImage from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrowImage from "@/public/images/dashboard/adventure-bay/icon.png";

const ActivityPage7: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activityPageProps: ActivityPageProps = {
    stepNumber: 7,
    onNext: onNext,
    onBack: onBack,
    title: "Heading",
    description: "Bake your creation in the oven for 2-3 hours or until dry.",
    imageUrl: activityImage,
    buttonImageUrl: arrowImage,
    color: "#FF5B5B",
    backgroundColor: "#FF9595",
  };
  return <ActivityPage {...activityPageProps} />;
};

export default ActivityPage7;
