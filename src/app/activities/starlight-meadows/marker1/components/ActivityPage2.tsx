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
      stepNumber={2}
      onNext={onNext}
      onBack={onBack}
      title="Set a schedule"
      description="Pick a time to go to bed and try to sleep at the same time everyday. "
      imageUrl={mascot}
      buttonImageUrl={arrow}
      backgroundColor="#FEEE61"
      color="#8BD5FF"
    />
  );
}
