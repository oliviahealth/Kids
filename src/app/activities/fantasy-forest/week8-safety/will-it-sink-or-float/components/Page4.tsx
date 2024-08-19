"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import Link from "next/link";
import photo from "/public/images/activities/fantasy-forest/addAPhoto.svg";
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
  const takeawayText = `The purpose of this activity is to help your child begin to learn what items float in water and what items do not. This is a fun and educational acitivity, but it also allows the parent to open up the conversation of water safety with their child. It is never to early to educate your child on safe and cautious actions that should be taken to keep them safe around water.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Will it Sink or Float?"
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
