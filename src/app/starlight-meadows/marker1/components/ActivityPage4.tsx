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
      stepNumber={3}
      onNext={onNext}
      onBack={onBack}
      title="Wash up and wind down"
      description="Try to bathe children and yourself at the same time everyday. To wind down, try to read a book."
      imageUrl={mascot}
      buttonImageUrl={arrow}
      backgroundColor="#FEEE61"
      color="#8BD5FF"
    />
  );
}
