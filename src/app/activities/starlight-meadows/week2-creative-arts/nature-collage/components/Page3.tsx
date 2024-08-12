"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import photo from "@/public/images/dashboard/StarlightMeadows/addphoto.png";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";
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
  const takeawayText = `This activity is a fun way to encourage your child to explore outside, which is great for their learning and health! Finding various parts of nature will help them learn what they look like, feel like, and they can begin to make connections about how parts of nature work together. This is also very helpful to improving their fine motor skills and creativity as they learn to glue and stick the items where they choose. Include the family by making the activity into a nature walk!`;

;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Nature Collage"
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
