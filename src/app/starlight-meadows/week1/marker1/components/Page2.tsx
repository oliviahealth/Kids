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
      description: "Caffeine consumption stimulates your brain and keeps you alert and awake. Try to cut out caffeine in the late afternoon and evening.  ",
    },
    {
      stepNumber: 2,
      description:
        "Long naps or naps late in the day. Naps can be very useful and energizing, however, you should try to limit your naps to 30 minutes and avoid napping late in the day. ",
    },
    {
      stepNumber: 3,
      description:
        "Exposure to screens such as smartphones or laptops before bed keeps your mind active. Try to eliminate screen time for at least 30 minutes before bed.  ",
    },
    { stepNumber: 4, description: "Implement some calming activities for your brain before bed. Some examples include reading a book, journaling, or listening to calming music. " },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Sleep Health"
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
