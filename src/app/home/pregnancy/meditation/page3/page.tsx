import Image from "next/image";
import meditationImage from "../../../../../../public/images/dashboard/meditation/mediatationImage.png";
import meditationImage8 from "../../../../../../public/images/dashboard/meditation/mediatationImage8.png";
import Link from "next/link";
const MeditationActivity: React.FC = () => {
  return (
    <section>
      <div className=" p-20 space-y-5">
        <div className="flex">
          <div className="my-auto">
            <Image
              className="max-w-full max-h-full"
              src={meditationImage}
              alt="Olivia Kids"
            ></Image>
          </div>
          <div className=" pl-5 w-full my-auto float-left">
            <h1 className="text-3xl font-bold ">Meditation</h1>
            <p className="text-2xl text-yellow-400">
              Caregiver Wellness - Blossom Haven{" "}
            </p>
          </div>

          <div className="float-right">
            <Link href="/home">
              <button className="h-24 w-24 mx-auto mt-3 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-8 space-y-5">
            {/* <div className="grid grid-cols-12"> */}
            {/* <div className="col-span-12 space-y-5"> */}
            {/* <div className="space-y-5"> */}
            <p className="text-lg font-bold">Activity</p>
            <div className="flex">
              <div className="my-auto">
                <div className="h-16 w-16 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p className="text-2xl">1</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Stop</h1>
                <p className="">
                  Pause what you are doing, and find a comfortable place to sit
                  down.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-16 w-16 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p className="text-2xl">2</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Take a few deep breaths</h1>
                <p className="">
                  Breathe in through your nose, and exhale through your mouth.
                  Slowly take these breaths and feel your mind, muscle, and body
                  start to relax.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-16 w-16 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p className="text-2xl">3</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Observe</h1>
                <p className="">
                  Notice and take a look around at your environment. Find out
                  what is causing your stress or anxiety so you know the cause
                  of the stress.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-16 w-16 mx-auto mt-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p className="text-2xl">4</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Proceed</h1>
                <p className="">
                  Return back to what you were doing. Now that you know what
                  caused your stress and were able to relax for a few seconds to
                  minutes, you have a clear mind and can respond to the
                  situation.
                </p>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="col-span-4">
            {/* <div className=""> */}
            <Image
              className="m-auto"
              src={meditationImage8}
              alt="Olivia Kids"
            ></Image>
            {/* </div> */}
          </div>
        </div>
        <div className="pt-10">
          <div className="float-left">
            <button className="text-rose-600 font-bold py-2 px-4">
              Learn More
            </button>
          </div>
          <div className="float-right">
            <Link href="./page4">
              <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl">
                Continue to activity &gt;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationActivity;
