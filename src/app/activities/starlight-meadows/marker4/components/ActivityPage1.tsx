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
      stepNumber={1}
      onNext={onNext}
      onBack={onBack}
      title="Go outside and begin your walk"
      description="This can be in your neighborhood, a park, or anywhere you would like to go on a walk.  "
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#61C5FE"
      color="#33A6E6"
    />
  );
}
