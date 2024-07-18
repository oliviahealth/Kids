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
      stepNumber: 1,
      description:
        "You and your child can venture out into the yard or take a quick walk around the neighborhood to collect rocks of different sizes and shapes.",
    },
    {
      stepNumber: 2,
      description:
        "Encoruage your child to observe the beauty of nature around them as they walk to help gather ideas for what they may want to paint on their rocks (ex: sunshine, butterflies, flowers, dogs, etc.). ",
    },
    {
      stepNumber: 3,
      description:
        "Once your child has collected 3-5 rocks from their surrounding environment, you can head back home to start your craft!",
    },
    {
      stepNumber: 4,
      description:
        "You may want to wash the rocks off in the sink to remove any dirt or dust before starting to paint. ",
    },
    {
      stepNumber: 5,
      description: "Collect your acrylic paint and paint brushes to begin.",
    },
    {
      stepNumber: 6,
      description:
        "Allow your child to use their paint and paintbrushes to decorate their rocks with things that remind them of the outdoors or that they may have seen on their walk. ",
    },
    {
      stepNumber: 7,
      description:
        "Encourage your child to make the rocks colorful and vibrant so they will catch the attention of others as they pass them. They may also add words of encouragement or bible verses to the other side of their rock to bring a smile to someone's face who may pickup the rock.  ",
    },
    {
      stepNumber: 8,
      description:
        " Once your child has finished painting their rocks, allow the rocks to dry for 1-2 hours.",
    },
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
