"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
import photo from "/public/images/dashboard/blossomHaven/shared/keyTakeway.png";
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
  const takeawayText = `The key area of growth in your 0-1 year old’s nutrition development is transitioning them from breastfeeding or formula into solid foods. While it may take time for your child to get used to solid foods, getting them interested through this fun, creative activity will help them in the long run. It is advised to talk to your doctor before starting solid foods as they will let you know when your child can safely begin this activity. Doing this activity multiple times will continually expose your child to the different types of food to try, and will greatly help your child reach their milestones for a growing child's nutritional goals.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Yummy Snack Necklace"
        subtitle="Nutrition - Blossom Haven"
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
