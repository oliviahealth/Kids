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
      description: "Create a starting line/entrance. At a doorway, tape a line or hang streamers to show your child where to begin on the course.",
    },
    {
      stepNumber: 2,
      description: "Create some obstacles for your child to go over. Place some pillows for your child to crawl over if they are able. Assist them as needed.",
    },
    {
      stepNumber: 3,
      description: "Set up some of your child's stuffed animals or toys in the way. Show your child how to push the toys out of their way and continue on the obstacle course.",
    },
    {
      stepNumber: 4,
      description: "Place a mat with some of your child's favorite toys or snacks on it to indicate the finish line. Congratulate your child when they are able to make their way towards their finish line.",
    },
    {
      stepNumber: 5,
      description: "Expand and add in obstacles to your home course as needed. Continual use will strengthen and support your child to reach their milestones.",
    },
  ];


  return (
    <>
      <Header
        logoSrc={logo}
        title="Week 7 Activity A"
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
