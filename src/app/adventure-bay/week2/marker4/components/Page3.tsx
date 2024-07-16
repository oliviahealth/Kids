"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import photo from "@/public/images/dashboard/adventure-bay/Group 114.png";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";

export default function Page3({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col justify-between h-full w-full gap-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Image src={logo} alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-xl font-bold">
              Focusing on Feelings
            </span>
            <span className="text-lg" style={{ color: "#52C5C0" }}>
              Creative Arts - Adventure Bay
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

      <div className="w-full flex gap-4 flex-grow">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Key Takeaways</h1>
          <p className="text-xl text-justify">
            Way to go! You have become a master at Feeling Your Feelings! We
            hope that this activity has helped you to understand your emotions
            better. If you complete this activity once a day, you will recieve
            your smiley sticker. Complete this activity every day for one week
            to earn your Feelings Badge! Keep practicing this activity in your
            daily life. It will help you recognize what your body needs!
          </p>
          <div>
            <Image src={photo} alt="Photo" />
          </div>
        </div>
      </div>
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
