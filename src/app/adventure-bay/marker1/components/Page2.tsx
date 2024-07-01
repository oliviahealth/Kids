"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import group82 from "../../../../../public/images/dashboard/adventure-bay/group-82.png";
import pen from "../../../../../public/images/dashboard/adventure-bay/fluent_pen-20-filled.png";
import paper from "../../../../../public/images/dashboard/adventure-bay/mdi_paper.png";

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
            Affirmations for Children and Caregivers
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

      <div className="grid md:grid-cols-12 gap-8 grid-cols-1 flex-grow">
        <div className="grid gap-8 col-span-7 py-5">
            <div className="grid gap-2">
              <h1 className="text-xl font-bold">A Simple Integration</h1>
              <p>
                Integrating positive affirmations into your daily routine is simple! You can choose to recite them at a scheduled time each day or just say them to yourself at any time during the day when you feel like you need them. These short statements can help retrain your brain into a mindset that is supportive and encouraging. This will aid in your resilience as a caregiver (Citing this information from: <a href="https://www.thebump.com/a/positive-parenting-affirmations">https://www.thebump.com/a/positive-parenting-affirmations</a>).
              </p>
              <p>Utilize our list of affirmations to practice this exercise with your child today!</p>
            </div>

            <div className="grid gap-8">
              <h1 className="text-xl font-bold">What will you need?</h1>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <Image src={pen} alt="Pen" />
                  <div>Pen</div>
                </div>
                <div className="flex flex-col items-center">
                  <Image src={paper} alt="Paper" />
                  <span>Paper</span>
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
          <button
            className="text-rose-600 font-bold py-2 px-4"
            onClick={onBack}
          >
            Back
          </button>
        </div>
        <div className="justify-self-center sm:justify-self-end">
          <button
            className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl"
            onClick={onNext}
          >
            Continue &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
