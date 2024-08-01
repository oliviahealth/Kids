"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import photo from "@/public/images/dashboard/blossomHaven/shared/keyTakeway.png";
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
  const takeawayText = `The "Baby's Magic Mirror" mirror play seems like a fairly simple activity, but the benefits this activity brings shows how important it is to engage in this activity. Mirror play allows your baby to gain self awareness, regulate their emotions, and gain more knowledge of the world around them. These key learnings are what emotional, behavioral, and social milestones aim to achieve in growing children.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Magic Mirror!"
        subtitle="Emotional, Behavioral, & Social - Blossom Haven"
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
