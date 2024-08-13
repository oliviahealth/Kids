"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/rainbow-valley/week5/logo.svg";
import Link from "next/link";
import photo from "/public/images/activities/rainbow-valley/week5/addAPhoto.svg";
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
  const takeawayText = `The purpose of this experiment was to teach you why it rains! We hope that you learned a lot and had a great time doing so! If you enjoyed this science project, we urge you to make it as many times as you would like! Remember, it’s not too early to become a little scientist, keep asking questions!`;


  return (
    <>
      <Header
        logoSrc={logo}
        title="Cloud in a Jar"
        subtitle="Math & Science - Rainbow Valley"
        homeLink="/home"
        subtitleColor="#E75858"
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
