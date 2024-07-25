"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import Activity, { ActivityStep } from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps: ActivityStep[] = [
    {
      stepNumber: 9,
      description:
        " After the rocks are dry, head back out into the yard or on a walk around the neighborgood to distribute the rocks. ",
    },
    {
      stepNumber: 10,
      description:
        "Encourage your child to place their rocks in places that are easily visible so as many people will be able to see them as possible.  ",
    },
    {
      stepNumber: 11,
      description:
        "You can also take your child's rocks to the yards of grandparents, other family or friends to bring a smile to their face. ",
    },
    {
      stepNumber: 12,
      description:
        "Make sure to explain to your child the importance of their creative art adding to the beauty of the environment around them and bringing joy to others who see them.  ",
    }
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Rock Painting"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#52C5C0"
      />

      <Activity steps={activitySteps} stepNumberColor="#C5FFFC" />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
      />
    </>
  );
}
