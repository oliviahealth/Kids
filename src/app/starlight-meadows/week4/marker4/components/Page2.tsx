"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
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
      description: "Grab your child and some bubbles and go outside! ",
    },
    {
      stepNumber: 2,
      description:
        "Begin by blowing some bubbles and using descriptive words like, \"That bubble is big!\" or \"Look how high that bubble is going!\" or \"Wow, that is a lot of bubbles!\"",
    },
    {
      stepNumber: 3,
      description:
        "Show your toddler how to pop bubbles and say, \"Pop!\" each time a bubble pops. Try to encourage them to repeat after you by showing them how to say it.",
    },
    {
      stepNumber: 4,
      description: "When you blow bubbles, count them out loud while pointing to them with your toddler.",
    },

    {
      stepNumber: 5,
      description: "Let your child try to blow some bubbles too! Say things like \"Your turn!\" and \"My turn!\" to teach turn taking. You may have to help your child form their lips in the right shape to blow bubbles. A great way to do this is to have them hold a straw in their mouth first while blowing bubbles.",
    },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Blowing Bubbles!"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
      />

      <Activity steps={activitySteps} stepNumberColor="#A9B6FF" />
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
