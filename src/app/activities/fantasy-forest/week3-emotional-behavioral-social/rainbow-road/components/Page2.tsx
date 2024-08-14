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
      description: "Secure the rainbow road papers to the floor with tape. Tell your child: 'We're going to use this dice and the rainbow road to talk about our feelings. We'll roll the dice, count the steps, and stop on the color it lands on. Then, we'll complete the sentence on the paper for that color",
    },
    {
      stepNumber: 2,
      description: `
        Position yourselves at the start of the rainbow road, at the color red. Say to your child:
        “Let's do a practice round. Roll the dice.” (Let your child roll)
        “Let's count the steps.” (Count aloud)
        “What color did we land on?” (Let your child respond)
        “This color says (read the sentence). When do you feel _______?” (Let your child answer)
        “Great job!”
      `,
    },
    
    
    
    {
      stepNumber: 3,
      description:
        "Repeat until you or your child have completed each sentence. Try switching roles",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="The Rainbow Road"
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
