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
      stepNumber={6}
      onNext={onNext}
      onBack={onBack}
      title="Grab a bite"
      description="Maybe you brought a drink or a snack with you to taste, or there is either at home. Take a second to reflect on the sensation of taste.  "
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#61C5FE"
      color="#33A6E6"
    />
  );
}
