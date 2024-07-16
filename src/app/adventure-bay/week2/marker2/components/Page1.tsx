"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import pages from "@/public/images/dashboard/adventure-bay/pages.png";
import pencil from "@/public/images/dashboard/adventure-bay/pencil.png";
import marker from "@/public/images/dashboard/adventure-bay/marker.png";
import arrow from "@/public/images/dashboard/adventure-bay/next_arrow.png";

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
            <span className="text-xl font-bold">
              The Power of Coloring for Caregivers
            </span>
            <span className="text-lg" style={{ color: "#52C5C0" }}>
              Creative Arts - Adventure Bay
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
            Coloring is known to be a favorite activity among preschoolers, as
            it allows for creativity, fun, and the ability for the children to
            express themselves. However, coloring is not just an activity for
            this age group. Caregivers can also be a part of the benefits
            coloring has to offer! Coloring has been proven to reduce anxiety
            levels by relaxing the part of your brain responsible for stress. It
            allows you to focus on the positive, calming page in front of you
            instead of other negative thoughts. Coloring can also promote deeper
            sleep, improve focus, and help you think about the present moment.
            Try this activity today with our OliviaKids Caregiver Coloring
            Pages! This activity can be done alone if you need a way to promote
            peace and quiet, or it can also be completed with your child using
            the OliviaKids KIDS Coloring Pages!
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
                  OliviaKids Coloring Pages
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
                <Image src={pencil} alt="Pen" width={60} height={60} />
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
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center p-2 ${
                  isChecked.paper ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={marker} alt="Paper" width={60} height={60} />
                <h1
                  className="text-md font-bold text-center"
                  style={{ color: "#52C5C0" }}
                >
                  Markers
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
