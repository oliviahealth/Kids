"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
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
      description:
        "Grab yourself a ziploc bag. To prevent leaks, duct tape the bottom and sides of the ziploc. If you are using a water bottle you will not need tape for this activity.",
    },
    {
      stepNumber: 2,
      description:
        "Keep in mind to not completely fill up the ziploc bag/water bottle. You need to have room in either container in order to shake and move the water, oil, and food coloring around.",
    },
    {
      stepNumber: 3,
      description:
        "Pour in your baby oil first. This activity is best completed when you have more oil than water so it’s best to begin with adding oil in the bag/bottle.",
    },
    {
      stepNumber: 4,
      description:
        "Add in some drops of food coloring. It works best to use a color your child is familiar with or likes to see.",
    },
    {
      stepNumber: 5,
      description:
        "Now add in your water. Slowly add water in to create the lava lamp look you are trying to get. Add in some water and mix it around to see if you are able to get clumps/bubbles like you would see in a lava lamp.",
    },
    {
      stepNumber: 6,
      description:
        "Now that your mixture is complete, get ready to close the bag. For a ziploc bag, take some air out leaving some room for the water, oil, and food coloring to mix but not in danger of popping. Tape the top of the ziploc bag to prevent spills.",
    },
    {
      stepNumber: 7,
      description:
        "Show your child their new sensory bag! Show them how the liquids move around, mix / don't mix together, and how the bag feels. Let child observe and make their own notes but trying to keep them engaged with messing around with their new sensory bag.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Colorful Oil and Water Science Bag"
        subtitle="Math & Science - Blossom Haven"
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
