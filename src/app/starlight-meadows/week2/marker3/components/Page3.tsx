"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../../public/images/dashboard/StarlightMeadows/nightlogo.svg";
import Link from "next/link";
import photo from "../../../../../../public/images/dashboard/StarlightMeadows/addphoto.png";
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
  const takeawayText = ` This activity is a great way for children to learn different textures and colors, practice motor skills, and express their creativity. It also provides a fun space to bond with your child and create lasting memories. The whole family can participate in this activity to create a family handprint design that can be remembered forever!`;

;

  return (
    <>
      <Header
        logoSrc={logo}
        title="Handprint Painting"
        subtitle="Caregiver Wellness - Starlight Meadows"
        homeLink="/home"
        subtitleColor="#5A6EDD"
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
