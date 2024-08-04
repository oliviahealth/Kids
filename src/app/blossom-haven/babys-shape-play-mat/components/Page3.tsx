"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import Link from "next/link";
import photo from "/public/images/activities/blossom-haven/addAPhoto.svg";
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
  const takeawayText = `In order for your 0-1 year old child to reach their math and science milestones, getting them exposed to shapes and how to identify them is vital to their growth and development. This activity gets your child exposed to shapes of certain objects. With caregiver aid where necessary, the child will be on track to reach their milestones. This activity may seem advanced at first, and it could be, but this activity is designed to be done more than one time. The purpose of these math and science activities are for them to be used multiple times, as this significantly raises the chances of your child reaching their growth and development milestones in a timely manner.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's First Art Piece: A Safe Painting Activity"
        subtitle="Creative Arts - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
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
