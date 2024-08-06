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
        "A child's socialization (exposure to the world) first begins at home with the caregivers. Some of the best ways to get your child on track to reach their milestones include skin to skin contact, talking to your baby in both a childlike and adult conversation, and playing games with your child.",
    },
    {
      stepNumber: 2,
      description:
        "The next stage of socialization is walking around your neighborhood/community. Put your baby in a carrier/sling or in a stroller and take a walk around your community. Taking a walk with your child exposes them to nature, animals, and other people, working on communication skills, learning emotions, and gaining sensory experiences.",
    },
    {
      stepNumber: 3,
      description:
        "The final stage of socialization for your 0-1 year old involves meeting other children, preferably children around their age. This can be done with other children in the family, friends and their kids, or community childcare groups. Getting your child exposed to other babies increases their communication skills, movement/motor skills, and social-emotional skills such as sharing, confidence, and self esteem.",
    },
    {
      stepNumber: 4,
      description:
        "No matter where you go, you can get your child used to socializing. Early exposure to socialization is key to your child’s development. The important thing to remember is that this is not a one time activity, this should be done multiple times across your child's life for them to gain the skills they need to grow into a smart, happy child.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Day Out!"
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
