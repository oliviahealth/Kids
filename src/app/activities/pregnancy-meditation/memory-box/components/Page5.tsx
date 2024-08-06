import React from "react";
import image from "@/public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrow from "@/public/images/dashboard/adventure-bay/icon.png";
import Image from "next/image";
import Link from "next/link";

export default function RelaxationYogaPage5({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-1/6 flex justify-between items-center gap-8">
        <span className="rounded-full bg-[#BFDF64] flex justify-center items-center w-20 h-20 text-xl font-bold">
          3
        </span>

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold">Cat-Cow Pose</h1>
          <p>
            Open your eyes and slowly move into a tabletop position with your hands and knees on the ground. Begin by slowly arching your back towards the sky, stretching your shoulder blades apart like a cat. Breathe in while in this position. Next, stretch your belly towards the floor and your chest to the sky like a cow. Breathe out in this position. Repeat this stretch five times, breathing in on cat and out on cow.
          </p>
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
        <Image src={image} alt="Image" />
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
        <div className="px-4 py-4 md:px-0 grid grid-cols-12">
        </div>
      </div>
    </div>
  );
}
