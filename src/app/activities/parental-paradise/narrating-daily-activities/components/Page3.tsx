"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/pregnancy/prenatal-icon.svg";
import photo from "../../../../../../public/images/pregnancy_add_a_photo.svg";
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
  const takeawayText = `Talking to your baby can be very helpful in developing language skills. It's important to start teaching your baby new skills as soon as possible because YOU are they're lifelong teacher! Narrating throughout your pregnancy is just one way you can get a head start!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Narrating Your Daily Activities"
        subtitle="Language, Literacy, & Speech - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
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
