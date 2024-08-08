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
        description: '(Place the "Fruit Scavenger Hunt" worksheet on the table in front of your child) "We are going to play a scavenger hunt game. We need to find different fruits and vegetables around the house."',
    },
    {
        stepNumber: 2,
        description: 'Let\'s see how many fruits and vegetables we can find around the house." (Different fruits and vegetables will be listed on the worksheet, but only use what you have in your household. (Place the various fruits and vegetables around the house) "Let\'s start with bananas, what color are they? Can you find them?" (Follow your child around the house and help them find the fruit/vegetable. Have them bring it back to the table) "How many bananas did we find?" "Can you write down the number we found in the box next to the word banana?" (Help your child write the correct number in the box next to the word banana)',
    },
    {
        stepNumber: 3,
        description: "Repeat these steps with the remaining fruits and veggies!",
    },
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Healthy Heart Scavenger Hunt"
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
