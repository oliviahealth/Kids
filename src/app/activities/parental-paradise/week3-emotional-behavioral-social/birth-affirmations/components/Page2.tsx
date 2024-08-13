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
      description:
        "First, you will create a list of affirmations. Think of your fears and doubts about pregnancy and giving birth. Each affirmation should be a short statement, reassuring you of your capability to defeat your fears and doubts about pregnancy and birth. These statements should boost your confidence in yourself and the support around you. Your list should include a minimum of 10 affirmations. Use the Birth Affirmations Example Sheet linked in this activity. You're welcome to reuse our listed affirmations.",
    },
    {
      stepNumber: 2,
      description:
        "Next, you will post your affirmations list somewhere you will see it every day. This can be in your phone, in your journal, on your bathroom mirror, and more!",
    },
    {
      stepNumber: 3,
      description:
        "Once your list is posted, set a time each day when you are able to recite each affirmation. This should take no longer than 2 minutes of your day.",
    },
    {
      stepNumber: 4,
      description:
        "Lastly, recite your affirmations either to yourself or out loud as a reminder that you are prepared and confident in your pregnancy journey and in giving birth!",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Birth Affirmations"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
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
