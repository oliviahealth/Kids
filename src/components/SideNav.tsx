"use client";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from "./Dropdown"; // Adjust the import path as necessary

const SideNav = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedYearLevel, setSelectedYearLevel] = useState<string>("");

  const languages = ["English", "Spanish", "French"];
  const yearLevels = ["1", "2", "3", "4", "5"];
  const ellipseImages = Array(4).fill("/images/Ellipse 44.png");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleYearLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYearLevel(event.target.value);
  };

  return (
    <div className="h-screen w-1/5 flex flex-col justify-start">
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

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
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

          <Dropdown
            label="Language"
            options={languages}
            selectedValue={selectedLanguage}
            handleChange={handleLanguageChange}
          />

          <Dropdown
            label="Year Level"
            options={yearLevels}
            selectedValue={selectedYearLevel}
            handleChange={handleYearLevelChange}
          />
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
    </div>
  );
};

export default SideNav;
