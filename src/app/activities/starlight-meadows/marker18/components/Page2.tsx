"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";
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
      description: "Grab a piece of paper or a canvas, and some fun paint colors! ",
    },
    {
      stepNumber: 2,
      description:
        "Help your child cover their hand in paint and show them how to create their own hand print(s). Allow them to have fun with this! It doesn't have to be a perfect painting.",
    },
    {
      stepNumber: 3,
      description:
        "Allow the handprints to dry.",
    },
    { stepNumber: 4, description: "Help your child add finishing touches to the painting (stem for flowers, googly eyes or dots for animal eyes, etc.)" },
    {
      stepNumber: 5,
      description:
        "Hang their artwork on the wall or fridge to help promote their self-esteem!",
    },
    {
      stepNumber: 6,
      description:
        "Tip: This activity can get messy, so it might be a good idea to do this outside to avoid having to clean up paint inside your house.",
    },
    {
      stepNumber: 7,
      description:
        "Reminder: Children at this age love putting things in their mouths! Make sure to use non-toxic paint for kids and to closely supervise your child during this activity.",
    },
    
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Handprint Painting"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
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
