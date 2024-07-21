import Image from "next/image";
import meditationImage from "../../../../../../public/images/dashboard/meditation/mediatationImage.png";
import meditationImage8 from "../../../../../../public/images/dashboard/meditation/mediatationImage8.png";
import Link from "next/link";
const MeditationActivityPage3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <section>
      <div className="p-10 space-y-5">
        <div className="flex">
          <div className="my-auto">
            <Image
              className="max-w-full max-h-full"
              src={meditationImage}
              alt="Olivia Kids"
            ></Image>
          </div>
          <div className=" pl-5 w-full my-auto float-left">
            <h1 className="text-xl font-bold ">Meditation</h1>
            <p className="text-lg text-yellow-400">
              Caregiver Wellness - Prenatal Paradise{" "}
            </p>
          </div>

          <div className="float-right">
            <Link href="/home">
              <button className="h-6 w-6 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-8 space-y-5 mt-5 sm:m-auto order-2 sm:order-1">
            <p className="font-bold">Activity</p>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>1</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Stop</h1>
                <p>
                  Pause what you are doing, and find a comfortable place to sit
                  down.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>2</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Take a few deep breaths</h1>
                <p>
                  Breathe in through your nose, and exhale through your mouth.
                  Slowly take these breaths and feel your mind, muscle, and body
                  start to relax.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>3</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Observe</h1>
                <p>
                  Notice and take a look around at your environment. Find out
                  what is causing your stress or anxiety so you know the cause
                  of the stress.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>4</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Proceed</h1>
                <p>
                  Return back to what you were doing. Now that you know what
                  caused your stress and were able to relax for a few seconds to
                  minutes, you have a clear mind and can respond to the
                  situation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <Image
              className="m-auto w-full lg:w-[60%]"
              src={meditationImage8}
              alt="Olivia Kids"
            ></Image>
          </div>
        </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 space-y-5 sm:space-y-0">
          <div className="justify-self-center sm:justify-self-start">
            <button className="text-rose-600 font-bold py-2 px-4">
              Learn More
            </button>
          </div>
          <div className="justify-self-center sm:justify-self-end">
            {/* <Link href="./page4"> */}
            <button
              onClick={onNext}
              className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl"
            >
              Continue to activity &gt;
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationActivityPage3;
