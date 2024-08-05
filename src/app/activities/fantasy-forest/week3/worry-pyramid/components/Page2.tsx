"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/activities/fantasy-forest/header-icon.svg";
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
      description: "Tell your child, 'Today we are going to practice a worry strategy by creating a worry pyramid!' Place the coloring sheet in front of them.",
    },
    {
      stepNumber: 2,
      description: "Trace the pyramid with your finger and say, 'This shape is a pyramid, it has 3 corners and 3 lines. Can you trace the pyramid like I did?'",
    },
    {
      stepNumber: 3,
      description: "Explain the 5-4-3-2-1 strategy: 'In the big section, we'll draw 5 things you can see, then 4 things you can hear, 3 things you can touch, 2 things you can smell, and 1 thing you can taste.' Start with the largest section and work your way up.",
    },
    {
      stepNumber: 4,
      description: "Guide your child to complete each section of the pyramid with the categories from Step 3.",
    },
    {
      stepNumber: 5,
      description: "Tell your child, 'Good job! Next time you feel worried, you can use this 5-4-3-2-1 strategy. By naming 5 things you can see, 4 things you can hear, 3 things you can touch, 2 things you can smell, and 1 thing you can taste, you can distract yourself from what is worrying you and focus on something else to become calmer.'",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Worry Pyramid"
        subtitle="Emotional, Behavioral, Social - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <Activity steps={activitySteps} stepNumberColor="#A7F2C5" />
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
