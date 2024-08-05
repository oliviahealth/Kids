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
  const takeawayText = `Your child learned about how different objects can sink and float. An important part of developing your child's science and math skills is through developing curiosity in them. This activity can help to encourage curiosity in your developing child. This activity can be continued as your child grows older and you can encourage them to make their own guesses about what might sink or float. `;

;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Sink and Float"
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
