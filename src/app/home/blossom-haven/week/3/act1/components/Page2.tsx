"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
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
        "Choose a room in your house that contains a mirror. It is also acceptable to use smaller, child-safe mirrors if you are not currently at home, but please monitor your child when using these mirrors.",
    },
    {
      stepNumber: 2,
      description:
        "Talk to your baby before showing them in the mirror. Doing this step raises your child's attention and gets them ready for learning/exploring through mirror play. ",
    },
    {
      stepNumber: 3,
      description:
        "When ready, place or hold your child in front of the mirror. First, let them explore on their own. Watch how your child reacts with their eyes and facial expressions. Your child is being exposed to a new concept, and you want to provide them some time to readjust if needed.",
    },
    {
      stepNumber: 4,
      description:
        "After giving your child some time to get used to the mirror, start talking/asking them questions through the mirror. Look at your child using the mirror and ask them questions, so they are viewing you in the mirror. You can also point to and say what body part your pointing at to help wth language development later.",
    },
    {
      stepNumber: 5,
      description:
        "Spend as much time as you'd like in front of the mirror,  letting your child explore on their own, asking questions, dancing, playing peek-a-boo, and even singing. You're providing more opportunities for your child to reach their emotional, behavioral, and social milestones.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Magic Mirror!"
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
