"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import photo from "/public/images/dashboard/blossomHaven/shared/keyTakeway.png";
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
  const takeawayText = `The first few months of your child's life requires a lot of effort on the breastfeeding caregiver which can cause some discomfort on their body. More than likely you'll experience some sort of ache or soreness that will only continue to grow unless you address it now. Using these stretches, exercises, and tips will help to ease the discomfort you have now, and ensure you have the steps needed in case those feelings come again. A healthy caregiver is key to having a healthy child, and following these steps will make sure you are well enough to get your child their nutrients and on track in their growth and development.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Breastfeeding Relief Tips for Caregiver"
        subtitle="Nutrition - Blossom Haven"
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
