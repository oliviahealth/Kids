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
      description: "Get a ball and your toddler and find a place to sit on the floor. (This can be done with as many people as you like, so include the family or some of your toddler's peers if you want!)",
    },
    {
      stepNumber: 2,
      description:
        "Roll the ball to your toddler.",
    },
    {
      stepNumber: 3,
      description:
        "Encourage your toddler to roll the ball back to you or to someone else in the circle.",
    },
    { stepNumber: 4, description: "Praise your toddler for cooperation. Say things like, \"Wow isn't this fun?\" or \"Great job rolling the ball to ___!\"" },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Rolling the Ball"
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
