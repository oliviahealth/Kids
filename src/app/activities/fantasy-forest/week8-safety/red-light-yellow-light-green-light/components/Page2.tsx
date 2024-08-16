"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
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
      description: "Find a flat open area (EX: sidewalk or a grass area) and create a start line and stop line with chalk or whatever materials you find outside. Make the distance far enough where they can run but close enough where they can hear your instructions.",
    },
    {
      stepNumber: 2,
      description: "Have your child stand behind the starting line while you stand behind the finish line.",
    },
    {
      stepNumber: 3,
      description: "“Green means “go”, yellow means “slow”, and red means “stop”, just like the lights on a traffic light.”",
    },
    {
      stepNumber: 4,
      description: "This game can be made a competition by seeing who can get to the finish line first without breaking the traffic rules.",
    },
    {
      stepNumber: 5,
      description: "If they don't follow the colors that are shouted, they will have to start over.",
    },
  ];   

  return (
    <>
      <Header
        logoSrc={logo}
        title="Red Light, Yellow Light, Green Light"
        subtitle="Safety - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <Activity steps={activitySteps} stepNumberColor="#B5F6D0" />
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
