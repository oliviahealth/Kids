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
      stepNumber={2}
      onNext={onNext}
      onBack={onBack}
      title="Toe Touch"
      description="Use a familiar stretch to achieve unfamiliar flexibility. "
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#FF8C38"
      color="#FF7613"
      additionalText="Stand with your feet shoulder-width apart, slowly bend at your hips to reach toward your toes, and hold for 10-20 seconds while breathing deeply. Repeat this stretch 5-10 times to improve your flexibility."
    />
  );
}
