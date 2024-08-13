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
        "First, make a list of services you know you are in need of during your pregnancy. This could be anything from social support from other pregnant women, parenting advice, or birthing support to more basic needs like clothes, food, housing, and more.",
    },
    {
      stepNumber: 2,
      description:
        "Next, using an internet source, go to the https://www.findhelp.org/ website.",
    },
    {
      stepNumber: 3,
      description:
        "Type in your zipcode, then click on the Health tab --> Sexual and Reproductive Health Tab --> Maternity Care tab.",
    },
    {
      stepNumber: 4,
      description: "Explore the available resources.",
    },
    {
      stepNumber: 5,
      description:
        "Match your needs to the services of the listed resources. Note: not all resources show up on the findhelp website. You may want to do your own internet search to find other businesses, local churches, and nonprofit organizations that provide further support. There are also tons of pregnancy and parenting support groups on social media websites such as Facebook that can be a great way to meet friends!",
    },
    {
      stepNumber: 6,
      description:
        "Make a list and contact the resources you are interested in. Using a piece of paper or technology device, write down the contact information of the support you are interested in.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Reaching Out to Available Resources"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
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
