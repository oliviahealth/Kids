"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import Link from "next/link";
import photo from "/public/images/activities/blossom-haven/addAPhoto.svg";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";
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
  const takeawayText = `Growth in a child's math and science milestones comes from exposure to their world, letting them make observations, and giving them the ability to explore what's in front of them. Your child will not understand the difference between oil and water, but the bright colors and lava lamp experience gets them interested and wanting to learn from the sensory bag. Creating more sensory bags with different colors and varied amounts of oil/water will also support your child’s development. Continual exposure of the sensory bag is key to your child understanding their world, and this activity will get them on track to reach their math & science growth and development milestones in no time.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Colorful Oil and Water Science Bag"
        subtitle="Math & Science - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
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
