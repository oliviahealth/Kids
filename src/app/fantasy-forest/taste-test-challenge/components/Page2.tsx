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
        description: "Prepare the muffin tin (or a plate) with the food items you selected by placing each food group in their own sections."
    },
    {
        stepNumber: 2,
        description: "Place the tray in front of your child and say, “Today we are going to explore one of our five senses, our sense of taste. We are going to do this by tasting the food in front of you.”"
    },
    {
        stepNumber: 3,
        description: "Set the Activity Sheet (or one that is hand drawn) in front of your child and say, “While we are tasting the items in front of us, we are going to complete this activity sheet.”"
    },
    {
        stepNumber: 4,
        description: "Point to the first food item and say, “Do you know what this item is named?” Let your child answer and write the name on the activity sheet."
    },
    {
        stepNumber: 5,
        description: "“Before we try it, do you think this food will be salty, sweet, or sour?” Circle their answer."
    },
    {
        stepNumber: 6,
        description: "“Let’s try it!” Let your child eat the food item and taste it. “What do you think? Is it what you thought?” Help them write their responses in the Were you Right column. “Was it yucky or yummy?” Have them color in the smiling face if they liked it and the frowning face if they didn’t."
    },
    {
        stepNumber: 7,
        description: "“Let’s do it again!” Repeat steps 4-6 for the next items."
    }
];


  return (
    <>
      <Header
        logoSrc={logo}
        title="Taste Test Challenge"
        subtitle="Language, Literacy, and Speech - Fantasy Forest"
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
