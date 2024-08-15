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
  const takeawayText = `Great job! You showed such good balance and you made such a great tooth fairy. We hope this helped you with problem solving, creativity, and motor control. These are important things to keep practicing so here is a sticker to show that you are growing those skills! We are proud of you, keep up your good work! `;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Tooth Fairy Balance"
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
