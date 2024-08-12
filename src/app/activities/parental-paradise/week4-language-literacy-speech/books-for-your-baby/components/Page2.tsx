"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
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
      description: "\"Can't Wait to Show You: A Celebration for Mother's to Be\" by Jacqueline Boyle and Susan Lupone Stonis.",
    },
    {
      stepNumber: 2,
      description: "\"I Wish for You\" by David Wax.",
    },
    {
      stepNumber: 3,
      description: "\"The Wonderful Things You Will Be\" by Emily Winfield Martin.",
    },
    {
      stepNumber: 4,
      description: "\"I Can't Wait To Meet You!\" by Dr. Gary Benfield.",
    },
    {
      stepNumber: 5,
      description: "\"You Were Worth the Wait\" by Stephanie and Alex Booe.",
    },
    {
      stepNumber: 6,
      description: "\"Oh, Baby, the Places You'll Go!\" by Trisch Rabe.",
    },
    {
      stepNumber: 7,
      description: "\"Love You Forever\" by Robert Munsch.",
    },
    {
      stepNumber: 8,
      description: "\"When God Made You\" by Matthew Paul Turner.",
    },
    {
      stepNumber: 9,
      description: "\"Ma! There's Nothing to Do Here! A Word from your Baby-in-Waiting\" by Barbara Park.",
    },
    {
      stepNumber: 10,
      description: "\"Bedtime Book for Bump\" by Ruth Symons and Anneli Bray.",
    },
  ];   

  return (
    <>
      <Header
        logoSrc={logo}
        title="Books for your Baby!"
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
