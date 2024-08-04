"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";
import Link from "next/link";
import photo from "/public/images/activities/fantasy-forest/addAPhoto.svg";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
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
  const takeawayText = `This activity helps children learn how to communicate and interact with others in order to build strong friendships. Recognizing which qualities they look for in a friend will also help guide their actions with others. By talking through different qualities of a good friend with their parents, children are learning how to describe  their feelings and develop good communication skills with people around them.`;

  return (
    <>
      <Header
        logoSrc={logo}
        title="The Friendship Flower"
        subtitle="Language, Literacy, and Speech - Fantasy Forest"
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
