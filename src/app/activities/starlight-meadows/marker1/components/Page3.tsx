"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import photo from "/public/images/dashboard/StarlightMeadows/addphoto.png";
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
  const takeawayText = `Sleep helps promote good health in many ways. It helps improve mental, physical, and emotiional well-being. Establishing a consistent sleep routine will help set your body's internal "clock" and improve the quality and amount of sleep you get each night. Improved sleep will improve your ability carry out your day to day responsibilities `;

  ;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Sleep Health"
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
