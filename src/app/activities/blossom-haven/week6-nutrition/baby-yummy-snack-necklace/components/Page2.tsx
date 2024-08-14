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
      description: "Gather child-safe foods that have holes in them, or able to be threaded through with a piece of string. At this age, it is safest to use baby cereal, dried fruit rings, thinly sliced cheese, and thinly sliced fruits.",
    },
    {
      stepNumber: 2,
      description: "Begin placing child-safe foods onto your string to make the necklace. Alternate the order of snacks so your child is continually observing the different foods.",
    },
    {
      stepNumber: 3,
      description: "Tie off the string and show it to your child. Say what each food item is and place the snack necklace on them. Let them play around and eat the snacks, but carefully watch and assist them as needed.",
    },
    {
      stepNumber: 4,
      description: "If child is not interested in the necklace, continue showing them the foods that are on there but feed them the snacks without the necklace. They will be interested in it on their own time.",
    },
    {
      stepNumber: 5,
      description: "As your child ages, change up the foods to put on a necklace. Always monitor your child to make sure they are able to safely eat the foods that you give to them.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Yummy Snack Necklace"
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
