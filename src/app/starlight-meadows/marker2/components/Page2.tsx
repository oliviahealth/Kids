"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg"
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
      description: "Bring your chin to your chest then rotate your head to one side, bringing your ear as close to your shoulder as possible. Repeat this on the other side. For a more effective stretch, place your hand on one side of your head and gently push your head to your shoulder. ",
    },
    {
      stepNumber: 2,
      description:
        "While seated, extend your legs straight out in front of you. Reach your arms out towards your toes as far as you can and hold for 10 seconds. If you cannot touch your toes, that is okay. Just reach as far as you comfortably can.",
    },
    {
      stepNumber: 3,
      description:
        "Sit on the floor with your bottom on the heels of your feet. Lean forward and stretch your arms out on the ground in front of you while keeping your bottom on your heels. Rest your forehead on the ground, relax your body, and remain in this position for 30-60 seconds. ",
    },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Stress Management - Stretching"
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
