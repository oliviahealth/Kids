"use client"; // Add this directive at the top

import React from "react";
import Image from "next/image";
import Link from "next/link";
import pageNumber from "../../../../../public/images/neckpage3.svg";
import continueButton from "../../../../../public/images/Group 114.svg";
import "../../../globals.css";

const MeditationActivityPage4: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <div
      style={{ overflow: "hidden", height: "100vh", backgroundColor: '#FF8C38' }}
      className="relative w-full h-full flex justify-center items-start"
    >
      <Link href="/home">
        <div className="absolute top-0 right-0 m-4 w-20 h-20 bg-[#FF7613] rounded-full flex justify-center items-center cursor-pointer hover-grow-x">
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
        <h1 className="text-5xl font-extrabold mb-8 fade-in">Child’s Pose</h1>
        <p className="text-xl font-semibold mb-2 fade-in">
            Alleviate hip and back muscles with a lesser known stretch. 
        </p>
        <div className="text-center mt-96 w-full">
          <p className="text-3xl font-bold mb-4">
            Kneel on the floor, sit back on your heels, and stretch your arms forward, lowering your chest to the ground while breathing deeply. Hold for 20-30 seconds and repeat 3-5 times to improve flexibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeditationActivityPage4;
