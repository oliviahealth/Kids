"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
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
      description: `Grab a variety of pots, pans, and cups. Make sure that there are different sizes so they give off different sounds, and grab a wooden spoon or something to bang it on the "drums".`,
    },
    {
      stepNumber: 2,
      description:
        "If you have a young child (0-4 months), place them in a high chair with drums in front of them. If there older you can do this activity on the ground if you wish.",
    },
    {
      stepNumber: 3,
      description: `Place the pots, pans, and cups so that the opening is on the ground. This allows your child to hit the bottom of their "drums" to give off sound.`,
    },
    {
      stepNumber: 4,
      description:
        "Show your child how it works. Take your spoon or stick and play around of the drums showing your child the different sounds they make. Let your child try to play around holding their own spoon or stick.",
    },
    {
      stepNumber: 5,
      description:
        "Play the drums with your child. While doing this, it is recommended to smile, laugh, and even sing with your child to show how fun and engaging this activity is.",
    },
    {
      stepNumber: 6,
      description:
        "Repeat this activity during your free time. Doing this activity multiple times promotes your child's enjoyment, growth, and development in many areas.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Drum Solo"
        subtitle="Sound & Music - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <Activity steps={activitySteps} stepNumberColor="#F8E7BA" />
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
