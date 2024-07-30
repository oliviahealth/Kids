"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
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
      description: "Print out pictures of different animals or if you cannot print pictures, just use your computer to search up pictures of animals to show your toddler. Feel free to use the attached template for this activity! These can be animated or real photos! Options for animals should be animals with distinct and easy to pronounce sounds, such as cows, dogs, sheep, owls, etc.! ",
    },
    {
      stepNumber: 2,
      description:
        " Show your child a picture of an animal and ask, \"What animal is this?\" Depending on where they are developmentally, you may have to answer the question for them. Don't worry! This is still good for their learning; toddlers understand you a lot more than you may think! They are just still learning to use their own words. You can answer the question by saying, \"This looks like a cow! Look, it has black and white spots.\"",
    },
    {
      stepNumber: 3,
      description:
        "Once you or your toddler name the animal, say \"What sound does a cow make?\" Again, you may have to answer the question, but someday they will be able to answer on their own! If you answer the question, say, \"The cow says 'Moo!'\"",
    },
    {
      stepNumber: 4,
      description: "Repeat this with a few different animals. You may only get through a couple of animals in one sitting before your toddler wanders off. This is okay, you do not have to make them learn every sound in one sitting! This activity can be paused, continuted, and repeated at anytime.",
    },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title='The Cow Says "Moo!"'
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
