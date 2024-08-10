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
  const takeawayText = `Our child's nutritional growth within this age range is made up of beginning with breastfeeding, and then gradually getting them used to eating solid foods. Sometimes to get your child used to solid foods, you need to show them different textures to get them interested in trying these new foods. While it may take some time, this activity helps you and your child make this activity fun while learning about new foods and their textures. With constant practice your child will be used to eating solid foods, and set them on track to reach their nutritional goals throughout their life.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="The Many Textures of Foods"
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
