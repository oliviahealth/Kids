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
  const takeawayText = `Box breathing is a free  and effective way to relieve stress and calm yourself. Parenting can be very overwhelming at times, so box breathing is one way of quickly de-stressing, so that you can take care of yourself, as well as your family. `;

  ;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Stress Management - Box Breathing"
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
