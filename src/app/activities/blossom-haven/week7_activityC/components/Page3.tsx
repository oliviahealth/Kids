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
  const takeawayText = `The age that a child begins to walk varies among all children. While you can't predict when your child will walk, you can always prepare them for that day. Doing these steps are simple enough so that anyone can begin the process of strengthening your child's lower body and leg muscles needed to begin walking. These steps ensure your child gets on track to reach their physical activity milestones and prepares them for future ones ahead. Hopefully by doing these steps, you'll have your child happily walking around the house all thanks to your help.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Week 7 Activity C"
        subtitle="Physical Activity - Blossom Haven"
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
