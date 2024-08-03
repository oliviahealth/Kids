"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";
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
        description: "Gather blocks (or any stack-able toys), and bring them to your child."
    },
    {
        stepNumber: 2,
        description: "Hand your child one block, letting them play with it however they would like."
    },
    {
        stepNumber: 3,
        description: "Talk to your child about things you notice. For example, “Let’s count the sides of the block!” (count the sides out loud)."
    },
    {
        stepNumber: 4,
        description: "Add more blocks to the play area. Count them out loud as you add them."
    },
    {
        stepNumber: 5,
        description: "Stack some blocks. As you stack them, say “this one is going on top of that one.”"
    },
    {
        stepNumber: 6,
        description: "Continue talking out loud about the things you observe about the blocks. If your child stacks them, or even knocks them over, narrate that too!"
    }
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Blocks"
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
