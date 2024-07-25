"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";import Link from "next/link";
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
      description: "Grab an ice cube tray and put 1-2 drops of food coloring in each ice cube holder. Each cube holder can have different food coloring, all the same, or even mix colors together for more of your baby to explore.",
    },
    {
      stepNumber: 2,
      description:
        "Fill each ice cube holder with water.",
    },
    {
      stepNumber: 3,
      description:
        "Place the ice cube tray into your freezer and give enough time to create ice cubes. The time until the water is ice cubes varies but expect a wait time of around 3-4 hours.",
    },
    { stepNumber: 4, description: "Once you have your colored ice cubes, take your baby outside when it's a hot day so that the ice cubes are able to melt." },
    {
      stepNumber: 5,
      description: "Take a plastic container like tupperware, or anything big enough, and place the ice cubes in the container in front of your child.",
    },
    {
      stepNumber: 6,
      description: "Let your baby explore the colored ice cubes. Let them look, touch, feel, even explore the ice cubes with their mouth. Ask your child questions why they're playing such as \"what color is that?\" and \"is this fun?\". When you ask questions such as \"what color\", answer the question yourself as this helps your child learn this information."
    },
    {
      stepNumber: 7,
      description: "Give your child free range to grab the ice cubes and let them be, but make sure they're safe at the same time.",
    },
    {
      stepNumber: 8,
      description: "When the ice cubes are melted, let them play around with the water as this still allows them to use creative art skills.",
    },
    {
      stepNumber: 9,
      description: "Clean up should be easy, take the plastic container and wash it. Wash your child's hands and clean them since you were just outside as well.",
    }
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Colored Ice Cube Melting Activity"
        subtitle="Creative Arts - Blossom Haven"
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
