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
      stepNumber={3}
      onNext={onNext}
      onBack={onBack}
      title="Look inward"
      description="Think about four things you can feel. This could be wind blowing on your face, how your feet feel in your shoes, your child’s hand or their stroller (if they came along for this walk), etc."
      imageUrl={image}
      buttonImageUrl={arrow}
      backgroundColor="#61C5FE"
      color="#33A6E6"
    />
  );
}
