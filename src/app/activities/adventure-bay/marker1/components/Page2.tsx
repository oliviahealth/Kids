"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import arrow from "/public/images/dashboard/adventure-bay/next_arrow.png";
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
      description: "You may download and use the OlivaKIDS affirmation lists",
    },
    {
      stepNumber: 2,
      description:
        "Find the affirmations that you relate to best. These will be the most effective",
    },
    {
      stepNumber: 3,
      description:
        "Recite these affirmations to yourself or your child at least once a day",
    },
    { stepNumber: 4, description: "Have faith in the words you are saying" },
    {
      stepNumber: 5,
      description: "Repeat this process at least once a day for an entire week",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Affirmations for Children and Caregivers"
        subtitle="Caregiver Wellness - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <Activity steps={activitySteps} stepNumberColor="#C5FFFC" />
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
