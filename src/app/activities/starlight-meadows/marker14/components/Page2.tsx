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
      description: "With your toddler, get an ice tray and fill the cubes with water.",
    },
    {
      stepNumber: 2,
      description:
        "Get red, blue, and yellow food coloring and let your toddler experiment with putting the food coloring into the water.",
    },
    {
      stepNumber: 3,
      description:
        "Try mixing a couple colors to create new colors with your toddler and verbalize what is happening to them. Example: \"We added red food coloring into the yellow colored water and now the water is turning orange!\"",
    },
    {
      stepNumber: 4,
      description: "Put the ice tray in the freezer and wait until the ice cubes are completely frozen.",
    },
    {
      stepNumber: 5,
      description: "Take the tray out and verbalize what happened to your toddler by saying, \"We put the water in and now it has become ice!\"",
    },
    {
      stepNumber: 6,
      description: "Take the cubes out of the tray and place them into a clear container and bring them outside, show your toddler how the ice melts naturally, and speed up the melting process by pouring warm water on them. Continue verbalizing what is happening with the ice.",
    },
    {
      stepNumber: 7,
      description: "You can add a toy hammer or small tongs to allow your toddler to work on their motor skills and interact with the ice without staining their hands.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Colorful Ice Activity"
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
