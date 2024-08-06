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
      description:
        "Grab a brown paper sack / paper bag used for lunch. This is what you are going to use as your puppet's body",
    },
    {
      stepNumber: 2,
      description:
        "Have you and your child sit together and create the puppet's face and design. This will involve using child-safe drawing tools (Example: crayons) to draw out the face and features, and using glue, if able, to glue on items such as googly eyes, buttons, yarn for hair, and anything else you have at home or easy access to create a puppet face. Use the bottom flap as a mouth!",
    },
    {
      stepNumber: 3,
      description:
        "When your puppet is complete, show it to your child and let them observe it. Let your child observe the puppet and give it a name as well so that your child learns to look at the puppet when its name is said.",
    },
    {
      stepNumber: 4,
      description:
        "Put the puppet on your hand and start talking to your child with the puppet. Try to get your child to look at the puppet while talking, not looking at you talking as much. Let them reach for and babble at the puppet when talking and asking questions to your child.",
    },
    {
      stepNumber: 5,
      description: `For extra skill development, you can read a story to your child using the puppet or even combine this activty with the "Baby's Magic Mirror" activity as well.`,
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

      <Activity
        title="Activity #1: Paper Bag Puppet Playtime"
        steps={activitySteps}
        stepNumberColor="#F8E7BA"
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
