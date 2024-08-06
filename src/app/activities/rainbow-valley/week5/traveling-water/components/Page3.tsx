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
  const takeawayText = `You have just completed an incredible science experiment. We hope you were amazed at the traveling water and got to learn how the process worked. It is so cool that water can be soaked up so easily by a paper towel and we hope you will try this activity again!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Traveling Water"
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
