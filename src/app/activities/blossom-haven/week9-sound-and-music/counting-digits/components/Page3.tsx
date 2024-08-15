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
  const takeawayText = `Using sound and music can be included into any activity like the one just explained, and will significantly put your child on the way to achieve their growth and development milestones. Your child is being engaged emotionally with you as you are singing, they are learning the basic concepts of counting, and learning about the names and look of their body parts. This activity exposes your child to many concepts and having you guide them with a soothing, singing voice only improves their ability to learn what you are telling them. Before long, your child will be right next to you counting off their body parts having a blast singing and dancing along with you.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Counting Digits"
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
