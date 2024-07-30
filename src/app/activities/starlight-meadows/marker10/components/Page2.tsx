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
      description: "Go to the grocery store, and do whatever shopping you need for your home.",
    },
    {
      stepNumber: 2,
      description:
        "Bring the groceries into your home, and unpack them with your child. As you unpack, talk about the item you are holding (its name, what it looks like, the color, how many of it you bought).",
    },
    {
      stepNumber: 3,
      description:
        "When you are putting the items away, talk about where you are putting them. For example: \"I am going to put this yogurt in the refrigerator so it stays cold,\" or \"The potatoes will go in the pantry where it is dark and dry,\".",
    },
    {
      stepNumber: 4,
      description: "You can do this as you unload all of your groceries, or just as long as your child holds interest. ",
    },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Unloading Groceries"
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
