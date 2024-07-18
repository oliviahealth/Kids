"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import photo from "../../../../../public/images/dashboard/adventure-bay/Group 114.png";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page3({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const takeawayText = `This is a low-cost, at-home activity that encourages children to be creative and 
  color their own coloring page, while also working on problem-soliving and memory recall by turning it 
  into a puzzle. This activity can be made more simple or complex based on your child's ability.  This 
  allows you to continue to challenge your child as they begin to get the hang of the activity and cut 
  the larger pieces into smaller ones. `;

  return (
    <>
      <Header
        logoSrc={logo}
        title=" DIY Puzzle"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <KeyTakeaways text={takeawayText} photoSrc={photo} photoAlt="Photo" />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
        rightHasLink={true}
        rightLinkHref={"/home"}
      />
    </>
  );
}
