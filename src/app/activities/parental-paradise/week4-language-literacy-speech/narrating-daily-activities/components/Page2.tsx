"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
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
      description: "Plan an activity for the day. This can be anything you'd like whether it's running errands, cleaning your house, doing your morning routine, or going to the Zoo.",
    },
    {
      stepNumber: 2,
      description: "Next, simply talk through it. Make sure to be detailed, using an exciting tone and descriptive language.",
    },
    {
      stepNumber: 3,
      description: "Tell your baby what they are doing throughout your activity. Is your baby sleeping, rolling around, or kicking relentlessly? Tell them about it!",
    },
    {
      stepNumber: 4,
      description: "Have Fun! Take this time to go on new adventures and explore things you've never seen. This will allow you to be more descriptive and enthusiastic in your words.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Narrating Your Daily Activities"
        subtitle="Language, Literacy, & Speech - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <Activity steps={activitySteps} stepNumberColor="#FDE3FF" />
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
