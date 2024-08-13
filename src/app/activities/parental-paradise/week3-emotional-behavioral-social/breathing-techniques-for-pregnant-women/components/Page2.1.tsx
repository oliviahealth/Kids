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
      description: "Inhale through your nose, and intentionally allow your abdomen (instead of your chest) to fill with air.",
    },
    {
      stepNumber: 3,
      description: "Breathe out slowly through your mouth, feeling your body release tension as you release your breath.",
    },
    {
      stepNumber: 4,
      description: "Repeat this exercise for approximately 5 minutes, focusing intently on the rhythm of your breathing.",
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
