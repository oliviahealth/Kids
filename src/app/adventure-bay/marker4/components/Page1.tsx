"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import group82 from "../../../../../public/images/dashboard/adventure-bay/group-82.png";

export default function Page1({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div className="flex gap-4">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <span className="text-xl font-bold">Focusing on Feelings</span>
          <span className="text-xl" style={{ color: "#52C5C0" }}>
            Caregiver Wellness - Adventure Bay
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

      <div className="grid items-start md:grid-cols-12 gap-8 grid-cols-1 flex-grow">
        <div className="grid gap-8 col-span-7 py-5">
          <div className="grid gap-4">
            <h1 className="text-xl font-bold">Essential Introspection</h1>
            <p>
              When caring for a young child, you may begin to believe that they
              deserve one hundred percent of your attention all of the time.
              This can lead to you putting your own feelings on the back-burner.
              Ignoring your emotions can cause them to build up over time. They
              can result in feelings of stress and discomfort. Calm.com
              describes emotions as the language of your body, providing
              feedback on how your body feels about what is happening around it
              (https://www.calm.com/blog/how-to-feel-your-feeling.) Emotions
              send important messages to your mind and body -- messages that
              shouldn't be ignored! Listen to your emotions to help recognize
              what your needs are.
            </p>
          </div>
        </div>

        <div className="col-span-5">
          <Image src={group82} alt="image" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
        <div className="justify-self-center sm:justify-self-start">
          <Link href="/home" className="text-red-600 py-2 px-4">
            Learn more
          </Link>
        </div>
        <div className="justify-self-center sm:justify-self-end">
          <button
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center"
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
