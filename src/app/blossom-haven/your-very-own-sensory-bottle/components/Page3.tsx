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
  const takeawayText = `Sensory bottles are a fun creative arts activity with a personal twist, so you and your baby have  a comforting tool wherever you go. The primary purpose of this creative arts activity is to engage your child in sensory play. Sensory play involves many  daily activities your child does throughout the house, but works on getting them familiar with their five senses and emotions and developing movement/motor skills and overall creativity. These sensory bottles are long lasting and provide a fun creative arts project for the whole family!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Your Very Own Sensory Bottle" 
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
