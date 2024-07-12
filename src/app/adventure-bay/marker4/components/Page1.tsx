"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import pages from "../../../../../public/images/dashboard/adventure-bay/pages.png";
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
    <div className="flex flex-col justify-between h-full w-full gap-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Image src={logo} alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-xl font-bold">Focusing on Feelings</span>
            <span className="text-lg" style={{ color: "#52C5C0" }}>
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

      <div className="w-full flex flex-col lg:flex-row gap-8 flex-grow">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Introduction</h1>
          <p className="text-lg text-justify">
            When caring for a young child, you may begin to believe that they
            deserve one hundered percent of your attention all of the time. This
            can lead to you putting your own feelings on the backburner.
            Ignoring your emotions can cause them to build up over time.
            Emotions send important messages to your mind and body -- messages
            that shouldn't be ignored! Listen to your emotions to help recognize
            what your needs are. This activity can help you recognize what
            feelings you are experiencing.
          </p>
          <p className="text-lg text-justify">
            At the age of 3-4, children experience many different emotions that
            they don't know the names of. This activity will not only help them
            identify their feelings, but it will also teach them the names of
            these feelings and how to verbally express what they feel. You will
            then have more insight into their needs while also assisting in
            their language and speech development. You two can work together to
            track their emotions on a piece of paper as well.
          </p>
        </div>
        <div
          className="w-full lg:w-1/2 rounded-3xl flex flex-col h-full p-5 gap-2"
          style={{
            border: "2px solid white",
            backgroundColor: "#C5FFFC",
          }}
        >
          <h1 className="text-xl font-bold flex">Materials Needed</h1>
          <div className="flex flex-col gap-2 h-full w-full">
            <div className="h-full flex flex-row gap-2 w-full">
              <div
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center p-2 ${
                  isChecked.list ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={pages} alt="List" width={40} height={40} />
                <h1
                  className="text-md font-bold text-center"
                  style={{ color: "#52C5C0" }}
                >
                  OliviaKids Gratitude Jars
                </h1>
                <input
                  type="checkbox"
                  checked={isChecked.list}
                  onChange={() => handleCheckboxChange("list")}
                  className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
                />
              </div>
              <div
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center p-2 ${
                  isChecked.pen ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={pen} alt="Pen" width={60} height={60} />
                <h1
                  className="text-md font-bold text-center"
                  style={{ color: "#52C5C0" }}
                >
                  Pen
                </h1>
                <input
                  type="checkbox"
                  checked={isChecked.pen}
                  onChange={() => handleCheckboxChange("pen")}
                  className="appearance-none h-6 w-6 rounded-full border-2 border-[#52C5C0] checked:bg-[#52C5C0] focus:outline-none"
                />
              </div>
              <div
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center p-2 ${
                  isChecked.paper ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={paper} alt="Paper" width={60} height={60} />
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
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white flex p-2"></div>
            </div>
            <div className="h-full flex flex-row gap-2 w-full">
              <div
                className={`h-full w-full rounded-2xl bg-[#8AEFEB] flex flex-col justify-around items-center`}
              ></div>
              <div
                className={`h-full w-full rounded-2xl bg-[#8AEFEB] flex flex-col justify-around items-center`}
              ></div>
              <div
                className={`h-full w-full rounded-2xl bg-[#8AEFEB] flex flex-col justify-around items-center`}
              ></div>
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white flex"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end pb-10 lg:pb-5 2xl:pb-0">
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
