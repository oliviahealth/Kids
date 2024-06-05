"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const SideNav = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<any>("");
  const [selectedYearLevel, setSelectedYearLevel] = useState<any>("");

  // Define your language and year level options here
  const languages = ["English", "Spanish", "French"];
  const yearLevels = ["1", "2", "3", "4", "5"];

  const handleLanguageChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  const handleYearLevelChange = (event: any) => {
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

            <div className="grid grid-cols-1 gap-2 mt-4">
              <span className="font-bold">Language</span>
              <select
                className="border-2 border-black rounded-full shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                <option value="">Select Language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>

          <div className="grid grid-cols-1 gap-2 mt-4">
            <span className="font-bold">Year Level</span>
            <select
              className="border-2 border-black rounded-full shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={selectedYearLevel}
              onChange={handleYearLevelChange}
            >
              <option value="" >Select Year Level</option>
              {yearLevels.map((yearLevel) => (
                <option key={yearLevel} value={yearLevel}>
                  {yearLevel}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-start-7">
          <div className="grid grid-cols-1 gap-3">
            <Image
              src="/images/Ellipse 44.png"
              alt="Ellipse"
              width={40}
              height={35}
            />
            <Image
              src="/images/Ellipse 44.png"
              alt="Ellipse"
              width={40}
              height={35}
            />
            <Image
              src="/images/Ellipse 44.png"
              alt="Ellipse"
              width={40}
              height={35}
            />
            <Image
              src="/images/Ellipse 44.png"
              alt="Ellipse"
              width={40}
              height={35}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
