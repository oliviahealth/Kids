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
  const activitySteps = [
    {
        stepNumber: 1,
        description: "Gather 10 items around the house or outside that your child wants to see if they will sink or float. (A few ideas include a penny, plastic cup, lid, toys, egg, etc.)"
    },
    {
        stepNumber: 2,
        description: "Write down the names of each item in a new line on the worksheet."
    },
    {
        stepNumber: 3,
        description: "Now, by each item, discuss what it is and what would make it sink or float. Circle sink or float in the box next to the item."
    },
    {
        stepNumber: 4,
        description: "After you have done that with each item, fill a bucket or bathtub with water."
    },
    {
        stepNumber: 5,
        description: "Drop each item into the water and circle what the item actually did in the box next to the original prediction. Take time to discuss why each item sank or floated."
    },
    {
        stepNumber: 6,
        description: "Count the number of items that were correct and say “Great job! We got (#) right!”"
    }
];


  return (
    <>
      <Header
        logoSrc={logo}
        title="Will it Sink or Float?"
        subtitle="Math and Science - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <Activity steps={activitySteps} stepNumberColor="#B5F6D0" />
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
