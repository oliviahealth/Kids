"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import Activity from "@/components/Template/ActivitySteps";

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
      description: "You may download and use the OlivaKIDS affirmation lists",
    },
    {
      stepNumber: 2,
      description:
        "Find the affirmations that you relate to best. These will be the most effective",
    },
    {
      stepNumber: 3,
      description:
        "Recite these affirmations to yourself or your child at least once a day",
    },
    { stepNumber: 4, description: "Have faith in the words you are saying" },
    {
      stepNumber: 5,
      description: "Repeat this process at least once a day for an entire week",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full gap-8">
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

      <Activity steps={activitySteps} />
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
          <button
            className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center`}
            onClick={onNext}
          >
            Continue
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
