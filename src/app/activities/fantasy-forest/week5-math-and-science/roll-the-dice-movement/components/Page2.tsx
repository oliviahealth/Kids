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
      description:
        '(Place the "Roll the Dice Movement" worksheet on the table in front of your child.) “We are going to practice different exercises we can do and play a game with dice.”',
    },
    {
      stepNumber: 2,
      description: `“When the dice lands on a certain number, we have to do that movement. Can you grab our dice and roll first?”

(Watch your child roll the dice.)

(Whichever number it lands on, read aloud what your child/you must complete and have them count aloud as they do it.)

(Repeat for as long as you would like to play.)`,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Roll The Dice Movement"
        subtitle="Domain name - Fantasy Forest"
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
