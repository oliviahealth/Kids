"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
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
      description: "Sit or lie down for this breathing exercise.",
    },
    {
      stepNumber: 2,
      description: "Inhale deeply through your nose for 4 seconds.",
    },
    {
      stepNumber: 3,
      description: "Hold your breath for 4 seconds.",
    },
    {
      stepNumber: 4,
      description: "Exhale the breath slowly through your mouth for 4 seconds.",
    },
    {
      stepNumber: 5,
      description:
        "Pause in between cycles and repeat for approximately 5 minutes.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Breathing Techniques for Pregnant Women"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <Activity steps={activitySteps} stepNumberColor="#FDE3FF" />
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
