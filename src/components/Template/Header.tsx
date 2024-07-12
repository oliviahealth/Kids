"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface HeaderProps {
  logoSrc: StaticImageData | string;
  title: string;
  subtitle: string;
  homeLink: string;
  subtitleColor: string;
}

const Header: React.FC<HeaderProps> = (headerData: HeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <Image src={headerData.logoSrc} alt="logo" />
        <div className="flex flex-col justify-center items-start">
          <span className="text-xl font-bold">{headerData.title}</span>
          <span
            className={`text-lg`}
            style={{ color: headerData.subtitleColor }}
          >
            {headerData.subtitle}
          </span>
        </div>
      </div>
      <div>
        <Link
          href={headerData.homeLink}
          className="rounded-full z-30 bg-gray-300 flex items-center justify-center w-20 h-20"
        >
          X
        </Link>
      </div>
    </div>
  );
};

export default Header;
