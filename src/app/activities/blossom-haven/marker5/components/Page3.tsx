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
  const takeawayText = `Child socialization can be described as exposing  your baby to their environment and world, so they can observe and learn with the support of their caregiver. Through socialization at home, in nature, and in public locations, your baby will begin to learn about emotions, grow in their bond with you, and learn new ways to communicate!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Day Out!"
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
