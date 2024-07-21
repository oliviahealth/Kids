import React from "react";
import ActivityPage from "@/components/Template/ActivityPageDescription";

import mascot from "../../../../../public/images/dashboard/StarlightMeadows/NightMascot.svg";
import image from "../../../../../public/images/dashboard/StarlightMeadows/placeholder.png";

import arrow from "../../../../../public/images/dashboard/adventure-bay/icon.png";

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
      title="Neck Rotations"
      description="Release built up tension by increasing range of motion."
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#FF8C38"
      color="#FF7613"
      additionalText="Sit or stand up straight, relax your shoulders, and slowly move your head in a circle, first to the right and then to the left, while breathing deeply. Repeat this 5-10 times to help your neck feel better and more flexible."
    />
  );
}
