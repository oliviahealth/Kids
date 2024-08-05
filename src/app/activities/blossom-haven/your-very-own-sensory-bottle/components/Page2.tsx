"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";import Link from "next/link";
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
      description: "Grab any water bottle that you don't mind using for an art project. This can be as simple as a plastic water bottle, or any other one that can be closed by a lid."
    },
    {
      stepNumber: 2,
      description:
        "Open your water bottle and gather all supplies you and your baby would like to place inside the sensory bottle. Items that can go inside the sensory bottle include water, glitter, rice, beans, your child's small toys, fuzzy/colored balls, corn kernels, rubber bands, necklace beads, and any other items that brings joy to your or the child, and can fit into the sensory bottle - Work together to fill the sensory bottle.",
    },
    {
      stepNumber: 3,
      description:
        "Take some markers or anything similar and draw some designs on the outside of the senory bottle if you wish.",
    },
    { stepNumber: 4, description: "Take your new sensory bottle, shake it around, and let your child play around and explore it. This sensory bottle is designed for your baby to continually explore and  keep them calm as it is a familiar object they helped to create. This activity may be quick to complete, but is designed for long term use. What you can also do is create multiple sensory bottles with different objects, toys, and/or colors in them so your child has different ones they can explore." }
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Your Very Own Sensory Bottle"
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
