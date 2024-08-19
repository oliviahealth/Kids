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
      description: "Read the clue.",
    },
    {
      stepNumber: 2,
      description: "Search for the item.",
    },
    {
      stepNumber: 3,
      description: "Decide if it is safe or not safe.",
    },
    {
      stepNumber: 4,
      description: "Check off the item once it is safe.",
    },
    {
      stepNumber: 5,
      description: "Complete the same steps for each clue!",
    },
    {
      stepNumber: 6,
      description: "Heater; Not too close to flammable items.",
    },
    {
      stepNumber: 7,
      description: "Cleaning Products; Out of reach.",
    },
    {
      stepNumber: 8,
      description: "Smoke Detector; Working properly.",
    },
    {
      stepNumber: 9,
      description: "Small Toys; Out of reach.",
    },
    {
      stepNumber: 10,
      description: "Medications; Out of reach.",
    },
    {
      stepNumber: 11,
      description: "Knives or Scissors; Out of reach.",
    },
    {
      stepNumber: 12,
      description: "Fire Extinguisher; Present.",
    },
    {
      stepNumber: 13,
      description: "Water Bottle; Safe to Drink.",
    },
    {
      stepNumber: 14,
      description: "Helmet; How to put it on and when to wear it.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Safety Scavenger Hunt"
        subtitle="Safety - Fantasy Forest"
        homeLink="/home"
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
