import React from "react";
import ellipse from "../../../../../public/images/dashboard/adventure-bay/Ellipse 122.png";
import image from "../../../../../public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrow from "../../../../../public/images/dashboard/adventure-bay/icon.png";
import Image from "next/image";
import Link from "next/link";

export default function ActivityPage3({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-1/6 flex justify-center items-center relative">
        <div className="absolute top-2 left-2 md:top-5 md:left-5">
          <Image src={ellipse} alt="Ellipse" />
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-xl font-bold text-black">3</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Heading</h1>
          <p>
            Write the date, time, and the emotion that you are experiencing.
          </p>
        </div>
        <div className="absolute top-2 right-2 md:top-5 md:right-5">
          <Link
            href="/home"
            className="rounded-full z-30 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 bg-[#BFDF64] font-bold"
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
          {/* <p className="text-center text-xl md:text-xl tracking-wide col-start-4 col-end-10">
            Sit or stand up straight, relax your shoulders, and slowly move your
            head in a circle, first to the right and then to the left, while
            breathing deeply. Repeat this 5-10 times to help your neck feel
            better and more flexible.
          </p> */}
        </div>
      </div>
    </div>
  );
}
