import React from "react";
import ActivityPage from "@/components/Template/ActivityPage";
import image from "/public/images/dashboard/adventure-bay/Ellipse 169.png";
import mascot from "/public/images/dashboard/StarlightMeadows/NightMascot.svg";
import arrow from "/public/images/dashboard/adventure-bay/icon.png";

export default function ActivityPage1({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <ActivityPage
      stepNumber={1}
      onNext={onNext}
      onBack={onBack}
      title="Creating a nighttime routine"
      description="Grab your materials and click continue to get started. "
      imageUrl={mascot}
      buttonImageUrl={arrow}
      backgroundColor="#FEEE61"
      color="#8BD5FF"
    />
  );
}
