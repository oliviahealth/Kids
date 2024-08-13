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
      description:
        "Make a list of your needs and wants. Consider current and upcoming expenses and identify what is necessary and what can be lived without. Determine how much you are spending on these items or categories per month and identify categories where you can reduce spending to save for pregnancy and new baby expenses.",
    },
    {
      stepNumber: 2,
      description:
        "Make a plan to build an emergency fund. Decide how much money is reasonable to include in this fund and how much you will set aside each month to build it.",
    },
    {
      stepNumber: 3,
      description: `Make a list of essential new purchases for your baby and estimate their costs. Some examples include:
    1. Crib
    2. Crib Mattress
    3. Highchair
    4. Car Seat
    5. Stroller
    6. Baby Monitor
    7. Clothes
    8. Diapers
    9. Food
    10. Toys
    Include a cost per month if these purchases will be recurring.`,
    },
    {
      stepNumber: 4,
      description: `Make a list of estimated medical costs. Some examples include:
    1. Prenatal care
    2. Labor and delivery costs
    3. Postpartum care
    4. Baby's 1st year of check-ups and vaccinations`,
    },
    {
      stepNumber: 5,
      description:
        "Make a plan to save for these expenses. With your lists of needs and wants, your emergency fund plan, and new expenses for you and your baby, start shifting your spending habits to meet these needs before your baby arrives.",
    },
    {
      stepNumber: 6,
      description: `Remember these tips to save money for your baby:
    - Use toy libraries.
    - Borrow books from your local library.
    - Consider breastfeeding instead of formula feeding.
    - Host a baby shower to assist with big purchases.
    - Research ways to negotiate or reduce hospital bills.
    - Shop second-hand.
    - Make baby food at home.
    - Seek help from local and government programs.`,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Fianncial Planning for Baby's First Year"
        subtitle="Math & Science - Prenatal Paradise"
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
