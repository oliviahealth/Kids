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
        description: "Take out the book or the recording of Spot Goes to the Swimming Pool and say \"Let’s read our book, Spot Goes to the Swimming Pool.\" Read the book."
    },
    {
        stepNumber: 2,
        description: "“Now, can you tell me what you saw in the story in your own words? I am going to write down what you say as we go through the book.” Once you finish writing down what your child says, reread them to your child, pointing out what you are reading."
    },
    {
        stepNumber: 3,
        description: "Let your child rewrite them, copying the shapes of your letters if they choose."
    },
    {
        stepNumber: 4,
        description: "“Do you think Spot was tired after all of his activity?” Allow your child to say yes."
    },
    {
        stepNumber: 5,
        description: "“Did you notice the floaties Spot was wearing? Can you point to the floaties?” Allow your child to find floaties. “Floaties help Spot float in the pool so he doesn’t get as tired.”"
    },
    {
        stepNumber: 6,
        description: "“Did you notice Spot only got in the pool with his mom so she could watch him?” Allow your child to say yes. “It is important you only get in the pool with mom/dad’s supervision.”"
    },
    {
        stepNumber: 7,
        description: "“Following directions like Spot will keep you safe!”"
    }
];


  return (
    <>
      <Header
        logoSrc={logo}
        title="Spot Goes to the Swimming Pool"
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
