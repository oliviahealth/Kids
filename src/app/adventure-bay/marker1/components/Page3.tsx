"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import photo from "../../../../../public/images/dashboard/adventure-bay/Group 114.png";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import KeyTakeaways from "@/components/Template/KeyTakeaways";

export default function Page3({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const takeawayText = `Repeat after me: "I am great at positive affirmations!"
  Congratulations on completing the affirmations activity! Recite your
  affirmations daily for one week to earn your badge. We hope that you
  truly believe these wonderful messages and that they begin to make a
  positive difference in your mindset!`;

  return (
    <div className="flex flex-col h-full w-full gap-8 justify-between">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Image src={logo} alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-xl font-bold">
              Affirmations for Children and Caregivers
            </span>
            <span className="text-lg" style={{ color: "#52C5C0" }}>
              Caregiver Wellness - Adventure Bay
            </span>
          </div>
        </div>

        <div className="">
          <Link
            href="/home"
            className="rounded-full z-30 bg-gray-300 flex items-center justify-center w-20 h-20"
          >
            X
          </Link>
        </div>
      </div>

      <KeyTakeaways text={takeawayText} photoSrc={photo} photoAlt="Photo" />

      <div className="flex justify-between items-end pb-10 lg:pb-5 2xl:pb-0">
        <div className="">
          <button
            className="text-red-600 border-2 border-red-300 rounded-3xl py-2 px-4"
            onClick={onBack}
          >
            Back
          </button>
        </div>

        <div className="">
          <Link
            className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center`}
            href="/home"
          >
            Continue
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
