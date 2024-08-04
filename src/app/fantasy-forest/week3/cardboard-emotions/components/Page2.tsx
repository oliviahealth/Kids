"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/activities/fantasy-forest/header-icon.svg";
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
      description: "Draw 6 emotions (happy, scared, sad, angry, frustrated, embarrassed) on toilet paper rolls and place them in front of your child. Explain that these cardboard faces will help discuss different emotions.",
    },
    {
      stepNumber: 2,
      description: "Introduce the concept of emotional expressions as how we show our feelings on the outside.",
    },
    {
      stepNumber: 3,
      description: "Explain that you will practice naming emotions that match the cardboard faces.",
    },
    {
      stepNumber: 4,
      description: "Pick up the happy face and ask your child to identify it. Affirm the correct answer and discuss what makes them feel happy.",
    },
    {
      stepNumber: 5,
      description: "Ask your child to describe their happy face and share a time they felt happy. Repeat for the other emotions.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Cardboard Emotions"
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
