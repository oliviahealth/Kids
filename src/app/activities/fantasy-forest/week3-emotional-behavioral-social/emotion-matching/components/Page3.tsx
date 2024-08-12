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
  const takeawayText = `The purpose of this activity is to help your child recognize and understand their own emotions and the emotions of others. You can continue practicing this activity by pausing when your child is watching their favorite show or cartoon and asking them, "What do you think this character is feeling right now?" This thought-provoking question will help your child identify different expressions in various situations, further aiding them in associating emotions with different actions.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Emotion Matching"
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
