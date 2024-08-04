"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/activities/fantasy-forest/header-icon.svg";
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
      description: "Gather the 6 different faces on from the activity sheet, or create your own expressive faces with markers",
    },
    {
      stepNumber: 2,
      description:
        "Prompt your child with each face, and ask them to assign the proper written emotion to each one. Provide guidance where needed, and help them tape the descriptive text under the paper face",
    },
    {
      stepNumber: 3,
      description:
        "Upon taping the text under the corresponding expression, ask your child to think of a time they felt that emotion, and ask them to explain the situation. Talk them through their emotions, and assure them that what they feel is normal",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Emotion Matching"
        subtitle="Emotional, Behavioral, Social - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <Activity steps={activitySteps} stepNumberColor="#A7F2C5" />
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
