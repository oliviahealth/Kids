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
  const takeawayText = `This activity helped your toddler learn about different animals and the noises they make. Children at this age understand a lot of words that we are saying, even if they may not be able to say many words back yet. This activity is helpful for exposing your toddler to different sounds and helping them practice making these sounds on their own. It also helps them draw connections between what an animal looks like, and what it sounds like. `;

;

  return (
    <>
      <Header
        logoSrc={logo}
        title='The Cow Says "Moo!"'
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
