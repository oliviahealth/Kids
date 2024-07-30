"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
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
      description: "Gather supplies.",
    },
    {
      stepNumber: 2,
      description:
        "Print out Olivia-KIDS “Popsicle Stick Puppets” packet (Colored or black & white options are available).",
    },
    {
      stepNumber: 3,
      description:
        "Cut out animal faces for puppets. If you desire, grab a blank piece of paper and draw/color puppet characters from your own imagination. These puppets do not even have to be animals, so feel free to think outside of the box with this one!",
    },
    {
      stepNumber: 4,
      description:
        "Tape or glue cut-outs to tip of individual popsicle sticks, and there you have it!",
    },
    {
      stepNumber: 5,
      description:
        "Make up your own stories or plays with your brand new popsicle stick puppets! Have your zoo animals escaped out into the wild? Have the dogs and cats teamed up together? Think outside the box and have fun with your new crew of animal puppets!",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Popsicle Stick Puppets"
        subtitle="Creative Arts - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <Activity steps={activitySteps} stepNumberColor="#C5FFFC" />
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
