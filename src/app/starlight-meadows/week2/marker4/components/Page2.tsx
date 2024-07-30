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
      description: "Take your child outside where they have options to choose from.",
    },
    {
      stepNumber: 2,
      description:
        "Encourage your child to find a few things that vary in color and texture they can include in their collage.",
    },
    {
      stepNumber: 3,
      description:
        "Once they have their choices, cut the flowers, leaves, etc. into pieces for them.",
    },
    { stepNumber: 4, description: "Teach them how to glue them to a piece of paper or cardboard." },
    { stepNumber: 5, description: "Let the collage dry then hang it up to be seen!" },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Nature Collage "
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
