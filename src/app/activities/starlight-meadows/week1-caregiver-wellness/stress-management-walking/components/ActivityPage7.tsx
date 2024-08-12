import React from "react";
import ActivityPage from "@/components/Template/ActivityPage";
import image from "/public/images/dashboard/StarlightMeadows/placeholder.png";
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
      stepNumber={7}
      onNext={onNext}
      onBack={onBack}
      title="Repeat"
      description="You may repeat this activities as many times as you wish, or just do it one time.  "
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#61C5FE"
      color="#33A6E6"
    />
  );
}
