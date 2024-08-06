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
        description: "“This week we have been talking about what it means to be a good friend. For this activity we are going to use The Friend Flower to draw out what it means to be a good friend.” (Place Activity Sheet 2 in front of the child)"
    },
    {
        stepNumber: 2,
        description: "“Before we draw and color. Let’s name 6 qualities that make a good friend.” (As your child names the 6 qualities, write each one next to each petal on Activity Sheet #)"
    },
    {
        stepNumber: 3,
        description: "“Now that we have named our 6 friendship qualities, we are going to talk about each one. After we talk about each one, we are going to draw a picture that best represents that quality.”"
    },
    {
        stepNumber: 4,
        description: "“For this quality (name the first quality), what do you think about when you hear this word?” (Let your child explore that thought.)"
    },
    {
        stepNumber: 5,
        description: "“Now, what action shows (name the first quality)?” (Let your child explore that thought.)"
    },
    {
        stepNumber: 6,
        description: "“What should we draw to represent that?” (Let your child explore that thought and have them name what should be drawn.)"
    },
    {
        stepNumber: 7,
        description: "“Great idea, can you draw that?” (Let them draw, help if needed.) (Repeat the same process for the 5 remaining qualities. By the end each petal should have a picture drawn in it.)"
    }
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="The Friendship Flower"
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
