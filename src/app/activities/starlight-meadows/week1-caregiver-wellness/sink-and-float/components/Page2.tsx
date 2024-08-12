"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";
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
      description: "Walk around your house and/or outside and choose some objects that might sink and float. Examples could be rocks, coins, sponges, and leaves.",
    },
    {
      stepNumber: 2,
      description:
        "Fill a bowl or bucket with water.",
    },
    {
      stepNumber: 3,
      description:
        "Get your toddler and show them how to drop the objects into the water, then allow them to help you.",
    },
    {
      stepNumber: 4,
      description: "Comment on what each object is doing to help them learn. Example: \"Look! The leaf is floating on top of the water and the coin sunk to the very bottom!\" ",
    },
    {
      stepNumber: 5,
      description: "Repeat with a few objects that sink and float.",
    },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Sink and Float"
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
