"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import group82 from "../../../../public/images/dashboard/adventure-bay/group-82.png";
import coloringPage from "../../../../public/images/dashboard/adventure-bay/Group 74.png";
import pencil from "../../../../public/images/dashboard/adventure-bay/fluent-emoji-high-contrast_crayon.png";
import marker from "../../../../public/images/dashboard/adventure-bay/material-symbols_ink-marker-sharp.png";

const pageContent = [
  {
    title: "The Power of Coloring for Caregivers",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Coloring for all ages!",
      content: {
        part1: "Coloring is known to be a favorite activity among preschoolers, as it allows for creativity, fun, and the ability for the children to express themselves. However, coloring is not just an activity for this age group. Caregivers can also be a part of the benefits coloring has to offer. Self-care and having ways to relieve stress are so important, and coloring is the perfect way to do this after a long day."
    },
      }
  },
  {
    title: "The Power of Coloring for Caregivers",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Relieve your anxiety",
      content: {
        part1:
          "Coloring has been proven to reduce anxiety levels by relaxing the part of your brain responsible for stress. It allows you to focus on the positive, calming page in front of you instead of other negative thoughts. Coloring can also promote deeper sleep, improve focus, and help you think about the present moment.",
        part2:
          "Try this activity today with our Olivia-kids Caregiver Coloring Pages! This activity can be done alone if you need a way to promote peace and quiet, or it can also be completed with your child using the Olivia-kids Child Coloring Pages!",
      },
      content2: {
        title: "What will you need?",
      },
    },
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageContent.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pageContent.length) % pageContent.length
    );
  };

  const content = pageContent[currentIndex];

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div className="flex gap-4">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <span className="text-xl font-bold">{content.title}</span>
          <span className="text-xl" style={{ color: "#52C5C0" }}>
            {content.desc}
          </span>
        </div>

        <div className="float-right pl-20">
          <Link
            href="/home"
            className="rounded-full z-30 bg-gray-300 flex items-center justify-center w-20 h-20 absolute top-10 right-10"
          >
            X
          </Link>
        </div>
      </div>

      <div className="grid items-start md:grid-cols-12 gap-8 grid-cols-1">
        <div className="grid gap-8 col-span-7">
          <div className="grid gap-2">
            <h1 className="text-xl font-bold">{content.mainContent.title}</h1>
            <p>{content.mainContent.content.part1}</p>
          </div>
          {currentIndex == 1 && (
            <div className="grid gap-8 ">
              <h1 className="text-xl font-bold">
                {content.mainContent.content2?.title}
              </h1>
              <div className="flex gap-20">
                <div className="flex flex-col items-center justify-between">
                  <Image src={coloringPage} alt="Coloring Pages" />
                  <div>Olivia-Kids Gratitude Jars</div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Image src={pencil} alt="pencil" />
                  <span>Paper</span>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Image src={marker} alt="Marker" />
                  <div>Pen</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-span-5">
          <Image src={group82} alt="image" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
        <div className="justify-self-center sm:justify-self-start">
          <button
            className="text-rose-600 font-bold py-2 px-4"
            onClick={handlePrev}
          >
            {currentIndex == 0 ? "Learn more" : "Back"}
          </button>
        </div>
        <div className="justify-self-center sm:justify-self-end">
          <button
            className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl"
            onClick={handleNext}
          >
            Continue &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
