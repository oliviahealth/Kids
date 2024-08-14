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
  const takeawayText = `By keeping this weekly meal tracker, we hope that you are able to pinpoint how different foods make you feel throughout your pregnancy, so you can focus on the ones that make you feel good! We also encourage that you spend some time researching and reading about key nutrients needed during pregnancy, as well as what foods are best to avoid. Try out new, healthy recipes that are rich in nutrients essential for you and your growing baby!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Weekly Meal Tracker"
        subtitle="Nutrition - Prenatal Paradise"
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
