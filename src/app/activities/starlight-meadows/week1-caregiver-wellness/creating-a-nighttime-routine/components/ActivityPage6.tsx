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
      stepNumber={6}
      onNext={onNext}
      onBack={onBack}
      title="You are finished!"
      description="Remember to try to stick to this routine and avoid caffeine and distractions close to bedtime. "
      imageUrl={mascot}
      buttonImageUrl={arrow}
      backgroundColor="#FEEE61"
      color="#8BD5FF"
    />
  );
}
