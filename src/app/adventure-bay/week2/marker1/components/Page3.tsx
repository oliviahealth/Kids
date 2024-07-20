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
  const takeawayText = `Round of applause for these fantastic puppet masters! You have created such amazing popsicle stick puppets and put on a great show while you were at it! After completing this activity, you will receive a completion sticker. From here on out, if you have spare popsicle sticks after a summer day sweet treat, you can save them to make as many popsicle stick puppets as you like. From this fun arts and crafts activity, we have learned that the sky is the limit when it comes to our imaginations- anything is possible when we put our mind to it!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Popsicle Stick Puppets"
        subtitle="Creative Arts - Adventure Bay"
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
