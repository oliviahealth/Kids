"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import group82 from "../../../../../public/images/dashboard/adventure-bay/group-82.png";
import coloringPage from "../../../../../public/images/dashboard/adventure-bay/Group 74.png";
import pen from "../../../../../public/images/dashboard/adventure-bay/fluent_pen-20-filled.png";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import paper from "../../../../../public/images/dashboard/adventure-bay/mdi_paper.png";

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
            <h1 className="text-xl font-bold">Express Yourself!</h1>
            <p>
              This activity can help you recognize what feelings you are
              experiencing. You will need a pencil and paper to write down what
              emotion you experienced each day. You can utilize our list of
              feelings to help recognize what emotion you are experiencing, At
              the end of each day, reflect on your day and write down what
              feeling you are experiencing. Track your feelings each day (or
              more than once a day if desired) and think about why you are
              feeling this emotion and what your body needs. For example, if you
              are feeling fatigued, listen to this feeling and consider asking
              someone to watch your child while you take a nap.
            </p>
          </div>
          <div className="grid gap-8">
            <h1 className="text-xl font-bold">What will you need?</h1>

            <div className="flex gap-20">
              <div className="flex flex-col items-center justify-between">
                <Image src={coloringPage} alt="Coloring Pages" />
                <div>Olivia-Kids Gratitude Jars</div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <Image src={pen} alt="Pen" />
                <span>Pen</span>
              </div>
              <div className="flex flex-col items-center justify-between">
                <Image src={paper} alt="Paper" />
                <div>Paper</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <Image src={group82} alt="image" />
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
            Continue
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
