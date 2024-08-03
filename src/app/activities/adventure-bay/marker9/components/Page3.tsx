"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import photo from "@/public/images/dashboard/adventure-bay/Group 114.png";
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
  const takeawayText = `Now you have created such lovely flowers! At the same time, you have also been able to explore what character traits we want to see not only in other people and friends around us but also ourselves. Keep these good character traits on the petals in mind and feel free to keep creating more flowers.`;
  return (
    <>
      <Header
        logoSrc={logo}
        title="My Friendship Flower"
        subtitle="Emotional, Behavioral, & Social - Adventure Bay"
        homeLink="/home"
        subtitleColor="#52C5C0"
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
