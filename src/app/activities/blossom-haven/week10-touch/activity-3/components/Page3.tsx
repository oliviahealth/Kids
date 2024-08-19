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
  const takeawayText = `The most impactful way you can promote your child's growth in their touch and sensory learning domains, is by letting them touch objects with different textures/feels. Your child is naturally curious person being aged 0-1 and they want to explore their surroundings, so why not let them in a safe way that promotes their growth and development. Continual use of this activity expands their knowledge and lets them gain insights on how objects feel and what different textures are supposed to feel like. This activity can be done throughout your child's life so by updating the items and textures on your texture board, your only going to let your child reach all of their future development milestones.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Activity 3"
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
