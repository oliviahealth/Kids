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
  const takeawayText = `The purpose of this activity is to allow your child to explore their emotions and make connections to past events that provoked specific feelings. It is important for children to speak about their emotions and possibly even discuss strategies with their parents for dealing and processing specific feelings. This activity is meant for children, but it can be a fun activity for parents to participate in as well.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="The Rainbow Road"
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
