"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../../public/images/dashboard/pregnancy/prenatal-icon.svg";
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
      description: "Start by choosing a consistent time each day, such as first thing in the morning, before bed, or during a quiet moment in the afternoon.",
    },
    {
      stepNumber: 2,
      description: "Select a comfortable, relaxing spot where you can sit or lie down.",
    },
    {
      stepNumber: 3,
      description: "Then, grab a book of your choice! A list of different book ideas can be found under the 'Books for your Baby' activity.",
    },
    {
      stepNumber: 4,
      description: "Set a timer if you would like and read aloud to your baby for 10-15 minutes.",
    },
    {
      stepNumber: 5,
      description: "Once you have finished, fill out the reading log found under this activity.",
    },
    {
      stepNumber: 6,
      description: "Record the date, the title of the book, and any thoughts you may have regarding the book or the experience itself!",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Daily Reading Routine"
        subtitle="Language, Literacy, & Speech - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
      />

      <Activity steps={activitySteps} stepNumberColor="#FDE3FF" />
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
