import React from "react";
import ActivityPage from "@/components/Template/ActivityPage";

import mascot from "../../../../../public/images/dashboard/StarlightMeadows/mascotwithclock.svg";
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
      stepNumber={5}
      onNext={onNext}
      onBack={onBack}
      title="Setting traditions"
      description="Set time for any other important nighttime activities your family is used to."
      imageUrl={mascot}
      buttonImageUrl={arrow}
      backgroundColor="#FEEE61"
      color="#8BD5FF"
    />
  );
}
