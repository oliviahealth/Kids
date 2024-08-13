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
        "All you need for this activity is a ruler or a tape measure. Below we have listed the size of your baby at each month of development, as well as an example of a corresponding object of the same size.",
    },
    {
      stepNumber: 2,
      description:
        "Using either the list below or the Fetal Development attachment, take your measuring tool and find other objects in your home that correspond to the size of the baby at each month. Then, you can look at the Fetal Development attachment for a little bit of insight into how your baby is developing at that time!",
    },
    {
      stepNumber: 3,
      description: `Sizes by month:
      - Month 1: 0.5 inch (a grain of rice or a pea)
      - Month 2: about 1 inch (a quarter or a big grape)
      - Month 3: a little over 2 inches (a key or 1/4 of a graham cracker)
      - Month 4: 4.5 inches (a toilet paper roll or a soda can)
      - Month 5: 6.5 inches (a stapler or a tape dispenser)
      - Month 6: almost 12 inches (a ruler!)
      - Month 7: almost 15 inches (a loaf of bread or a rolling pin)
      - Month 8: a little over 16.5 inches (a baby doll)
      - Month 9: about 19 inches (the neck of a standard guitar)`,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Your Baby's Size in Everyday Objects"
        subtitle="Math & Science - Prenatal Paradise"
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
