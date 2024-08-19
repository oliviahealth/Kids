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
  const takeawayText = `While your child may still be developing their motor skills, banging on objects is something that nearly any child can do. Showing your child that playing these homemade drums can make fun sounds, and have different sounds, engages them to play in this sound and music activity. Playing and engaging in sound and music activities such as this is a proven way to develop pathways in their brain, promote motor skills, and create emotional bonds with you all the while having so much fun! Giving your child control over making sounds from their drums sets them on a path to achieve all of their growth and development milestones without either of you even realizing it.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Drum Solo"
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
