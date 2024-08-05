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
  const takeawayText = `In this activity, your child will  explore the world around them, learning about colors, and using their five senses to develop and grow. Exposing your child to sensory experiences to reach their growth and development milestones can easily be reached through creative arts activities. Doing this fun and simple colored ice cube activity introduces your child to new colors, new touch feelings, and allows you to bond  with your baby. By doing this activity, you'll begin to see your baby develop new social, motor, and communication skills as they grow! 
`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Colored Ice Cube Melting Activity"
        subtitle="Creative Arts - Blossom Haven"
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
