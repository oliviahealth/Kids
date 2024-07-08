"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col h-full w-full gap-4">
      <div className="h-1/6 flex justify-between items-center">
        <div className="flex gap-4">
          <Image src={logo} alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-sm md:text-xl font-bold">
              The Power of Coloring for Caregivers
            </span>
            <span className="text-sm md:text-lg" style={{ color: "#52C5C0" }}>
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

      <div className="h-4/6 w-full flex gap-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-xl font-bold">Activity</h1>
          <div className="w-full h-full flex gap-4">
            <div className="w-1/2 flex flex-col justify-between">
              <div className="h-1/4 flex items-center gap-2">
                <span className="rounded-2xl bg-[#C5FFFC] flex justify-center items-center p-5 text-xl font-bold">
                  1
                </span>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-xl">
                    Print out the coloring pages provided below, or use any
                    paper available to you
                  </p>
                </div>
              </div>

              <div className="h-1/4 flex items-center gap-2">
                <span className="rounded-2xl bg-[#C5FFFC] flex justify-center items-center p-5 text-xl font-bold">
                  2
                </span>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-xl">
                    Gather markers, crayons, or any other writing utensils
                  </p>
                </div>
              </div>

              <div className="h-1/4 flex items-center gap-2">
                <span className="rounded-2xl bg-[#C5FFFC] flex justify-center items-center p-5 text-xl font-bold">
                  3
                </span>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-xl">
                    Take some time to color the Caregiver's Coloring pages
                    provided or paper from home
                  </p>
                </div>
              </div>

              <div className="h-1/4 flex items-center gap-2">
                <span className="rounded-2xl bg-[#C5FFFC] flex justify-center items-center p-5 text-xl font-bold">
                  4
                </span>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-xl">
                    As you are coloring, try to focus on the page in front of
                    you, the colors you are using, the lines you are following,
                    and the message you are coloring
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <div className="h-1/4 flex items-center gap-2">
                <span className="rounded-2xl bg-[#C5FFFC] flex justify-center items-center p-5 text-xl font-bold">
                  5
                </span>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-xl">
                    Feel free to have your child join you with the KIDS Coloring
                    Pages as well
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/6 flex justify-between items-end">
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
