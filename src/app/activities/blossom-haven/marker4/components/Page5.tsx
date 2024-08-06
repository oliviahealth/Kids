"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import photo from "@/public/images/dashboard/blossomHaven/shared/keyTakeway.png";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page5({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const takeawayText = `There are so many options to make a fun and creative puppet for your child no matter what supplies you have at home. Puppets help to create a fun home environment where your child feels safe and comfortable to express and learn about themselves at the same time. Using puppets helps your child to create social bonds and learn their emotional feelings with people. `;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Puppet Playtime"
        subtitle="Emotional, Behavioral, & Social - Blossom Haven"
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
