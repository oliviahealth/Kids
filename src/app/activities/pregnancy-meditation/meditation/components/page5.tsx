"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SmileLine from "../../../../../../public/images/Line 16.png";
import EyeClosed from "../../../../../../public/images/Line 17.png";
import "../../../../globals.css";

interface SecondPageProps {
  onNext: () => void;
  onBack: () => void;
}

const FifthPage: React.FC<SecondPageProps> = ({ onNext, onBack }) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <div
      style={{ overflow: "hidden", height: "100vh" }}
      className="relative w-full h-full flex justify-center items-start meditation-activity-two-bg"
    >
      <div className="absolute top-10 left-10">
        <Image
          src="/images/ellipse 115.png"
          alt="Ellipse"
          width={175} // adjust the width as needed
          height={175} // adjust the height as needed
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-4xl font-bold text-black">2</span>
        </div>
      </div>
      <Link href="/home">
        <div className="absolute top-0 right-0 m-4 w-20 h-20 bg-[#FFC700] rounded-full flex justify-center items-center hover-grow-x">
          <span className="text-black font-bold">X</span>
        </div>
      </Link>
      <div className="absolute bottom-[-25vh] transform w-[100vh] h-[100vh] bg-[#2787CC] rounded-full flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute top-[65%] left-[25%]">
            <Image
              src={EyeClosed}
              alt="Eye Closed"
              width={100} // adjust the width as needed
              height={100} // adjust the height as needed
            />
          </div>
          <div className="absolute top-[65%] right-[25%]">
            <Image
              src={EyeClosed}
              alt="Eye Closed"
              width={100} // adjust the width as needed
              height={100} // adjust the height as needed
            />
          </div>
          <div
            className="absolute bottom-[25%] left-[40%] transform -translate-x-1/2"
            style={{ transform: "rotate(-18deg)" }}
          >
            <Image
              src={SmileLine}
              alt="Smile Line"
              width={200} // adjust the width as needed
              height={50} // adjust the height as needed
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#FFC700] rounded-full flex justify-center items-center">
        {countdown > 0 ? (
          <span className="text-white text-4xl font-bold">{countdown}</span>
        ) : (
          <button onClick={onNext} className="text-white text-4xl font-bold">
            →
          </button>
        )}
      </div>
      <div className="absolute bottom-5 left-5">
        <button onClick={onBack} className="text-4xl font-bold back-effect">
          Back
        </button>
      </div>
      <div className="text-center mt-20 fade-in">
        <h1 className="text-5xl font-extrabold mb-8">
          Take a few deep breaths
        </h1>
        <p className="text-xl font-semibold mb-2">
          Breathe in through your nose and out through your mouth
        </p>
        <p className="text-xl font-semibold mb-2">
          Slowly take these breaths and feel your mind, muscle, and body start
          to relax.
        </p>
      </div>
    </div>
  );
};

export default FifthPage;
