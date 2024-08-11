"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/activities/fantasy-forest/header-icon.svg";
import photo from "@/public/images/activities/fantasy-forest/add-photo.svg";
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
  const takeawayText = `You have just learned more about 6 emotions that you can use to express what you are feeling inside. Make sure you also use your words when you are feeling a certain way. Congrats on getting one sticker closer to your Emotional, Behavioral, and Social badge! Good job expressing your emotions!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Cardboard Emotions"
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
