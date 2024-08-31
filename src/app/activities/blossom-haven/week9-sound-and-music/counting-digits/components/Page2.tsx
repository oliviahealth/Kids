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
      description: `For each step you are counting, try to use a soothing, singing voice that calms your child. You may also find rhyming songs, or make your own, while counting off body parts such as "This Little Piggy".`,
    },
    {
      stepNumber: 2,
      description: `Sit your child in a chair or in your lap, we'll begin with their hands and fingers. Start counting off their fingers, lightly grabbing and lifting them as you do. Grab your child's hand and get them to count their fingers off on each hand. Show them your hands and do the same.`,
    },
    {
      stepNumber: 3,
      description:
        "In the same position, repeat the same step but count off their toes. Show them again how many toes they have on each foot, and how many toes they have total.",
    },
    {
      stepNumber: 4,
      description:
        "Repeat these steps for any body part you wish to show them. This can include their arms, legs, nose, ears, and really any body part. Just be sure to count off body parts each time and clearly state what body part it is. Get your child to tap and repeat counting so they work on remembering names and number of body parts.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Counting Digits"
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
