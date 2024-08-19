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
      description:
        "Use tape, chalk, or other materials desired to make a balance beam. A straight line is perfectly acceptable, and feel free to add pillows as obstacles for more of a challenge.",
    },
    {
      stepNumber: 2,
      description:
        'Put a bowl with "teeth" (mini marshmallows) and a spoon on one side of the balance beam and an empty bowl on the other side.',
    },
    {
      stepNumber: 3,
      description: `The goal of the activity is to go back and forth to carry all the "teeth" on the spoon from one side to the other without spilling any. `,
    },
    {
      stepNumber: 4,
      description:
        "If any teeth are dropped, go back to the start and try again.",
    },
    {
      stepNumber: 5,
      description:
        " If wanting to add a competitive aspect to the game, time your child and see if they can do it again faster or if completing the activity with multiple children, see who can complete the task the fastest. ",
    },
    {
      stepNumber: 6,
      description: `"Great job practicing your balancing skills! You would make a great tooth fairy!"`,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Tooth Fairy Balance"
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
