import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";

export interface ActivityStarProps {
  onNext: () => void;
  onBack: () => void;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  buttonImageUrl: StaticImageData;
  backgroundColor: string;
  color: string;
}

const ActivityStar: React.FC<ActivityStarProps> = (
  activityStarProps: ActivityStarProps
) => {
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);
  return (
    <div className="relative w-full h-full max-h-screen overflow-hidden">
      <div className="h-full w-full">
        <div className="z-20 h-full overflow-y-auto">
          <div
            className="relative shadow-2xl h-full p-10 overflow-auto"
            style={{ backgroundColor: activityStarProps.backgroundColor }}
          >
            <div className={`flex flex-col justify-between h-full w-full`}>
              <div className="flex justify-between items-center gap-8">
                <span
                  className="rounded-full flex justify-center items-center w-20 h-20 text-xl font-bold"
                >
                </span>

                <div className="text-center">
                  <h1 className="text-2xl font-bold">
                    {activityStarProps.title}
                  </h1>
                  <p>{activityStarProps.description}</p>
                </div>

                <div className="">
                  <Link
                    style={{ backgroundColor: activityStarProps.color }}
                    href="/home"
                    className={`rounded-full z-30 flex items-center justify-center w-20 h-20`}
                  >
                    X
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image src={activityStarProps.imageUrl} alt="Image" />
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center relative">
                <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
                  <button
                    className="text-red-600 py-2 px-4"
                    onClick={activityStarProps.onBack}
                  >
                    Back
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 md:bottom-5 md:right-5">
                  <button
                    style={{ backgroundColor: activityStarProps.color }}
                    onClick={activityStarProps.onNext}
                    className={`rounded-full z-30 flex items-center justify-center w-12 h-12 md:w-20 md:h-20`}
                  >
                    <Image src={activityStarProps.buttonImageUrl} alt="Arrow" />
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

export default ActivityStar;
