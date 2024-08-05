import Image from "next/image";
import meditationImage from "@/public/images/dashboard/meditation/mediatationImage.png";
import meditationImage9 from "@/public/images/dashboard/meditation/mediatationImage9.png";
import meditationImage10 from "@/public/images/dashboard/meditation/meditationImage10.png";
import meditationImage11 from "@/public/images/dashboard/meditation/meditationImage11.jpeg";
import Link from "next/link";
const MeditationActivityPage9: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <section>
      <div className=" p-10 space-y-5">
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
            <div className="grid grid-cols-12">
              <div className="col-span-12 space-y-5">
                <div className="space-y-5">
                  <p className="font-bold">Key Takeaways</p>
                  <p>
                    Using the STOP technique can be done easily within the home
                    and can be a tool used to teach other household members how
                    to meditate. If other caregivers are stressed, or your child
                    is experiencing strong emotions, sit down and teach them
                    this easy, 4-step method. It may seem like a simple
                    exercise, but the STOP method has shown to significantly
                    reduce stress levels in caregivers and work towards
                    achieving mindfulness.
                  </p>
                  <p>
                    Just remember, anytime you start to feel overwhelmed at
                    work, home, or anywhere else just follow the STOP steps, and
                    you{"'"}ll be on your way to achieving mindfulness and
                    better mental/physical health as a caregiver.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 space-y-5 sm:space-y-0 ">
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={meditationImage10}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={meditationImage11}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={meditationImage10}
                  alt="Olivia Kids"
                ></Image>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <div className="">
              <Image
                className="m-auto w-full lg:w-[60%]"
                src={meditationImage9}
                alt="Olivia Kids"
              ></Image>
            </div>
          </div>
        </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 space-y-5 sm:space-y-0">
          <div className="justify-self-center sm:justify-self-start">
            <button className="text-rose-600 font-bold py-2 px-4">
              Learn More
            </button>
          </div>
          <div className="justify-self-center sm:justify-self-end">
            <Link href="/home">
              <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl">
                Continue &gt;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationActivityPage9;
