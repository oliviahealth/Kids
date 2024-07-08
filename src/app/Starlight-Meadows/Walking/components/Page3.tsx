import Image from "next/image";
import Link from "next/link";
import meditationImage from "../../../../../public/images/Group 58.png";
import pointThree from "../../../../../public/images/Group 105.png";
import pointFour from "../../../../../public/images/Group 106.png";
import pointTwo from "../../../../../public/images/Group 104.png";
import pointOne from "../../../../../public/images/Group 103.png";
import pointFive from "../../../../../public/images/Group 111.png";
import pointSix from "../../../../../public/images/Group 112.png";
import pointSeven from "../../../../../public/images/Group 113.png";

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
            <Link href="/Starlight-Meadows" passHref>
              <button
                className="h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 mt-5 mb-5">
            <p className="font-bold text-xl">Activity</p>
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
                <h1 className="text-lg font-bold">Go outside and begin your walk</h1>
                <p>
                    This can be in your neighborhood, a park, or anywhere you would like to go on a walk.  
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
                <h1 className="text-lg font-bold">Look outward</h1>
                <p>
                    Notice five things you can see. The leaves on trees may be blowing in the wind, squirrels might be running around, etc.  
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
                <h1 className="text-lg font-bold">Look inward</h1>
                <p>
                    Think about four things you can feel. This could be wind blowing on your face, how your feet feel in your shoes, your child’s hand or their stroller (if they came along for this walk), etc.
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
                <h1 className="text-lg font-bold">Listen</h1>
                <p>
                    Listen for three things you can hear. Your footsteps, birds chirping, people talking, gravel crunching, etc.  
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 space-y-5 mt-2">
            <div className="flex mb-5">
              <div className="my-auto">
                <Image
                  className="h-16 w-16 mx-auto mt-3"
                  src={pointFive}
                  alt="Point Five"
                />
              </div>
              <div className="pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold">Take a deep inhale</h1>
                <p>
                    Think about two things you can smell.
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="my-auto">
                <Image
                  className="h-16 w-16 mx-auto mt-3"
                  src={pointSix}
                  alt="Point Six"
                />
              </div>
              <div className="pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold">Grab a bite</h1>
                <p>
                    Maybe you brought a drink or a snack with you to taste, or there is either at home. Take a second to reflect on the sensation of taste.  
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="my-auto">
                <Image
                  className="h-16 w-16 mx-auto mt-3"
                  src={pointSeven}
                  alt="Point Seven"
                />
              </div>
              <div className="pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold">Repeat</h1>
                <p>

                    You may repeat this activity as many times as you wish, or just do it one time.  
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
