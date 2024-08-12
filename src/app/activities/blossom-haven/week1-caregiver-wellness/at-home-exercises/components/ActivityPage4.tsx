
import React from "react";
import image from "/public/images/dashboard/adventure-bay/Ellipse 169.png";
import arrow from "/public/images/dashboard/adventure-bay/icon.png";
import Image from "next/image";
import Link from "next/link";

export default function ActivityPage4({
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
          4
        </span>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Postpartum Plank Exercise</h1>
          <p>
            Start on your comfortable place on the floor with your forearms and knees on the ground for the starting position.
          </p>

          <p>Raise your back up a few inches, keeping your forearms and toes on the ground, trying to put your body into a straight position. Keep your eyes forward because this will help you keep your body straight.</p>

          <p>When your in the straight position, hold this pose for about 30 seconds focusing on breathing in through your nose, and exhaling through your mouth. Focus on keeping your stomach tight to help in keeping the straight position</p>

          <p>After 30 seconds, relax back down onto the ground and let yourself recover a bit. Repeat this exercise 1-3 times, but each time you come back to this exercise try to hold the straight position for more than 30 seconds if you are able.</p>
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
