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
      description: "Gently close your right nostril with your right thumb.",
    },
    {
      stepNumber: 2,
      description: "Inhale deeply through your left nostril.",
    },
    {
      stepNumber: 3,
      description:
        "Gently close your left nostril with your left thumb, and release your right nostril.",
    },
    {
      stepNumber: 4,
      description: "Breathe out through your right nostril.",
    },
    {
      stepNumber: 5,
      description: "Breathe in through your right nostril.",
    },
    {
      stepNumber: 6,
      description:
        "Gently cover your right nostril again and release your left nostril.",
    },
    {
      stepNumber: 7,
      description: "Exhale through your left nostril.",
    },
    {
      stepNumber: 8,
      description: "Repeat this cycle 4 times.",
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
