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
      description: "We are going to play a game and pretend we are swimming in a pool together. I will give you directions on how to swim and show you how to do it. You follow me and do what I say, and I will show you what to do. (Begin walking with your child following.)",
    },
    {
      stepNumber: 2,
      description: "Walking slowly... (Walk slowly and observe to see that your child is following you and doing the same thing.) Let’s hold our breath now. Holding breath... (Inhale and hold for 3 seconds then exhale and watch your child do the same.) Freestyle... (Move arms in freestyle manner and observe your child freestyling behind you.) Backstroke... (Move arms in backstroke manner and observe your child backstroking behind you.)",
    },
    {
      stepNumber: 3,
      description: "Frog/breaststroke... (Move arms in backstroke manner and observe your child backstroking behind you.)",
    },
    {
      stepNumber: 4,
      description: "Now let’s get on the ground and practice kicking (Sit on the ground with your feet in front of you and observe your child doing the same.) Little flutter kicks... (Flutter kick your feet and observe your child flutter kicking their feet too.) Big kicks... (Big kick your feet and observe your child kicking their feet too.)",
    },
    {
      stepNumber: 5,
      description: "Now let’s sing a song (sing to the tune of “Wheels on the Bus”) (As you sing the song, use your arms and legs to practice swimming)",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Let’s Swim!"
        subtitle="Safety - Fantasy Forest"
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
