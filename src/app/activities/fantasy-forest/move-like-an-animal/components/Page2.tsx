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
        '(Place the scissors and Animal Cards in front of your child.) "We are going to play a game called “Move Like an Animal”. We need to cut out our animal cards and place them into the empty bowl. We are going to take turns picking cards and moving like the animal we randomly pick from the bowl."',
    },
    {
      stepNumber: 2,
      description:
        "(Cut the animal cards out for your child and have him/her place them into the bowl.)",
    },
    {
      stepNumber: 3,
      description:
        '"Okay, now we need to mix the bowl and start the game." (Have your child shake the bowl with cards and ask them to go first.)',
    },
    {
      stepNumber: 4,
      description:
        "(Play as many rounds as you want and help your child move and sound like the animal, he/she chose.)",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title=" DIY Puzzle"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <Activity
        title="Activity - Read the following sentences."
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
