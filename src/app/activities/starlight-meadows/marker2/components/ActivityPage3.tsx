import React from "react";
import ActivityPage from "@/components/Template/ActivityPageDescription";

import mascot from "/public/images/dashboard/StarlightMeadows/NightMascot.svg";
import image from "/public/images/dashboard/StarlightMeadows/placeholder.png";

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
      stepNumber={3}
      onNext={onNext}
      onBack={onBack}
      title="Child’s Pose"
      description="Alleviate hip and back muscles with a lesser known stretch. "
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#FF8C38"
      color="#FF7613"
      additionalText="Kneel on the floor, sit back on your heels, and stretch your arms forward, lowering your chest to the ground while breathing deeply. Hold for 20-30 seconds and repeat 3-5 times to improve flexibility."
    />
  );
}
