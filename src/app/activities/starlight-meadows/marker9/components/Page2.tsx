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
      description: "Pick a safe location to take a walk. This could be around your neighborhood, in a park, at a zoo, or even a store. ",
    },
    {
      stepNumber: 2,
      description:
        "Begin your walk, pointing out things you see to your child. For example, if you are walking outside, \"wow, look at that great big tree! Its leaves are so green today!\" etc. ",
    },
    {
      stepNumber: 3,
      description:
        "Continue your walking and talking for as long as you would like, as any exposure to language is better than none!",
    },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Walking Tour"
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
