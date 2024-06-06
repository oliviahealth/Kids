"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const SideNav = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const languages = ["English", "Spanish", "French"];
  const ellipseImages = Array(4).fill("/images/Ellipse 44.png");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="min-h-screen w-1/5 flex flex-col justify-start">
      <div className="flex flex-col items-center">
        <Image
          src="images/Logo+Company.svg"
          alt="Logo"
          width={300}
          height={200}
        />
      </div>

      <div className="flex flex-row gap-2 items-center ml-6">
        <span className="font-bold text-xl">Sally</span>
        <div>
          <Image
            src="/images/Polygon 11.png"
            alt="Saly"
            width={12}
            height={10}
          />
        </div>
      </div>

      <div className="grid grid-cols-7 mt-10">
        <div className="col-start-1 col-span-6 px-6">
          <div>
            <Image
              src="/images/Saly-17.png"
              alt="Saly"
              width={400}
              height={400}
            />
          </div>

          <div className="grid justify-center m-2">
            <Image
              src="/images/Pioneer Princess.png"
              alt="Saly"
              width={200}
              height={400}
            />
          </div>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 mt-5 text-white font-bold">
            <Link
              href={"/home"}
              className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-6"
              style={{
                backgroundColor: "#ec9bfc",
                border: "5px solid #e466fc",
              }}
            >
              Home
            </Link>

            <Link
              href={"/lessons"}
              className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-6"
              style={{
                backgroundColor: "#8be9b0",
                border: "5px solid #4ce49c",
              }}
            >
              Lessons
            </Link>

            <Link
              href={"/activities"}
              className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-6"
              style={{
                backgroundColor: "#94ece2",
                border: "5px solid #51e5d5",
              }}
            >
              Activities
            </Link>

            <Link
              href={"/worlds"}
              className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-6"
              style={{
                backgroundColor: "#fbb355",
                border: "5px solid #f4946c",
              }}
            >
              Worlds
            </Link>
          </div>

          <div>
            <Dropdown
              label="Language"
              options={languages}
              selectedValue={selectedLanguage}
              handleChange={handleLanguageChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-2 mt-5">
            <span className="font-bold text-xl">Latest Progress</span>
            <span style={{ color: "#FF8C8C" }}>Math Mansion - Misty Plain</span>
            <div className="grid grid-cols-2">
              <div>
                <Image
                  src="/images/Group 42.png"
                  alt="Medal"
                  width={150}
                  height={50}
                />
              </div>
              <div className="grid items-center justify-center">Stars</div>
            </div>
          </div>
        </div>

        <div className="col-start-7">
          <div className="grid grid-cols-1 gap-3">
            {ellipseImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Ellipse"
                width={40}
                height={35}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-row gap-2 items-center ml-6 mb-2">
          <span className="font-bold text-xl">Sticker Board</span>
        </div>

        <div className="grid grid-cols-7">
          <div className="col-start-1 col-span-6 px-6">
            <div className="p-6 border-2 border-pink-700 border-solid bg-pink-300 rounded-3xl shadow-md w-full h-full flex flex-col">
              {" "}
              <div className="text-center font-bold text-white">Misty Plain</div>
              <div className="flex items-center justify-center mt-4">Stars</div>
            </div>
          </div>

          <div className="col-start-7">
            <div className="grid grid-cols-1 gap-3">
              <div className="p-6 bg-orange-300 rounded-lg shadow-md h-full w-full flex items-center justify-center">
                {/* Card content */}1
              </div>
              <div className="p-6 bg-blue-300 rounded-lg shadow-md h-full w-full flex items-center justify-center">
                {/* Card content */}2
              </div>
              <div className="p-6 bg-green-300 rounded-lg shadow-md h-full w-full flex items-center justify-center">
                {/* Card content */}3
              </div>
              <div className="p-6 bg-purple-300 rounded-lg shadow-md h-full w-full flex items-center justify-center">
                {/* Card content */}4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
