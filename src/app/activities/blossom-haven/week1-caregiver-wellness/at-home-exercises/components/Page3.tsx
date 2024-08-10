"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";
import Link from "next/link";
import photo from "/public/images/activities/blossom-haven/addAPhoto.svg";
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
  const takeawayText = `These four exercise routines are designed for you to do at home at you own pace in a place where you feel comfortable and relaxed. Exercising benefits your physical and mental health by providing you with more energy, improving yout mood/emotions, and improving your sleep. With continual practice, these exercises will become a normal routine and help you ensure you're ability to care for your growing child.`;

  return (
    <>
      <Header
        logoSrc={headerIcon}
        title="At-Home Exercises"
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
