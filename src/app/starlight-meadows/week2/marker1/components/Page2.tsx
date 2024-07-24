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
      description: "In a pan, mix the water, oil, salt, food coloring (or 2 Kool Aid packets) and cream of tartar over  heat, until it starts to lightly bubble. Your child may participate in this step by pouring in the ingredients (as long as the pan is not yet on the stove).",
    },
    {
      stepNumber: 2,
      description:
        "Remove pan from heat. Using a spatula, mix in the flour as best as you can. Then, allow the playdough to cool off. ",
    },
    {
      stepNumber: 3,
      description:
        "When the dough is cool enough to touch, knead on a greased counter. Your child can participate in this step!",
    },
    { stepNumber: 4, description: "When you are finished playing, store playdough in an airtight container in the fridge for up to 2 months" },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Playdough Activity"
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
