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
      description: (
        <>
          Go to the WIC Meals of the Month website page by clicking on this link:{" "}
          <a href="https://wicworks.fns.usda.gov/resources/wic-meals-month-index" target="_blank" rel="noopener noreferrer">
            WIC Meals of the Month
          </a>.
        </>
      ),
    },
    {
      stepNumber: 2,
      description: "Navigate to the recipe collections. Each collection focuses on different nutrient needs for pregnant women.",
    },
    {
      stepNumber: 3,
      description: "Pick at least 3 recipes from 3 different collections. You can pick these recipes based on your known nutrient needs or your taste preference.",
    },
    {
      stepNumber: 4,
      description: "Once you have chosen 3 recipes, print the recipe pages using the print button in the top left corner of the page. If you do not have access to a printer, write down the ingredients and instructions on a piece of paper.",
    },
    {
      stepNumber: 5,
      description: "Store your recipes in an easily accessible area until you are ready to use them. Bring each recipe sheet to the grocery store to check off needed ingredients!",
    },
    {
      stepNumber: 6,
      description: "Plan to try these recipes throughout your week!",
    },
    {
      stepNumber: 7,
      description: "Explore more recipes on the USDA website, and try as many as you'd like!",
    },
  ];
   

  return (
    <>
      <Header
        logoSrc={logo}
        title="Trying New Recipes"
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
