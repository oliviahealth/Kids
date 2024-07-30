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
        "Talk with your child to come up with a puzzle image that is interesting to them, such as their favorite animal or food.",
    },
    {
      stepNumber: 3,
      description:
        "Have your child draw the desired image onto a blank piece of paper. If necessary, you may provide assistance or draw it for them.",
    },
    {
      stepNumber: 4,
      description: "Color the image in!",
    },
    {
      stepNumber: 5,
      description:
        "Glue the picture onto a piece of cardboard of the same size. Allow it to dry completely.",
    },
    {
      stepNumber: 6,
      description:
        "Use safety scissors to cut the picture into 10-25 jigsaw pieces.",
    },
    {
      stepNumber: 7,
      description: "Mix the pieces up.",
    },
    {
      stepNumber: 8,
      description: "Assemble the puzzle!",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="DIY Puzzles"
        subtitle="Creative Arts - Adventure Bay"
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
