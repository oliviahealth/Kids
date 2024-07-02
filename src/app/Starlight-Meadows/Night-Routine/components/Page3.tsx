import Image from "next/image";
import Link from "next/link";
import meditationImage from "../../../../../public/images/Group 58.png";
import pointThree from "../../../../../public/images/Group 105.png";
import pointFour from "../../../../../public/images/Group 106.png";
import pointTwo from "../../../../../public/images/Group 104.png";
import pointOne from "../../../../../public/images/Group 103.png";
import continueButton from "../../../../../public/images/Group 110.svg";

const RainbowValleyActivity1Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <section className="h-full flex flex-col justify-between">
      <div className="p-10 space-y-5 flex-grow">
        <div className="flex">
          <div className="my-auto">
            <Image
              className="max-w-full max-h-full"
              src={meditationImage}
              alt="Olivia Kids"
            />
          </div>
          <div className="pl-5 w-full my-auto float-left">
            <h1 className="text-2xl font-extrabold">Sleep Health</h1>
            <p className="text-lg" style={{ color: '#5A6EDD' }}>
              Caregiver Wellness - Starlight Meadows
            </p>
          </div>
          <div className="ml-auto">
            <Link href="/home">
              <button className="h-6 w-6 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 mt-5 mb-5">
            <p className="font-bold text-xl">Guidelines</p>
          </div>
          <div className="col-span-12 sm:col-span-6 space-y-5 mt-2">
            <div className="flex mb-5">
              <div className="my-auto">
                <Image
                  className="h-16 w-16 mx-auto mt-3"
                  src={pointOne}
                  alt="Point One"
                />
              </div>
              <div className="pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold">Limit caffeine in the evening</h1>
                <p>
                  Caffeine consumption stimulates your brain and keeps you alert and awake. Try to cut out caffeine in the late afternoon and evening.
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="my-auto">
                <Image
                  className="h-16 w-16 mx-auto mt-3"
                  src={pointTwo}
                  alt="Point Two"
                />
              </div>
              <div className="pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold">Avoid long naps</h1>
                <p>
                  Long naps or naps late in the day. Naps can be very useful and energizing, however, you should try to limit your naps to 30 minutes and avoid napping late in the day.
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="my-auto">
                <Image
                  className="h-16 w-16 mx-auto mt-3"
                  src={pointThree}
                  alt="Point Three"
                />
              </div>
              <div className="pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold">Eliminate screens</h1>
                <p>
                  Exposure to screens such as smartphones or laptops before bed keeps your mind active. Try to eliminate screen time for at least 30 minutes before bed.
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="my-auto">
                <Image
                  className="h-16 w-16 mx-auto mt-3"
                  src={pointFour}
                  alt="Point Four"
                />
              </div>
              <div className="pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold">Ease your waking mind</h1>
                <p>
                  Implement some calming activities for your brain before bed. Some examples include reading a book, journaling, or listening to calming music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-between p-10">
        <button onClick={onBack} className="text-rose-600 font-bold py-2 px-4">
          Back
        </button>
        <button onClick={onNext}>
          <Image src={continueButton} alt="Continue to activity" />
        </button>
      </div>
    </section>
  );
};

export default RainbowValleyActivity1Page3;
