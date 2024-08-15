"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import photo from "@/public/images/dashboard/blossomHaven/shared/keyTakeway.png";
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
  const takeawayText = `Doing sound and music activities engages many parts of your 0-1 year old child's brain, key to them achieving their growth and development milestones. These activities provide your child the opportunity to have some fun and grow the emotional bond with you, and promotes growth in other key areas of their development. Just by playing and singing with these maracas, your growing your child's emotional, thinking, and language skills vital in their later years. Use these maracas at any time you please, but always make sure your child is engaged and having fun to always have a happy and healthy growing child.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Homemade Maracas"
        subtitle="Sound & Music - Blossom Haven"
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
