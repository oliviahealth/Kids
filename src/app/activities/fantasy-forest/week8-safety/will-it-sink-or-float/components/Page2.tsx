"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
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
  const activityStepsPart1 = [
    {
      stepNumber: 1,
      description: "(Place the “Will it sink or float?” worksheet and pencil on the table in front of your child) “We are going to gather some items and see if they will sink or float.”",
    },
    {
      stepNumber: 2,
      description: "(Refer to list of home item ideas and have those items placed on the table) “Let’s think of some items to use.”",
    },
    {
      stepNumber: 3,
      description: "(Go through each item you will use and point and let the child touch/hold the item.) “Let’s use this penny. Hold the penny. How does it feel?” (Let your child talk about the penny. Offer some of your own opinions) (Write penny in the box) “Do you think the penny will sink or float in the water? – sink, float”",
    },
    {
      stepNumber: 4,
      description: "(Accept your child’s response and circle or let them circle their answer on the paper) “Let’s use this plastic cup. Hold the cup. How does it feel?” (Write cup in the box) “Do you think the cup will sink or float in the water? – sink, float”",
    },
    {
      stepNumber: 5,
      description: "(Accept your child’s response and circle or let them circle their answer on the paper) “Let’s use this toy. Hold the toy. How does it feel?” (Let your child talk about the toy. Offer some of your own opinions) (Write toy in the box) “Do you think the toy will sink or float in the water? – sink, float”",
    },
    {
      stepNumber: 6,
      description: "(Accept your child’s response and circle or let them circle their answer on the paper)",
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

      <Activity steps={activityStepsPart1} stepNumberColor="#B5F6D0" />
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
