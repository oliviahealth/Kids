import React from "react";
import ActivityPage from "@/components/Template/ActivityPage";
import image from "../../../../../public/images/dashboard/StarlightMeadows/placeholder.png";
import mascot from "../../../../../public/images/dashboard/StarlightMeadows/NightMascot.svg";
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
      stepNumber={4}
      onNext={onNext}
      onBack={onBack}
      title="Listen"
      description="Listen for three things you can hear. Your footsteps, birds chirping, people talking, gravel crunching, etc."
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#61C5FE"
      color="#33A6E6"
    />
  );
}
