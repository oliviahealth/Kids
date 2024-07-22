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
      description: "Decide what type of tree you want to make.",
    },
    {
      stepNumber: 3,
      description:
        "Either print out the OliviaKids Tree Trunk Template or use a piece of paper available to you.",
    },
    {
      stepNumber: 4,
      description:
        "If using your own paper, draw out the trunk of a tree with branches using brown paint. You can also have a blue sky as the background.",
    },
    {
      stepNumber: 5,
      description: "Attach a cotton ball to the end of a clothespin.",
    },
    {
      stepNumber: 6,
      description:
        "Dip the cotton ball end into the colored paints and stamp it onto the paper to create leaves.",
    },
    {
      stepNumber: 7,
      description: "Repeat until there are leaves on all of the branches.",
    },
    {
      stepNumber: 8,
      description:
        "If creating apples or other fruits, use the cotton ball to create green leaves first. After it dries, use the cotton ball to create red circles on top to represent the apples.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Tree Painting Activity"
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
