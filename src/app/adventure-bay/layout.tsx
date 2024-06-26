import React from "react";
import backgroundMap from "../../../public/images/background.png";
import Link from "next/link";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div className="z-5 absolute inset-0">
        <Image
          src={backgroundMap}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
        <div className="row-start-2 row-end-12 col-start-2 col-end-12 z-20 h-auto">
          <div className="relative bg-white shadow-2xl rounded-2xl h-full p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
