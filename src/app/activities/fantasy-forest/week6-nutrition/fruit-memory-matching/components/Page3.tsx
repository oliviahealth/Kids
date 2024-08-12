"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import Link from "next/link";
import photo from "/public/images/activities/fantasy-forest/addAPhoto.svg";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";
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
  const takeawayText = `A child’s diet is important for their short-term and long-term health, and helping your child recognize these healthy food options is a crucial part in teaching them about nutritious choices. The purpose of this activity is to practice their memory recall and sequential memory by matching the cards with the same fruit on them, but it also helps your child recognize healthy foods that they may see on a daily basis. By explaining to your child that these foods are necessary for them to grow big and strong, you are helping them learn about making nutritious choices for their health long-term.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Fruit Memory Matching"
        subtitle="Nutrition - Fantasy Forest"
        homeLink="/"
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
