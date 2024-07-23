"use client";
import React, { useEffect } from "react";
import star from "../../../../../../public/images/dashboard/adventure-bay/Star 27.svg";
import arrow from "../../../../../../public/images/dashboard/adventure-bay/icon.png";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import ActivityStar from "@/components/Template/ActivityStar";



export default function ActivityPageStar({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <ActivityStar
      stepNumber={5}
      onNext={onNext}
      onBack={onBack}
      title="Well done!"
      description="Repeat this exercise whenever you need to. Here is your star! "
      imageUrl={star}
      buttonImageUrl={arrow}
      backgroundColor="#61C5FE"
      color="#33A6E6"
    />
  );
}
