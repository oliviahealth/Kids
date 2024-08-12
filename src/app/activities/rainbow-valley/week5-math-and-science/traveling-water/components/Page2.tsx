"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";
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
      description:
        "Place your cups in a circle and fill them halfway full with water.",
    },
    {
      stepNumber: 2,
      description:
        "Place food coloring into the cups to create the colors you and your child want.",
    },
    {
      stepNumber: 3,
      description:
        "Fold the paper towels until they become long, thin rectangles.",
    },
    {
      stepNumber: 4,
      description:
        "Place one end of the paper towels in one cup, and the other end in the cup next to it.",
    },
    {
      stepNumber: 5,
      description:
        "Repeat until all of the paper towels have been placed in the cups.",
    },
    {
      stepNumber: 6,
      description:
        "Sit back and watch as the water gets soaked up by the paper towels.",
    },
    {
      stepNumber: 7,
      description:
        "Once the process is finished, talk with your child about how the 'moving water' is actually the water getting soaked up and spreading across the paper towels.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Traveling Water"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
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
