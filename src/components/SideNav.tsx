"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const SideNav: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const languages = ["English", "Spanish", "French"];
  const ellipseImages = Array(4).fill("/images/Ellipse 44.png");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="h-screen w-1/5 flex flex-col justify-start overflow-y-auto">
      <LogoSection />
      <UserSection />
      <MainContent
        languages={languages}
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
        ellipseImages={ellipseImages}
      />
      <StickerBoardSection />
    </div>
  );
};

const LogoSection: React.FC = () => (
  <div className="flex flex-col items-center">
    <Image src="images/Logo+Company.svg" alt="Logo" width={250} height={200} />
  </div>
);

const UserSection: React.FC = () => (
  <div className="flex flex-row gap-2 items-center ml-6">
    <span className="font-bold text-xl">Sally</span>
    <Image src="/images/Polygon 11.png" alt="Sally" width={12} height={10} />
  </div>
);

interface MainContentProps {
  languages: string[];
  selectedLanguage: string;
  handleLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  ellipseImages: string[];
}

const MainContent: React.FC<MainContentProps> = ({
  languages,
  selectedLanguage,
  handleLanguageChange,
  ellipseImages,
}) => (
  <div className="grid grid-cols-7 mt-10">
    <div className="col-start-1 col-span-6 px-6">
      <Image src="/images/Saly-17.png" alt="Saly" width={400} height={400} />
      <div className="flex justify-center my-2">
        <Image
          src="/images/Pioneer Princess.png"
          alt="Saly"
          width={200}
          height={400}
        />
      </div>
      <NavigationLinks />
      <Dropdown
        label="Language"
        options={languages}
        selectedValue={selectedLanguage}
        handleChange={handleLanguageChange}
      />
      <LatestProgress />
    </div>
    <EllipsesColumn ellipseImages={ellipseImages} />
  </div>
);

const NavigationLinks: React.FC = () => (
  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 mt-5 text-white font-bold">
    {[
      { href: "/home", bgColor: "#ec9bfc", borderColor: "#e466fc", text: "Home" },
      { href: "/lessons", bgColor: "#8be9b0", borderColor: "#4ce49c", text: "Lessons" },
      { href: "/activities", bgColor: "#94ece2", borderColor: "#51e5d5", text: "Activities" },
      { href: "/worlds", bgColor: "#fbb355", borderColor: "#f4946c", text: "Worlds" },
    ].map(({ href, bgColor, borderColor, text }) => (
      <Link
        key={href}
        href={href}
        className="flex items-center justify-center text-white font-bold rounded-xl px-6 py-6"
        style={{ backgroundColor: bgColor, border: `5px solid ${borderColor}` }}
      >
        {text}
      </Link>
    ))}
  </div>
);

const LatestProgress: React.FC = () => (
  <div className="grid grid-cols-1 gap-2 mt-5">
    <span className="font-bold text-xl">Latest Progress</span>
    <span style={{ color: "#FF8C8C" }}>Math Mansion - Misty Plain</span>
    <div className="grid grid-cols-2">
      <Image src="/images/Group 42.png" alt="Medal" width={150} height={50} />
      <div className="grid items-center justify-center">Stars</div>
    </div>
  </div>
);

const EllipsesColumn: React.FC<{ ellipseImages: string[] }> = ({ ellipseImages }) => (
  <div className="col-start-7">
    <div className="grid grid-cols-1 gap-3">
      {ellipseImages.map((src, index) => (
        <Image key={index} src={src} alt="Ellipse" width={40} height={35} />
      ))}
    </div>
  </div>
);

const StickerBoardSection: React.FC = () => (
  <div className="mt-10">
    <div className="flex flex-row gap-2 items-center ml-6 mb-2">
      <span className="font-bold text-xl">Sticker Board</span>
    </div>
    <div className="grid grid-cols-7">
      <div className="col-start-1 col-span-6 px-6">
        <div className="p-6 rounded-3xl shadow-md w-full h-full flex flex-col" style={{border: "2px solid #FF8C8C", backgroundColor: "#FFB9B9"}}>
          <div className="text-center font-bold text-white">Misty Plain</div>
          <div className="flex items-center justify-center mt-4">Stars</div>
        </div>
      </div>
      <StickerCardsColumn />
    </div>
  </div>
);

const StickerCardsColumn: React.FC = () => (
  <div className="col-start-7">
    <div className="grid grid-cols-1 gap-3">
      {["orange-300", "blue-300", "green-300", "purple-300"].map((bgColor, index) => (
        <div
          key={index}
          className={`p-6 bg-${bgColor} rounded-lg shadow-md h-full w-full flex items-center justify-center`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  </div>
);

export default SideNav;
