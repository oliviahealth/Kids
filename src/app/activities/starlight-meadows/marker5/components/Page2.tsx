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
      description: "Cut out your paper faces. This could be done by printing off the provided template, or by drawing your own!",
    },
    {
      stepNumber: 2,
      description:
        "Begin by filling your container with the sensory filling of your choice (beans, sand, rice, etc), and hiding the paper faces inside. ",
    },
    {
  stepNumber: 3,
  description: "Allow your child to dig in the container to find the faces. When they pull out a face, talk about the emotion it is with them. Here are some ideas to guide this conversation:\n\"Wow! You found a face! What emotion do you think they are feeling?\"\n\"Do you feel like that? When do you feel like that?\"\n\"I feel like that when....\"\n\"Let's make that face at each other - Ready? 1, 2, 3! (Make the face at each other)\"",
}
    
    
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Emotions Sensory Bin"
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
