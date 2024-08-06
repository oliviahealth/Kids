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
        "Have some bubbles to use for this activity. These can either be store-bought or homemade bubbles. Homemade bubbles can be created with 6 cups of water and 1 cup of dish soap.",
    },
    {
      stepNumber: 2,
      description:
        "On a nice, sunny day take yourself, your child, and any other caregiver/family member who wants to be included in the activity outside to get ready for bubble blowing.",
    },
    {
      stepNumber: 3,
      description:
        "Sit your child down and begin blowing bubbles. First, focus on blowing bubbles around the area to get your child looking around at them, watching them float and pop.",
    },
    {
      stepNumber: 4,
      description:
        'Speak to your child while doing this, saying "these are bubbles" and "pop" when the bubbles pop. Then you may carefully blow bubbles around your child and see if they try to reach out and touch the bubbles.',
    },
    {
      stepNumber: 5,
      description:
        "Show child if you touch the bubbles they'll pop, or try to hold one for your child to observe. Your child might even try to crawl around after bubbles and should support them if they do.",
    },
    {
      stepNumber: 6,
      description:
        "Continue this activity until everyone is satisfied, or have run out of bubbles to blow. As long as everyone enjoyed being outside spending time together with bubbles, your activity is a success.",
    },
  ];

  return (
    <>
     <Header
        logoSrc={logo}
        title="Bubble Pop Party!"
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
