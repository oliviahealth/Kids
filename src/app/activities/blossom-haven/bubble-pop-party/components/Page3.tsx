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
  const takeawayText = `Bubble play lets children observe the world around them, and try to understand what bubbles even are. Your 0-1 year old child is naturally curious and this activity gives them a chance to begin working on their scientific skill development. You can also help your child by repeating the word "bubble" so they become familiar with what they're looking at, saying what shape the bubbles are, and saying "pop" when bubbles pop as this also helps the child try to understand bubbles. The key part of this activity is your child observing their surroundings to make sense in their head, that will help them in their other learning domains`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Bubble Pop Party!"
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
