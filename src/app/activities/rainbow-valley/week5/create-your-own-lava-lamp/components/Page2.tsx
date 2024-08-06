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
        description: "Grab your ice cube tray and fill it with water."
    },
    {
        stepNumber: 2,
        description: "If you would like to add food coloring, you can now add drops to the water."
    },
    {
        stepNumber: 3,
        description: "Place the tray in the freezer until completely frozen."
    },
    {
        stepNumber: 4,
        description: "Fill your clear jar with vegetable oil."
    },
    {
        stepNumber: 5,
        description: "Drop your ice cubes into the vegetable oil and watch as they resemble lava lamp bubbles."
    },
    {
        stepNumber: 6,
        description: "Discuss with your child that water and vegetable oil do not mix, which is why this container looks like a lava lamp."
    }
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Create Your Own Lava Lamp"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
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
