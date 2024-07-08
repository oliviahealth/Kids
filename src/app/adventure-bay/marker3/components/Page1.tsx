"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import pages from "../../../../../public/images/dashboard/adventure-bay/pages.png";
import pencil from "../../../../../public/images/dashboard/adventure-bay/pencil.png";
import marker from "../../../../../public/images/dashboard/adventure-bay/marker.png";
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
              My Gratitude Jars
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
          <p className="text-xs 2xl:text-lg">
            When things do not seem to be going our way, taking the time to
            embrace and apply the art of gratitude allows us to shift our
            perspective away from hardship and focus on the gifts of life. In
            general, gratitude is linked with positive health benefits
            all-around, such as improved mental and physical wellness. For
            example, studies have proven that a grateful mind aids in the
            regulation of blood pressure, mood, and sleep.
          </p>
          <p className="text-sm 2xl:text-lg">
            When we take a moment and reflect in a state of gratitude, this
            gives us a chance to be appreciative of little things, big things,
            and everything else in between. The benefits of demonstrating
            gratitude on a daily basis not only helps with our well-being but
            also helps children witness the impact of thankfulness first hand.
            With this activity, you can learn more about how you can grow in
            gratitude while also teaching and showing your children to do the
            same!
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
            <div className="h-full flex flex-col md:flex-row gap-2 w-full">
              <div
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center ${
                  isChecked.list ? "border-[#52C5C0]" : "border-[#52C5C0]"
                }`}
              >
                <Image src={pages} alt="List" width={60} height={60} />
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
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center ${
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
                className={`border-2 h-full w-full rounded-2xl bg-white flex flex-col justify-around items-center ${
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
              <div className="h-full w-full rounded-2xl bg-[#8AEFEB] text-white hidden md:flex"></div>
            </div>
            <div className="h-full hidden md:flex gap-2 w-full">
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
