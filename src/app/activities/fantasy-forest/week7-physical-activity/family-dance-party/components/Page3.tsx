"use client";
import React from "react";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import photo from "@/public/images/dashboard/fantasyForest/shared/keyTakeway.png";
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
  const takeawayText = `The purpose of this activity is to exercise and move your body in a fun way. Exercising doesn't have to be very strenuous or long to be effective. This activity gives you a short and fun way to get moving and get your heart rate up.  `;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Family Dance Party!"
        subtitle="Physical Activity - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
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
