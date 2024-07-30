"use client";
import React, { useEffect } from "react";
import star from "/public/images/dashboard/adventure-bay/Star 27.svg";
import arrow from "/public/images/dashboard/adventure-bay/icon.png";
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
      stepNumber={4}
      onNext={onNext}
      onBack={onBack}
      title="Well done!"
      description="You have finished the stretches, here is a star!"
      imageUrl={star}
      buttonImageUrl={arrow}
      backgroundColor="#FF8C38"
      color="#FF7613"
    />
  );
}
