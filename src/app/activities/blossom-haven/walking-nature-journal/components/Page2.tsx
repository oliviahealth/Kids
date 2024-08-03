"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";
import Link from "next/link";
import photo from "/public/images/dashboard/adventure-bay/Group 114.png";
import arrow from "/public/images/dashboard/adventure-bay/next_arrow.png";
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
  const takeawayText = `Caregivers who continually journal and set time aside for this activity can reduce stress, better control their emotions, reduce their risk of postpartum depression, boost self-awareness, and improve their mental health and physical health.
  
  This journal will always be available to you. Anytime you start to feel anxious, stressed, or overwhelmed, you'll know what steps to take.

  While this journal is mainly used for your nature observations, this journal could also be used for keeping notes of your baby's growth!
  `;

  return (
    <>
      <Header
        logoSrc={headerIcon}
        title="Walking Nature Activity"
        subtitle="Caregiver Wellness - Blossom Haven"
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
