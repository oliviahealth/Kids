import ActivityPage, {
  ActivityPageProps,
} from "@/components/Template/ActivityPage";
import activityImage from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrowImage from "@/public/images/dashboard/adventure-bay/icon.png";

const ActivityPage3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const activityPageProps: ActivityPageProps = {
    stepNumber: 3,
    onNext: onNext,
    onBack: onBack,
    title: "Heading",
    description:
      "Before continuing to the next step you can ask the child a few questions about the sun. You can ask them if they know what colors you are using, or what the shape of the paper plate is. Additionally you can teach them about the temperature of the sun and how it is important to not stare into it. We have created a list of questions that can be asked if you would like to use it",
    imageUrl: activityImage,
    buttonImageUrl: arrowImage,
    color: "#FF5B5B",
    backgroundColor: "#FF9595",
  };
  return <ActivityPage {...activityPageProps} />;
};

export default ActivityPage3;
