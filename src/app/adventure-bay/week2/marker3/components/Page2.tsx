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
        "Glue four or more craft popsicle sticks together to form desired shape (ex. Four sticks for a square).",
    },
    {
      stepNumber: 3,
      description: "Allow the glue to completely dry.",
    },
    {
      stepNumber: 4,
      description:
        "Decorate frame with materials of your choice- paint on colors, glue on buttons, paste on stickers!",
    },
    {
      stepNumber: 5,
      description:
        "Measure picture of choice (ex. Family, sibling, pet photos, etc.) with a ruler, then measure the picture frame.",
    },
    {
      stepNumber: 6,
      description:
        "Use scissor to trim the picture to fit the picture frame box.",
    },
    {
      stepNumber: 7,
      description:
        "Glue or tape on the picture from the back and enjoy this keepsake picture frame!",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Handcrafted Picture Frames"
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
