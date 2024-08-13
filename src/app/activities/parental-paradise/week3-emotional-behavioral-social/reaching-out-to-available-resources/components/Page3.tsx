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
  const takeawayText = `Pregnancy, birth, and caring for a baby comes with many lifestyle 
changes. It truly takes a village! This is why it is important for you as a caregiver to build a supportive 
community for you and your baby to flourish. This activity helps you take
 the first step in that process:
finding help! 

Once you complete this 
activity, you will recieve an activity completion sticker for the Emotional, 
Behavioral, & Social 
Learning Domain. `;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Reaching Out to Available Resources"
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
