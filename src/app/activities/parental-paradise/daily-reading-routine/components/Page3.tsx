"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../../../../public/images/dashboard/pregnancy/prenatal-icon.svg";
import photo from "../../../../../../public/images/pregnancy_add_a_photo.svg";
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
  const takeawayText = `Creating a reading routine during pregnancy offers numerous benefits for both you and your baby. By consistently setting aside time to read aloud, you are investing in your child's future while also enjoying precious moments of connection before birth. This simple yet powerful routine can enrich your pregnancy experience and establish a foundation for a lifelong love of reading!`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Daily Reading Routine"
        subtitle="Language, Literacy, & Speech - Prenatal Paradise"
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
