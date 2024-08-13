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
      description: "Inhale through your nose for 4 seconds.",
    },
    {
      stepNumber: 2,
      description: "Hold the breath in your lungs for 7 seconds.",
    },
    {
      stepNumber: 3,
      description: "Exhale the breath through your mouth for 8 seconds.",
    },
    {
      stepNumber: 4,
      description:
        "Repeat this cycle 4 times, or however many times you feel is comfortable!",
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
