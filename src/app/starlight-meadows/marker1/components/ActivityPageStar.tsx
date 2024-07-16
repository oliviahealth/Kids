"use client";
import React, { useEffect } from "react";
import star from "../../../../../public/images/dashboard/adventure-bay/Star 27.svg";
import arrow from "../../../../../public/images/dashboard/adventure-bay/icon.png";
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
      stepNumber={6}
      onNext={onNext}
      onBack={onBack}
      title="You are finished!"
      description="Remember to try to stick to this routine and avoid caffeine and distractions close to bedtime. "
      imageUrl={star}
      buttonImageUrl={arrow}
      backgroundColor="#FEEE61"
      color="#8BD5FF"
    />
  );
}
