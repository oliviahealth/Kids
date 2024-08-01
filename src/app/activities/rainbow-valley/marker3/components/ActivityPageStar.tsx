import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import star from "@/../../public/images/dashboard/rainbowValley/shared/star.svg";

const ActivityPageStar: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() },
      });
      confetti({
        particleCount: 7,
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
    <div className="bg-sky-400 flex flex-col h-full justify-between p-10">
      <div className="space-y-10">
        <div className="flex justify-between">
          <div className=""></div>
          <div className="my-auto mt-24 text-center">
            <h1 className="text-2xl font-black ">Well done!</h1>
            <p className="text-lg font-semibold">Here is your star!</p>
          </div>

          <div className="">
            <Link href="/home">
              <button className="h-6 w-6 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-sky-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 space-y-5 order-2 sm:order-1">
            <Image
              className="m-auto w-[600px] max-w-full"
              src={star}
              alt="Olivia Kids"
            ></Image>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10">
        <div className="justify-self-center sm:justify-self-start">
          <button
            onClick={onBack}
            className="text-rose-600 font-bold py-2 px-4"
          >
            Back
          </button>
        </div>
        <div className="justify-self-center sm:justify-self-end">
          <button
            onClick={onNext}
            className="h-20 w-20 inline-block align-middle text-center bg-sky-600 text-white font-extrabold rounded-full text-3xl"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPageStar;
