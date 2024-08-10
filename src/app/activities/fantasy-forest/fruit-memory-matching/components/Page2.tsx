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
        description: '(Place the "Fruit Memory Game" Worksheet and scissors in front of your child.) "We are going to play a fruit memory game today. First, we need to cut out each square card to make a card set." (Cut out the cards to make a set.)',
    },
    {
        stepNumber: 2,
        description: 'Let’s turn each card over and shuffle them around so that we make them in random order." (Allow your child to help them shuffle.) "Now let’s line the cards up for the game." (Line the faced down cards in a square table.)',
    },
    {
        stepNumber: 3,
        description: 'Let’s begin playing the memory game. We must flip the card over to see what fruit it is and then flip another card over to see if it’s a match. If it’s a match, we collect the cards and keep them. If they are not a match, we turn the cards back over and try again." (Play with your child and have him/her read aloud each fruit after they flip the card over.) (You can discuss each fruit in greater detail when you collect them in pairs. Talk about what these fruits pair well with or what different foods your child can make with each fruit.)',
    },
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Fruit Memory Matching"
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
