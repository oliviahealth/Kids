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
  const takeawayText = `Constructing a mobile for your 0-1 year old child may take some time to make, but the benefits that come from this activity significantly put your child on track to reach their touch and sensory milestones. This activity directly aligns with the touch and sensory domain because your child will begin observing their new mobile, and try to reach out and feel the objects that are on there. This mobile gives your child the opportunity to view what objects are on their mobile, feel them, and use it as a calming sight when trying to fall asleep. Letting your child observe and reach to touch this mobile is the purpose of this activity, and will promote further growth in your child towards their development milestones.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Activity 2"
        subtitle="Touch - Blossom Haven"
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
