"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import photo from "/public/images/pregnancy_add_a_photo.svg";
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
  const takeawayText = `Being a mom, especially a first-time mom, can present with new stresses that sometimes feel overwhelming! The purpose of this activity is to give the mother a resource that will help her feel more relaxed, improve sleep, and better connect her with her little one. Utilizing even just one of these breathing techniques can be so beneficial to the emotional and physical well-being of both mom and baby! `;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Breathing Techniques for Pregnant Women"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
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
