"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
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
      description:
        "With Eric Carle’s classic 'The Very Hungry Caterpillar' invite your child to storytime in a comfortable, well-lit sitting area.",
    },
    {
      stepNumber: 2,
      description:
        "As you read the book aloud, encourage your child to repeat after you or point out different things they see on the page. For instance, engaging questions include, but are not limited to: What foods do you see the caterpillar eat? Which of these foods would you like to eat?",
    },
    {
      stepNumber: 3,
      description:
        "After reading through the book at your/your child’s pace, join your child in an arts and crafts activity- think of it as a souvenir for this storytime experience!",
    },
    {
      stepNumber: 4,
      description: "Gather supplies for craft.",
    },
    {
      stepNumber: 5,
      description:
        "Cut out circles of blank paper or colored construction paper to resemble the body of a caterpillar. If using blank paper, have your child color it in!",
    },
    {
      stepNumber: 6,
      description:
        "As you go back through the book with your child, invite your child to color in the food they see on the print-out.",
    },
    {
      stepNumber: 7,
      description:
        "Cut out the dotted circles of the printable and glue onto the colored paper caterpillar.",
    },

    {
      stepNumber: 8,
      description:
        "Encourage your child to go through the different foods they have seen and make those connections between the book and their newly made craft!",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Eric carle Read-Along & Caterpillar Craft"
        subtitle="Language, Literacy, & Speech - Adventure Bay"
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
