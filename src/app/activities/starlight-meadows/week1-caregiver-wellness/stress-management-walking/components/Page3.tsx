"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/dashboard/StarlightMeadows/nightlogo.svg"
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
  const takeawayText = `Walking is a great form of low-impact physical activity. Pairing walking with a mindfulness activity (such as this one) is an effective way to de-stress and center yourself. 

This activity can be used again and again as free and simple way to destress. Some people like to make walking part of their weekly routine, and others like to do it whenever they feel like it - do whatever works best for you!`;

  ;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Stress Management - Walking"
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
