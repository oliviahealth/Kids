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
        description: "Lay out your blank paper or any canvas you are wanting to paint on."
    },
    {
        stepNumber: 2,
        description: "Take the paints you wish to use for the art project and squeeze out little dots/drops across the paper/canvas. Try to mix up the colors and size of dots across the canvas so your child is continually looking around and allows for more creativity."
    },
    {
        stepNumber: 3,
        description: "Grab some saran wrap, or any clear cover, and lightly place it over the canvas. This creates the barrier that won't allow your child to taste or touch any of the paint. Just to stay on the safe side for your child!"
    },
    {
        stepNumber: 4,
        description: "Once the saran wrap/cover is on and taped down, take your child and sit them down in front of the canvas."
    },
    {
        stepNumber: 5,
        description: "Show your child how to paint! Take a little section of the canvas and use your fingers and hands to spread the paint around and mix in the colors. Talk to your child while doing this and then show them how to do it themselves."
    },
    {
        stepNumber: 6,
        description: "Give your child free range to mix and play with the paint. Ensure that the saran wrap cover stays on and child isn't being exposed to the paint."
    },
    {
        stepNumber: 7,
        description: "When your child is done painting, you can then take the saran wrap cover to let the paint dry and hang it somewhere in your home! This lets your child see the artwork they created in the home, and helps to remind them of the fun they had in this creative arts activity."
    }
];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's First Art Piece: A Safe Painting Activity"
        subtitle="Creative Arts - Blossom Haven"
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
