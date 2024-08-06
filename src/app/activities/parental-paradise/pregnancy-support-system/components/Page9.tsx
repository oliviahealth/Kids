"use client";
import React, { useEffect } from "react";
import star from "@/public/images/dashboard/adventure-bay/Star 27.svg";
import arrow from "@/public/images/dashboard/adventure-bay/icon.png";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function PregnancySupportSystemPage9({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  useEffect(() => {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-1/6 flex justify-between items-center gap-8">
        <span className="rounded-full bg-[#BFDF64] flex justify-center items-center w-20 h-20 text-xl font-bold">
          7
        </span>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Well done!</h1>
          <p>Repeat this exercise whenever you need it. Here is your star!</p>
        </div>

        <div className="">
          <Link
            href="/home"
            className="rounded-full z-30 bg-[#BFDF64] flex items-center justify-center w-20 h-20"
          >
            X
          </Link>
        </div>
      </div>
      <div className="h-4/6 flex justify-center items-center">
        <Image src={star} alt="Star" />
      </div>
      <div className="h-1/6 flex flex-col md:flex-row justify-center items-center relative">
        <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
          <button className="text-red-600 py-2 px-4" onClick={onBack}>
            Back
          </button>
        </div>
        <div className="absolute bottom-2 right-2 md:bottom-5 md:right-5">
          <button
            onClick={onNext}
            className="rounded-full z-30 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 bg-[#BFDF64]"
          >
            <Image src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
