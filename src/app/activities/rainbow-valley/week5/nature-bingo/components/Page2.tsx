"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";
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
        description: "Print out or take a picture of the bingo card to have for reference during your search."
    },
    {
        stepNumber: 2,
        description: "Go outside and begin exploring."
    },
    {
        stepNumber: 3,
        description: "Check off each item on the list as you find it."
    },
    {
        stepNumber: 4,
        description: "4 items in a row (horizontally, vertically, or diagonally) will mean you have found a BINGO!"
    },
    {
        stepNumber: 5,
        description: "Feel free to keep finding items even when you have gotten a bingo."
    }
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Nature Bingo"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
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
