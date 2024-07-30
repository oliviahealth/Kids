"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg"
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps = [
    {
      stepNumber: 1,
      description: "This can be in your neighborhood, a park, or anywhere you would like to go on a walk.  ",
    },
    {
      stepNumber: 2,
      description:
        "Notice five things you can see. The leaves on trees may be blowing in the wind, squirrels might be running around, etc.  ",
    },
    {
      stepNumber: 3,
      description:
        "Think about four things you can feel. This could be wind blowing on your face, how your feet feel in your shoes, your child’s hand or their stroller (if they came along for this walk), etc.",
    },
    {
      stepNumber: 4,
      description:
        "Listen for three things you can hear. Your footsteps, birds chirping, people talking, gravel crunching, etc.  ",
    },
    {
      stepNumber: 5,
      description:
        "Think about two things you can smell.",
    },
    {
      stepNumber: 6,
      description:
        "Maybe you brought a drink or a snack with you to taste, or there is either at home. Take a second to reflect on the sensation of taste.   ",
    },
    {
      stepNumber: 7,
      description:
        "You may repeat this activity as many times as you wish, or just do it one time.   ",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Stress Management - Walking"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <Activity steps={activitySteps} stepNumberColor="#A9B6FF" />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
      />
    </>
  );
}
