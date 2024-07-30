"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import Activity, { ActivityStep } from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page4({
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
        "Grab either a glove or mitten you dont mind cutting up to use for a puppet",
    },
    {
      stepNumber: 2,
      description:
        "The purpose of using a glove or mitten is that you can cut off the fingers/thumb of the glove/mitten to make little finger puppets for your child. Cut off the finger/thumb slots, but if using a glove keep the middle three fingers alone as this will be how you control the puppet",
    },
    {
      stepNumber: 3,
      description:
        "You and your child should work together to create the puppet and little finger puppets. Markers and crayons may not work well with this puppet, but you can use glue with googly eyes, yarn, buttons, pom-poms, and any other craft so your child will be engaged in the activity",
    },
    {
      stepNumber: 4,
      description:
        "When your puppet is complete, show it to your child and let them observe it. Let your child observe the puppet and give it a name as well so that your child learns to look at the puppet when its name is said.",
    },
    {
      stepNumber: 5,
      description:
        "Put the puppet on your hand and start talking to your child with the puppet. Try to get your child to look at the puppet while talking, not looking at you talking as much. Let them reach for and babble at the puppet when talking and asking questions to your child. Put the finger puppet on your child's fingers and let them observe, feel, and do the same activities as you did with the main puppet",
    },
    {
      stepNumber: 6,
      description: `For extra skill development, you can read a story to your child using the puppet or even combine this activty with the "Baby's Magic Mirror" activity as well`,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Puppet Playtime"
        subtitle="Emotional, Behavioral, & Social - Blossom Haven"
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
