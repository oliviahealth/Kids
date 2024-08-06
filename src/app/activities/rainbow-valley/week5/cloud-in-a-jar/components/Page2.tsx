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
        description: "In a small cup combine a few drops of food coloring with about 5 tablespoons of water. If you are just using one color for your rain, you will only need one cup of food coloring. However, if you would like to make rainbow rain, you will need a cup for each color of the rainbow."
    },
    {
        stepNumber: 2,
        description: "Fill a separate, larger jar with water until it is about ¾ full."
    },
    {
        stepNumber: 3,
        description: "Spray shaving cream at the top of the jar until there is a small amount of shaving cream above the rim of the jar."
    },
    {
        stepNumber: 4,
        description: "Using pipettes, drop the different colors of food coloring on top of the shaving cream."
    },
    {
        stepNumber: 5,
        description: "Watch as the more you put food coloring on top of the shaving cream, the more the colors seep down into the water!"
    }
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Cloud in a Jar"
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
