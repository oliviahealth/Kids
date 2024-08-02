"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page3({
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
        "Grab any type of sock that you don't mind using anymore. If you have any fun socks (different colors, textures, etc) it will likely be more engaging for your child",
    },
    {
      stepNumber: 2,
      description:
        "Since you are dealing with a sock, markers will work better than crayons for decorating but you can still use glue for googly eyes, yarn for hair, buttons, and any other creative designs on the sock puppet.",
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
        title="Activity #2: Sock Puppet Playtime"
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
