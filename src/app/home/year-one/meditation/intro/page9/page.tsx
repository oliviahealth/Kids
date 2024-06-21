import Image from "next/image";
import meditationImage from "../../../../../../../public/images/dashboard/meditation/mediatationImage.png";
import meditationImage9 from "../../../../../../../public/images/dashboard/meditation/mediatationImage9.png";
import meditationImage10 from "../../../../../../../public/images/dashboard/meditation/meditationImage10.png";
import meditationImage11 from "../../../../../../../public/images/dashboard/meditation/meditationImage11.jpeg";
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
            <div className="h-24 w-24 mx-auto mt-3 rounded-full bg-gray-300 flex items-center justify-center">
              <p className="text-2xl">X</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-8 space-y-5">
            <div className="grid grid-cols-12">
              <div className="col-span-12 space-y-5">
                <div className="space-y-5">
                  <p className="font-bold">Key Takeaways</p>
                  <p className="">
                    Using the STOP technique can be done easily within the home
                    and can be a tool used to teach other household members how
                    to meditate. If other caregivers are stressed, or your child
                    is experiencing strong emotions, sit down and teach them
                    this easy, 4-step method. It may seem like a simple
                    exercise, but the STOP method has shown to significantly
                    reduce stress levels in caregivers and work towards
                    achieving mindfulness.
                  </p>
                  <p className="">
                    Just remember, anytime you start to feel overwhelmed at
                    work, home, or anywhere else just follow the STOP steps, and
                    you'll be on your way to achieving mindfulness and better
                    mental/physical health as a caregiver.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-10">
              <div className="">
                <Image
                  className="rounded-2xl h-full w-full"
                  src={meditationImage10}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div className="">
                <Image
                  className="rounded-2xl h-full w-full"
                  src={meditationImage11}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div className="">
                <Image
                  className="rounded-2xl h-full w-full"
                  src={meditationImage10}
                  alt="Olivia Kids"
                ></Image>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="">
              <Image
                className="m-auto w-[80%]"
                src={meditationImage9}
                alt="Olivia Kids"
              ></Image>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="float-left">
            <button className="text-rose-600 font-bold py-2 px-4">
              Learn More
            </button>
          </div>
          <div className="float-right">
            <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl">
              Continue &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationActivity;
