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
  const takeawayText = `This is a cost-effective, mess-free activity that will allow you to practice motor skills and creative arts with your child. 

Additionally, using this activity as an opportunity to encourage your child while they are painting, such as "Wow! You are doing such a good job holding the paintbrush!", or even making observations about their "painting" can be a positive bonding opportunity. 
`;

;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Mess-Free Water Painting"
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
