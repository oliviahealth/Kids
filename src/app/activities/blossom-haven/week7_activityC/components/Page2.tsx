"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
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
      description:
        "Start with child on their back. Grab their feet, and gently cycle their feet like they are riding a bicycle. Also show them stop and go concepts while you are cycling their feet.",
    },
    {
      stepNumber: 2,
      description:
        "Place your child on your lap. Grabbing under their arms, try and get them to place feet on the ground and slowly drop them down to put weight on their legs. Talk and laugh with your child and hold them their to begin muscle growth. Slowly raise and drop your child a couple of times to gain balance and muscle strength.",
    },
    {
      stepNumber: 3,
      description:
        "Sit your child down next to a couch or chair, and prepare to stand them up. With child sitting, help them up by putting them in a squat position, and then standing with support from the couch/chair. Practice a few more times.",
    },
    {
      stepNumber: 4,
      description:
        "Lastly, grab child by both arms and walk with them. You can place child's feet on yours and walk them, or have them walk in between your legs while you are supporting/holding them by their arms.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby Boot Camp"
        subtitle="Physical Activity - Blossom Haven"
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
