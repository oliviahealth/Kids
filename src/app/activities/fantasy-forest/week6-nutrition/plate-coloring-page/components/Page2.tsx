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
        description: 'Print out the coloring sheet along with coloring pencils, crayons, or markers. Set it in front of your child and say "Today we are going to learn the importance of eating a well-balanced meal."',
    },
    {
        stepNumber: 2,
        description: 'Point to the 5 categories as you say "These are the 5 categories of a healthy meal."',
    },
    {
        stepNumber: 3,
        description: 'Start by drawing and coloring a fruit in the section labeled "Fruit."',
    },
    {
        stepNumber: 4,
        description: 'Repeat step 3 for the "Grain", "Protein", "Dairy", and "Vegetables" sections.',
    },
    {
        stepNumber: 5,
        description: 'Once the coloring page is finished, say "Do you see how many different foods are on your plate? This looks like a yummy, balanced plate. Good job!"',
    },
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="My Plate Coloring Page"
        subtitle="Nutrition - Fantasy Forest"
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
