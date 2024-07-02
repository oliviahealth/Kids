"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import ellipse from "../../../../../public/images/dashboard/adventure-bay/Ellipse 107.png";

export default function Page2({
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
          <span className="text-xl font-bold">
            The Power of Coloring for Caregivers
          </span>
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
      <div className="grid gap-4">
        <h1 className="text-xl font-bold">Guidelines</h1>
      </div>

      <div className="grid items-start md:grid-cols-12 gap-8 grid-cols-2 flex-grow">
        <div className="grid gap-8 col-span-6 py-5">
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-10 gap-2 py-2">
              <div className="col-span-1 flex justify-center items-center">
                <Image className="absolute" src={ellipse} />
                <span className="relative font-bold z-30 ">1</span>
              </div>
              <div className="col-span-9 justify-center px-8 sm:px-4">
                <h1 className="font-bold text-xl">Print</h1>
                <p>
                  Print out the coloring pages provided below, or use any paper
                  available to you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-2 py-2">
              <div className="col-span-1 flex justify-center items-center">
                <Image className="absolute" src={ellipse} />
                <span className="relative font-bold z-30 ">2</span>
              </div>
              <div className="col-span-9 justify-center px-8 sm:px-4">
                <h1 className="font-bold text-xl">Gather Materials</h1>
                Gather markers, crayons, or any other writing utensils.
                <p></p>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-2 py-2">
              <div className="col-span-1 flex justify-center items-center">
                <Image className="absolute" src={ellipse} />
                <span className="relative font-bold z-30 ">3</span>
              </div>
              <div className="col-span-9 justify-center px-8 sm:px-4">
                <h1 className="font-bold text-xl">Begin Coloring!</h1>
                <p>
                  Take some time to color the Caregiver's Coloring pages
                  provided or paper from home.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-2 py-2">
              <div className="col-span-1 flex justify-center items-center">
                <Image className="absolute" src={ellipse} />
                <span className="relative font-bold z-30 ">4</span>
              </div>
              <div className="col-span-9 justify-center px-8 sm:px-4">
                <h1 className="font-bold text-xl">Be purposeful</h1>
                <p>
                  As you are coloring, try to focus on the page in front of you,
                  the colors you are using, the lines you are following, and the
                  message you are coloring.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 col-span-6 py-5">
          <div className="grid grid-cols-10 gap-2 py-4">
            <div className="col-span-1 flex justify-center items-center">
              <Image className="absolute" src={ellipse} />
              <span className="relative font-bold z-30 ">5</span>
            </div>
            <div className="col-span-9 justify-center px-8 sm:px-4">
              <h1 className="font-bold text-xl">Be inclusive!</h1>
              <p>
                Feel free to have your child join you with the KIDS Coloring
                Pages as well!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
        <div className="justify-self-center sm:justify-self-start">
          <button className="text-red-600 py-2 px-4" onClick={onBack}>
            Back
          </button>
        </div>
        <div className="justify-self-center sm:justify-self-end">
          <button
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center"
            onClick={onNext}
          >
            Continue to activity
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
