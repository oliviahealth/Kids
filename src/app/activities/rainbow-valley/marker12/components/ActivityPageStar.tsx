import ActivityStar, {
  ActivityStarProps,
} from "@/components/Template/ActivityStar";
import star from "@/public/images/dashboard/rainbowValley/shared/star.svg";
import arrowImage from "@/public/images/dashboard/adventure-bay/icon.png";

const ActivityPageStar: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activityPageProps: ActivityStarProps = {
    onNext: onNext,
    onBack: onBack,
    title: "Well done!",
    description: "Here is a star.",
    imageUrl: star,
    buttonImageUrl: arrowImage,
    color: "#FF5B5B",
    backgroundColor: "#FF9595",
  };
  return <ActivityStar {...activityPageProps} />;
};

export default ActivityPageStar;
