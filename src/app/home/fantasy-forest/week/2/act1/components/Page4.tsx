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
  const takeawayText = `This is a low-cost, at-home activity that can encourage physical activity, promote 
  family time, and teach the child the importance of improving their environment. It can also be used as an 
  "act of kindess" activity if the child makes these rocks as a gift for someone else. Overall, this acitivity
   can encourage creativity while also allowing you and your child to get outside and enjoy the environment 
   around you`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Rock Painting"
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
