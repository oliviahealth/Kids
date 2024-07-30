import React from "react";
import ActivityPage from "@/components/Template/ActivityPage";

import mascot from "/public/images/dashboard/StarlightMeadows/mascotwithclock.svg";
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
      title="Remove distractions"
      description="Put up cell phones and toys. Set a time to clean everything up."
      imageUrl={mascot}
      buttonImageUrl={arrow}
      backgroundColor="#FEEE61"
      color="#8BD5FF"
    />
  );
}
