"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
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
      description:
        "Provide your child with one of the blank coloring pages provided. ",
    },
    {
      stepNumber: 2,
      description:
        "Grab a pack of markers or crayons and allow your child to complete their coloring page. ",
    },
    {
      stepNumber: 3,
      description:
        "After their coloring page is complete, you can use a pair of scissors to cut the paper along the dotted lines to create a puzzle for your child. Depending on the age of your child and their developmental abilities, you can decide how many squares you would like to cut the page into. You can start with a small number of large puzzle pieces (cut along the thicker dotted lines) and slowly increase the number of pieces as your child gets the hang of it by cutting the larger pieces into smaller ones (cut along the thinner dotted lines).",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title=" DIY Puzzle"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <Activity steps={activitySteps} stepNumberColor="#C5FFFC" />
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
