"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  logoSrc: string;
  title: string;
  subtitle: string;
  homeLink: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, title, subtitle, homeLink }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <Image src={logoSrc} alt="logo" />
        <div className="flex flex-col justify-center items-start">
          <span className="text-xl font-bold">{title}</span>
          <span className="text-lg" style={{ color: "#52C5C0" }}>
            {subtitle}
          </span>
        </div>
      </div>
      <div>
        <Link href={homeLink} className="rounded-full z-30 bg-gray-300 flex items-center justify-center w-20 h-20">
          X
        </Link>
      </div>
    </div>
  );
};

export default Header;
