"use client"; // Add this directive at the top

import React from "react";
import Image from "next/image";
import Link from "next/link";
import pageNumber from "../../../../../public/images/ypage6.svg";
import continueButton from "../../../../../public/images/Group 114.svg";
import "../../../globals.css";

const MeditationActivityPage4: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <div
      style={{ overflow: "hidden", height: "100vh", backgroundColor: '#61C5FE' }}
      className="relative w-full h-full flex justify-center items-start"
    >
      <Link href="/home">
        <div className="absolute top-0 right-0 m-4 w-20 h-20 bg-[#8BD5FF] rounded-full flex justify-center items-center cursor-pointer hover-grow-x">
          <span className="text-black font-bold">X</span>
        </div>
      </Link>
      <div className="absolute top-0 left-0 m-4 w-40 h-40 flex justify-center items-center">
        <Image src={pageNumber} alt="Page Number" width={160} height={160} />
      </div>
      <div className="absolute bottom-8 left-2 w-full flex justify-between items-center px-8">
        <button onClick={onBack} className="text-rose-600 font-bold text-2xl py-2 px-4">
          Back
        </button>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src={continueButton} alt="Continue Button" onClick={onNext} width={300} height={300} />
        </div>
      </div>
      <div className="text-center mt-20 w-full">
        <h1 className="text-5xl font-extrabold mb-8 fade-in">Grab a bite</h1>
        <p className="text-xl font-semibold mb-2 fade-in">
            Maybe you brought a drink or a snack with you to taste, or there is either at home. Take a second to reflect on the sensation of taste.  
        </p>
       
      </div>
    </div>
  );
};

export default MeditationActivityPage4;
