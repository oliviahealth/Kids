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
      description: "When you and your child wake up in the morning, give your child 2-3 options of what they will wear that day and allow them to choose, then help them get dressed, allowing as much independence as possible.",
    },
    {
      stepNumber: 2,
      description:
        "When making breakfast, give your child options about their meal. Ask questions like, \"Do you want blueberries or strawberries?\" ",
    },
    {
      stepNumber: 3,
      description:
        "Help them choose an activity to do for the day. Ask \"Do you want to color with markers or crayons?\" or \"Do you want to read this book or this one?\"",
    },
    { stepNumber: 4, description: "Try to give your child one hour of freetime during the day where they have access to any of their toys and/or books so they can freely explore and choose what they would like to play with. " },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Get Ready With Me!"
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
