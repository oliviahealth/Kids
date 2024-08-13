"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import photo from "/public/images/pregnancy_add_a_photo.svg";
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
  const takeawayText = `It is normal to experience fear and worry about 
pregnancy and birth, but it is important not to let these negative emotions and thoughts consume you. Practicing positive affirmations helps you to fight your fears with the courage, strength, and confidence to give birth. Practicing your list 
of affirmations each day throughout your pregnancy will better prepare you for your birth to come! 

Once you complete this 
activity, you will receive an activity completion sticker for the Emotional, 
Behavioral, & Social 
Learning Domain. `;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Birth Affirmations"
        subtitle="Emotional, Behavioral, & Social - Prenatal Paradise"
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
