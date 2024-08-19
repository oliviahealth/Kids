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
      description: "The base of the mobile will be a hoop. You may need to purchase a framing hoop at the store, or find something in the home that can be used as a hoop to support the hanging objects.",
    },
    {
      stepNumber: 2,
      description: "Wrap your hoop in yarn all the way around to cover the whole thing. Make sure to keep the wrapping tight and tie it off so it doesn't unravel.",
    },
    {
      stepNumber: 3,
      description: "Gather together some colorful cotton balls, felt shapes, ribbon, and anything else you want to hang on the mobile. Using a needle, thread the needle and yarn/string through the cotton balls and felt shapes. After placing these on some yarn strands, tie it off and tie it onto the mobile.",
    },
    {
      stepNumber: 4,
      description: "For your ribbon, you can cut them to create different lengths and tie them onto the hoop of the mobile. You may also just glue all objects onto the yarn or ribbon if you wish.",
    },
    {
      stepNumber: 5,
      description: "Show your child their new mobile, let them see and touch the objects on the mobile.",
    },
    {
      stepNumber: 6,
      description: "Hang the mobile above your child's crib. Don't make it too high where they can't see, and not low enough where they'll pull it off. The child should be able to reach towards the mobile, but not get a strong grip on it.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Activity 2"
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
