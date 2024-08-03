"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import photo from "../../../../../../public/images/dashboard/StarlightMeadows/addphoto.png";
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
  const takeawayText = `Interacting with language, whether it be through listening, babbling, or even saying words, is an important part of your child's development. In this activity, you allowed them to hear more phrases and words, which will benefit them in the long term. Continuing to speak to your child during your daily activities can allow them to further benefit from this activity on a dialy basis! For example, next time you are cooking, cleaning, or playing, talk out loud about things you notice or how you feel about the activity. `;

;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Walking Tour"
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
