import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ActivityPageProps {
  stepNumber: number;
  onNext: () => void;
  onBack: () => void;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  buttonImageUrl: StaticImageData;
  backgroundColor: string;
  color: string;
  additionalText: string; // New prop for additional text
}

const ActivityPage: React.FC<ActivityPageProps> = ({
  stepNumber,
  onNext,
  onBack,
  title,
  description,
  imageUrl,
  buttonImageUrl,
  backgroundColor,
  color,
  additionalText, // Destructure the new prop
}) => {
  return (
    <div className="relative w-full h-full max-h-screen overflow-hidden">
      <div className="h-full w-full">
        <div className="z-20 h-full overflow-y-auto">
          <div
            className="relative shadow-2xl h-full p-10 overflow-auto"
            style={{ backgroundColor: backgroundColor }}
          >
            <div className={`flex flex-col justify-between h-full w-full`}>
              <div className="flex justify-between items-center gap-8">
                <span
                  style={{ backgroundColor: color }}
                  className="rounded-full flex justify-center items-center w-20 h-20 text-xl font-bold"
                >
                  {stepNumber}
                </span>

                <div className="text-center">
                  <h1 className="text-2xl font-bold">{title}</h1>
                  <p>{description}</p>
                </div>

                <div className="">
                  <Link
                    style={{ backgroundColor: color }}
                    href="/home"
                    className={`rounded-full z-30 flex items-center justify-center w-20 h-20`}
                  >
                    X
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image src={imageUrl} alt="Image" />
              </div>
              <div className="text-center">
                <div className="mt-4 p-16 font-bold text-black rounded  w-full">
                    <p>{additionalText}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center relative">
                <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
                  <button className="text-red-600 py-2 px-4" onClick={onBack}>
                    Back
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 md:bottom-5 md:right-5">
                  <button
                    style={{ backgroundColor: color }}
                    onClick={onNext}
                    className={`rounded-full z-30 flex items-center justify-center w-12 h-12 md:w-20 md:h-20`}
                  >
                    <Image src={buttonImageUrl} alt="Arrow" />
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
