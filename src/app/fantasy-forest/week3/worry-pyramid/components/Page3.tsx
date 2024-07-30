"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/activities/fantasy-forest/header-icon.svg";
import photo from "../../../../../../public/images/activities/fantasy-forest/add-photo.svg";
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
  const takeawayText = `Great job! You just finished practicing a way to decrease worry with your worry pyramid. Use this when you are feeling like your thoughts are hard to slow down or when you feel worried. You also earned a sticker! We are proud of you for practicing these skills. Keep it up!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Worry Pyramid"
        subtitle="Emotional, Behavioral, Social - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
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
