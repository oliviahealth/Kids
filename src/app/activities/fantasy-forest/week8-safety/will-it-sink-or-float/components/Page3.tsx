"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page3({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activityStepsPart2 = [
    {
      stepNumber: 1,
      description: "Let’s use this pen. Hold the pen. How does it feel? (Let your child talk about the pen. Offer some of your own opinions) (Write pen in the box) Do you think the pen will sink or float in the water? – sink, float",
    },
    {
      stepNumber: 2,
      description: "(Accept your child’s response and circle or let them circle their answer on the paper) Let’s use this egg. Hold the egg. How does it feel? (Let your child talk about the egg. Offer some of your own opinions) (Write egg in the box) Do you think the egg will sink or float in the water? – sink, float",
    },
    {
      stepNumber: 3,
      description: "(Accept your child’s response and circle or let them circle their answer on the paper) Try this with other items if you would like to add more.",
    },
    {
      stepNumber: 4,
      description: "(Fill the bathtub or large food container with water) Let’s one by one place the items in the water and see if they will sink or float",
    },
    {
      stepNumber: 5,
      description: "Let the child place the object in the water and observe what happens. What happened to the penny, cup, toy, pen, egg, etc.? – sink, float (Circle or let your child circle their answer on the paper) Were we right or wrong? – right, wrong (Assist your child in discussing whether you guessed right or wrong) (Repeat this step with each item)",
    },
    {
      stepNumber: 6,
      description: "Good job! We got – (#) -- right.",
    },
  ];      

  return (
    <>
      <Header
        logoSrc={logo}
        title="Will it Sink or Float?"
        subtitle="Safety - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <Activity steps={activityStepsPart2} stepNumberColor="#B5F6D0" />
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
