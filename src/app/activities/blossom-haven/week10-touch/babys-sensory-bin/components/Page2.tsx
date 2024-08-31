"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/activities/blossom-haven/header-icon.png";import Link from "next/link";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps = [
    {
      stepNumber: 1,
      description: "Grab yourself a medium sized box/container to put items into. Make sure that it is not too tall so that your child is able to reach in and grab items. That or you can also place your child in the box/container.",
    },
    {
      stepNumber: 2,
      description: "Gather a variety of items to place into the sensory bin. This can be child toys, snacks, cotton balls, leaves, and anything that has different textures, sizes, and/or colors.",
    },
    {
      stepNumber: 3,
      description: "Place your child in front of or inside the sensory bin. Show them the different items they can touch and explore and also say the name of the items.",
    },
    {
      stepNumber: 4,
      description: "Let your child explore as they please. Show them or hand them items to touch and hold so that they can begin to make observations. Let them explore as long as your child pleases. Watch to make sure they don't swallow anything as well.",
    },
    {
      stepNumber: 5,
      description: "After a few times in the sensory bin, change out some of the objects for new ones. Continue this activity throughout child's life to learn new items and promote their growth and development.",
    },
  ];  


  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby’s Sensory Bin"
        subtitle="Touch - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <Activity steps={activitySteps} stepNumberColor="#F8E7BA" />
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
