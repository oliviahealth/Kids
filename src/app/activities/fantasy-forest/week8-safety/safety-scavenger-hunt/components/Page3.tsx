"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import Link from "next/link";
import photo from "/public/images/activities/fantasy-forest/addAPhoto.svg";
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
  const takeawayText = `Congratulations on completing the Safety Scavenger Hunt! You learned so much about your home and the safety items within it. Some of the things you learned are how to stay aware, use safety tools, follow safety rules, and think ahead. Keep using the safety items you found so you can stay as safe as possible! Here is a sticker for your good work!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Safety Scavenger Hunt"
        subtitle="Safety - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
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
