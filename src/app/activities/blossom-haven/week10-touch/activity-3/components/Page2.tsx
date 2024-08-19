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
      description: "Gather an assortment of different texture items that can be glued/taped onto a poster board/trifold. The poster board is what you will be putting the items onto so make sure it is large enough to put all of your items on.",
    },
    {
      stepNumber: 2,
      description: "Recommended items to put on your texture board: cotton balls, pom poms, tin foil, bubble wrap, felts, bottle caps, ribbon, wood, styrofoam, and so many more. The options are endless but there should be a variety of textures on the board.",
    },
    {
      stepNumber: 3,
      description: "Begin gluing/taping the items securely onto your texture board. Place as many textured items as you can on there so the child has a variety of options to touch and explore.",
    },
    {
      stepNumber: 4,
      description: "When complete, place the board on the ground and let your child begin exploring it. Guide them in touching the items and also say the names of what they are touching.",
    },
    {
      stepNumber: 5,
      description: "Let your child explore as you please. As they begin to remember certain items and textures, replace them with new objects or create more texture boards.",
    },
  ];
  
  return (
    <>
      <Header
        logoSrc={logo}
        title="Activity 3"
        subtitle="Touch - Blossom Haven"
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
