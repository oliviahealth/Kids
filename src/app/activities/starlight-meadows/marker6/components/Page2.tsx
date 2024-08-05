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
      description: "Pick out a toy your child is interested in. This could be a doll, truck, ball, etc. ",
    },

    {
      stepNumber: 2,
      description: "Start playing with the toy, and say \"let's take turns. My turn,\"",
    },



    {
      stepNumber: 3,
      description:
        "After playing with the toy for a little bit (this can range from a few seconds, to a minute), hand the toy to your child and say \"your turn!\"",
    },
    { stepNumber: 4, description: "Repeat steps 2 and 3, alternating \"turns\" for a few rounds. You may stop this activity whenever you would like!s" },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="My Turn, Your Turn"
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
