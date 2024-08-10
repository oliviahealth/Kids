"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";
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
      description: "Place painting utensil (this could be a sponge, paintbrush, etc) into your container of water, and set out paper. For younger children, you may want to dip the painting utensil in the water first, and then hand it to your child. ",
    },
    {
      stepNumber: 2,
      description:
        "Show your child how to take the painting utensil out of the water, and brush, splatter, etc on the paper.",
    },
    {
      stepNumber: 3,
        description: "Allow them to explore and \"paint\" whatever they would like!",

    },
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Mess-Free Water Painting"
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
