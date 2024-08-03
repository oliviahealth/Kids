"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import photo from "../../../../../../public/images/dashboard/StarlightMeadows/addphoto.png";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
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
  const takeawayText = `In this activity, you had the opportunity to include math and science into play with your child! By counting, talking about where the blocks were, talking about their sides, or any conversation you had with your child today, you built up their exposure to math even more. If you enjoyed this activity, you can integrate it in your daily life to provide even more engaging math exposure to your child! For example, the next time you are playing with toys, you can: count how many there are, group them by similarities, etc.`;


  return (
    <>
      <Header
        logoSrc={logo}
        title="Blocks"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
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
