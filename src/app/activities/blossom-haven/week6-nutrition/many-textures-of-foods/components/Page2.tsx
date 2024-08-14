"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
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
      description: "Gather child-safe snacks, fruits, vegetables, purees, and/or mashed foods together. Make sure any foods you have are ones your child can safely eat and not at risk for choking.",
    },
    {
      stepNumber: 2,
      description: "For dry snacks, you should have ones that are big enough for child to eat, break some up in smaller pieces, and even have some finely broken apart. This ensures child can safely eat them and will explore the different textures of the snacks.",
    },
    {
      stepNumber: 3,
      description: "For fruits and vegetables, make some slices that are small enough for baby to have in one bite, smaller finely chopped ones, and can even mash some if needed. Again, this helps the child explore the different textures.",
    },
    {
      stepNumber: 4,
      description: "For purees and mashed foods, let the child see and taste the food to explore in their mouth. If you have the actual food item, show them that this is the same thing and let them see the whole food item.",
    },
    {
      stepNumber: 5,
      description: "Remember to show them all of their food options, the names of the foods they're eating, and your child is safely able to eat the foods you are giving them.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="The Many Textures of Foods"
        subtitle="Nutrition - Blossom Haven"
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
