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
  const takeawayText = `One of the best ways to promote your child's natural growth is by letting them explore the world around them through touching objects. Using a sensory bin for your child to touch and explore objects is a great way to introduce them early on, and continuing with this activity and new objects will only improve your child's growth. This activity ensures your child will start to begin to learn and remember items, and by telling them each item they grab they also learn the names of those items. This activity works best at any age and as your child grows you can continue showing them more and more new items to ensure they gain the skills and knowledge to reach their growth and development milestones.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby’s Sensory Bin"
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
