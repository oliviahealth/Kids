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
        description: "Grab yourself some pieces of paper, preferably a larger sheet or even a large piece of cardboard. Also grab a writing utensil that will leave a marking on the paper."
    },
    {
        stepNumber: 2,
        description: "Grab some household items that your child is used to seeing and is able to have its outline traced on your paper. Examples of items to trace include your child's toys, cups, spatula/spoons, stuffed animals, and anything else easy to trace and show around the house."
    },
    {
        stepNumber: 3,
        description: "Place objects on your paper, and begin tracing their outlines. They may be as simple as a circle or square outline, but you'll still be teaching your child skills vital in their growth and development."
    },
    {
        stepNumber: 4,
        description: "Place the objects in front of the paper, and bring your child in front of the objects. Show your child the objects, let them touch and observe them, and repeat the names of these objects while showing your child."
    },
    {
        stepNumber: 5,
        description: "Show your child how the activity works; help your child hold the objects and place them in the correct outlines. If your child is able to hold any of the objects, see if they can do this activity on their own. If not, continue showing them where the objects should be placed."
    },
    {
        stepNumber: 6,
        description: "Keep these outlines and objects handy as this can be completed multiple times, or create multiple sheets with different outlines to further promote your child's learning."
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
