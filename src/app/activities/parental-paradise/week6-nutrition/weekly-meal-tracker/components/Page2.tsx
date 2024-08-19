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
      description: "First, find a notebook, or you can use the template we have provided you. You are going to use this to track each meal you eat every day!",
    },
    {
      stepNumber: 2,
      description: "Each day, after you eat a meal, record what you ate under the appropriate category on the Meal Tracker. Record breakfast, lunch, dinner, and any snacks you consumed. You may also record your drinks.",
    },
    {
      stepNumber: 3,
      description: "At the end of each day, write a few sentences describing how you felt that day. Record your energy levels, mood, and any physical symptoms you noticed.",
    },
    {
      stepNumber: 4,
      description: "At the end of each week, look back at each day and note any changes in energy levels, mood, and physical symptoms from day to day. Keep track of the foods you ate on the days you felt the best.",
    },
    {
      stepNumber: 5,
      description: "After a while, you should hopefully recognize patterns on what foods make you feel better and what foods make you feel worse. You will see how your diet is affecting your overall well-being, and you can make the necessary adjustments to your meal planning!",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Weekly Meal Tracker"
        subtitle="Nutrition - Prenatal Paradise"
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
