"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import editLogo from "../../public//images/solar_pen-bold.png";
import sally from "../../public//images/Saly-17.png";
import pioneerPrincess from "../../public//images/Pioneer Princess.png";
import polygon from "../../public//images/Polygon 11.png";
import ellipse from "../../public//images/Ellipse 44.png";
import expandArrow from "../../public/images/expand_arrow.png";
import collapseArrow from "../../public/images/collapse_arrow.png";

const SideNav: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const languages = ["English", "Spanish", "French"];
  const ellipseImages = Array(4).fill(ellipse);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="h-full w-1/4 flex flex-col justify-start overflow-auto">
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

interface UserSectionProps {
  userName: string;
}

const UserSection: React.FC<UserSectionProps> = ({ userName }) => (
  <div className="flex flex-row gap-2 items-center justify-between">
    <div className="flex flex-row items-center gap-2">
      <span className="font-bold text-xl">{userName}</span>
      <div className="flex items-center justify-center bg-gray-200 rounded-full p-2">
        <Image src={polygon} alt="Sally" className="rounded-full" />
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-200 rounded-full p-2">
      <Image src={editLogo} alt="Edit" className="rounded-full" />
    </div>
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
  <div className="grid grid-cols-7 mt-5">
    <div className="col-start-1 col-span-6 px-6">
      <UserSection userName="Sally" />

      <div className="flex justify-center">
        <Image src={sally} alt="Saly" className="w-full" />
      </div>

      <div className="flex justify-center my-2">
        <Image src={pioneerPrincess} alt="Saly" />
      </div>

      <NavigationLinks />

      {/* <Dropdown
        label="Language"
        options={languages}
        selectedValue={selectedLanguage}
        handleChange={handleLanguageChange}
      /> */}

      <LatestProgress />
    </div>
    <EllipsesColumn ellipseImages={ellipseImages} />
  </div>
);

const NavigationLinks: React.FC = () => (
  <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-2 mt-5 text-white font-bold">
    {[
      {
        href: "/home",
        bgColor: "#ec9bfc",
        borderColor: "#e466fc",
        text: "Home",
      },
      {
        href: "/lessons",
        bgColor: "#8be9b0",
        borderColor: "#4ce49c",
        text: "Lessons",
      },
      {
        href: "/activities",
        bgColor: "#94ece2",
        borderColor: "#51e5d5",
        text: "Activities",
      },
      {
        href: "/worlds",
        bgColor: "#fbb355",
        borderColor: "#f4946c",
        text: "Worlds",
      },
    ].map(({ href, bgColor, borderColor, text }) => (
      <Link
        key={href}
        href={href}
        className="flex items-center justify-center text-white font-bold rounded-3xl px-6 py-6"
        style={{ backgroundColor: bgColor, border: `5px solid ${borderColor}` }}
      >
        {}
      </Link>
    ))}
  </div>
);

const EllipsesColumn: React.FC<{ ellipseImages: string[] }> = ({
  ellipseImages,
}) => (
  <div className="col-start-7 flex items-start justify-center">
    <div className="grid grid-cols-1 gap-3">
      {ellipseImages.map((src, index) => (
        <Image key={index} src={src} alt="Ellipse" />
      ))}
    </div>
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

const StickerBoardSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-10 mb-10 mr-6">
      <div className="flex flex-row gap-2 items-center ml-6 mb-2">
        <span className="font-bold text-xl">Sticker Board</span>
      </div>
      <div className="grid grid-cols-7">
        <div className="col-start-1 col-span-6 px-6">
          <div
            className="p-6 rounded-3xl shadow-md w-full h-full flex flex-col"
            style={{ border: "5px solid #FF8C8C", backgroundColor: "#FFB9B9" }}
          >
            <div className="text-center font-bold text-white text-3xl">
              Misty Plain
            </div>
            {isExpanded && (
              <div className="mt-4 text-center text-white">
                <div className="text-center font-bold text-white text-2xl">
                  Stars
                </div>
              </div>
            )}
            <div
              className="flex items-center justify-center mt-4 cursor-pointer"
              onClick={toggleExpand}
            >
              <div className="ml-2">
                {isExpanded ? (
                  <Image src={collapseArrow} alt="Collapse" />
                ) : (
                  <Image src={expandArrow} alt="Expand" />
                )}
              </div>
            </div>
          </div>
        </div>
        <StickerCardsColumn isExpanded={isExpanded} />
      </div>
    </div>
  );
};

interface StickerCardsColumnProps {
  isExpanded: boolean;
}

const StickerCardsColumn: React.FC<StickerCardsColumnProps> = ({
  isExpanded,
}) => (
  <div className={`col-start-7 flex items-between justify-center h-full`}>
    <div className="grid grid-cols-1 gap-3">
      {[
        { color: "#FFA500", label: "1" }, // Orange
        { color: "#ADD8E6", label: "2" }, // Blue
        { color: "#90EE90", label: "3" }, // Green
        { color: "#D8BFD8", label: "4" }, // Purple
      ].map(({ color, label }, index) => (
        <div
          key={index}
          className={`px-6 py-2 rounded-lg shadow-md w-full flex items-center justify-center ${
            isExpanded ? "h-full" : "h-2"
          }`}
          style={{ backgroundColor: color }}
        >
          {label}
        </div>
      ))}
    </div>
  </div>
);

export default SideNav;
