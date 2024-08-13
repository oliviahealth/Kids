"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";import Link from "next/link";
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
      description: "Find a comfortable place to lay down on your back, and place your child on your stomach where they can see your face. Talk to your child and place your fingers in front of their face to get them to try and reach out with their arms and hands. Make sure your child is trying to look up and support as needed.",
    },
    {
      stepNumber: 2,
      description: "Place your child on their tummy on the ground, and sit beside/behind them. With a toy, reach out on each side of the child and motivate them to reach out and grab for the toy.",
    },
    {
      stepNumber: 3,
      description: "Place a rolled up towel under your child's stomach while they are on the ground. Just like step two, place a toy in front of them to motivate reaching and grabbing. This step further promotes strengthening and mobility of their upper body muscles.",
    },
    {
      stepNumber: 4,
      description: "Lastly, join your baby on the ground. Place them on their stomach and you as well facing each other so that your child is looking at you. Talk, sing, and reach out to your child and try to get them to do the same. Help them move their arms and open their hands as needed.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Happy Tummy Workout"
        subtitle="Physical Activity - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <Activity steps={activitySteps} stepNumberColor="#F8E7BA" />
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
