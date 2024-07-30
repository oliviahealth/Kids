"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
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
      description: "Gather supplies.",
    },
    {
      stepNumber: 2,
      description:
        "Measure bracelet string around wrist and cut to desired length.",
    },
    {
      stepNumber: 3,
      description:
        "Pick beads and letter beads to spell out a quality trait of choice (ex. 'KINDNESS' or 'LOVING') that your child sees in themselves.",
    },
    {
      stepNumber: 4,
      description: "Knot finalized bracelet.",
    },
    {
      stepNumber: 5,
      description:
        "As you create your bracelets, invite your child to explain why this is an important quality trait to embrace. Celebrate this wonderful virtue!",
    },
    {
      stepNumber: 6,
      description:
        "Encourage your child to reflect on these positive affirmations not only for themselves but for their community around them. For instance, invite your child to create more affirmation bracelets, but this time for every member of the family or for their friends.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Affirmation Friendship Bracelets"
        subtitle="Emotional, Behavioral, & Social - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <Activity steps={activitySteps} stepNumberColor="#C5FFFC" />
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
