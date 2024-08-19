"use client";
import React from "react";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import Activity, { ActivityStep } from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps: ActivityStep[] = [
    {
      stepNumber: 1,
      description: "Gather the whole family for this activity. ",
    },
    {
      stepNumber: 2,
      description:
        "Give everyone a small slip of paper or sticky note and have them write their favorite song on it.",
    },
    {
      stepNumber: 3,
      description:
        "Have everyone fold their piece of paper and place it in a bowl to be mixed up. ",
    },
    {
      stepNumber: 4,
      description:
        "Have your child draw out a piece of paper to choose which song you will start with. Use your phone to play that song and encourage everyone to start dancing! (You can also turn out the lights and dance around with flashlights to add more fun!)",
    },
    {
      stepNumber: 5,
      description: `Take turns pulling songs out the bowl until all songs have been played and everyone has danced until their heart is content!`,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Family Dance Party!"
        subtitle="Physical Activity - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <Activity
        title="Activity"
        steps={activitySteps}
        stepNumberColor="#A7F2C5"
      />
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
