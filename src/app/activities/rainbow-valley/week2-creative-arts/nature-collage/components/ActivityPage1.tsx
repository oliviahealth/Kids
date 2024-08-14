import ActivityPage, {
  ActivityPageProps,
} from "@/components/Template/ActivityPage";
import activityImage from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrowImage from "@/public/images/dashboard/adventure-bay/icon.png";

const ActivityPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activityPageProps: ActivityPageProps = {
    stepNumber: 1,
    onNext: onNext,
    onBack: onBack,
    title: "Heading",
    description:
      "Take your child to the park or stay in the comfort of your own backyard.",
    imageUrl: activityImage,
    buttonImageUrl: arrowImage,
    color: "#FF5B5B",
    backgroundColor: "#FF9595",
  };
  return <ActivityPage {...activityPageProps} />;
};

export default ActivityPage1;
