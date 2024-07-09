"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import list from "../../../../../public/images/dashboard/adventure-bay/Vector.png";
import pen from "../../../../../public/images/dashboard/adventure-bay/fluent_pen-20-filled.png";
import paper from "../../../../../public/images/dashboard/adventure-bay/mdi_paper.png";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";

type CheckboxState = {
  list: boolean;
  pen: boolean;
  paper: boolean;
};

export default function Page1({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [isChecked, setIsChecked] = useState({
    list: false,
    pen: false,
    paper: false,
  });

  useEffect(() => {
    // Check if all checkboxes are selected
    if (isChecked.list && isChecked.pen && isChecked.paper) {
      setButtonDisabled(false); // Enable the button
    } else {
      setButtonDisabled(true); // Disable the button
    }
  }, [isChecked]);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleCheckboxChange = (type: keyof CheckboxState) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <div className="flex flex-col h-full w-full gap-4">
      <div className="h-1/6 flex justify-between items-center">
        <div className="flex gap-4">
          <Image src={logo} alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-sm md:text-xl font-bold">
              Affirmations for Children and Caregivers
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
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Introduction</h1>
          <p className="text-xs 2xl:text-lg text-justify">
            At 3-4 years of age, children are little bundles of energy that are
            learning, growing, and exploring every day. They require a lot of
            attention from their caregiver, which can be physically and mentally
            taxing for that caregiver. As wonderful as it is for you to give so
            much of your attention to your child's health and development, it
            may cause burnout and negative thoughts over time. One way to combat
            these negative thoughts is by practicing daily affirmations. These
            short statements can help retrain your brain into a mindset that is
            supportive and encouraging, aiding in in your resilience as a
            caregiver. Your child could practice positive affirmations as well!
            Not only could it help boost their confidence and self-image, but it
            could also help them make advancements in their speech and language
            skills. The affirmations can be short and simple while still making
            a powerful impact on their positive thinking. This is an activity
            that you and your child can practice together each day. You can
            recite them together, brainstorm unique ones for each of you, and
            even use a pencil and paper to write them out and practice letters
            at the same time!
          </p>
        </div>
        <div
          className="w-1/2 rounded-3xl flex flex-col h-full p-5 gap-2"
          style={{
            border: "2px solid white",
            backgroundColor: "#C5FFFC",
          }}
        >
          <h1 className="text-xl font-bold flex">Materials Needed</h1>
          <div className="flex flex-col gap-2 h-full w-full">
            <div className="h-full flex flex-col lg:flex-row gap-2 w-full">
              <div
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center ${
                  isChecked.list ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={list} alt="List" width={60} height={60} />
                <h1
                  className="text-md font-bold text-center"
                  style={{ color: "#52C5C0" }}
                >
                  OliviaKids Affirmation List
                </h1>
                <input
                  type="checkbox"
                  checked={isChecked.list}
                  onChange={() => handleCheckboxChange("list")}
                  className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
                />
              </div>
              <div
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center ${
                  isChecked.pen ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={pen} alt="Pen" width={60} height={60}  />
                <h1
                  className="text-md font-bold text-center"
                  style={{ color: "#52C5C0" }}
                >
                  Pencil
                </h1>
                <input
                  type="checkbox"
                  checked={isChecked.pen}
                  onChange={() => handleCheckboxChange("pen")}
                  className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
                />
              </div>
              <div
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center ${
                  isChecked.paper ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={paper} alt="Paper" width={60} height={60}  />
                <h1
                  className="text-md font-bold text-center"
                  style={{ color: "#52C5C0" }}
                >
                  Paper
                </h1>
                <input
                  type="checkbox"
                  checked={isChecked.paper}
                  onChange={() => handleCheckboxChange("paper")}
                  className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
                />
              </div>
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white hidden md:flex"></div>
            </div>
            <div className="h-full hidden lg:flex gap-2 w-full">
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white"></div>
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white"></div>
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white"></div>
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/6 flex justify-between items-end">
        <div className="">
          <button className="text-red-600 border-2 border-red-300 rounded-3xl py-2 px-4">
            Learn More
          </button>
        </div>

        <div className="">
          <button
            className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center ${
              buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onNext}
            disabled={buttonDisabled}
          >
            Continue
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
