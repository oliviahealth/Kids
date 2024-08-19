"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/dashboard/pregnancy/prenatal-icon.svg";
import photo from "/public/images/pregnancy_add_a_photo.svg";
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
  const takeawayText = `Now that you have an introductory idea of what pregnancy and baby expenses will look like, you can start building your budgeting skills. Planning for this financial shift will better prepare you for life with your new baby and for future goals and finances!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Fianncial Planning for Baby's First Year"
        subtitle="Math & Science - Prenatal Paradise"
        homeLink="/home"
        subtitleColor="#F797FF"
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
