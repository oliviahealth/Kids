import Image from "next/image";
import meditationImage from "../../../../../../public/images/dashboard/meditation/mediatationImage.png";
import meditationImage2 from "../../../../../../public/images/dashboard/meditation/mediatationImage2.png";
import meditationImage3 from "../../../../../../public/images/dashboard/meditation/mediatationImage3.png";
import meditationImage4 from "../../../../../../public/images/dashboard/meditation/mediatationImage4.png";
import meditationImage5 from "../../../../../../public/images/dashboard/meditation/mediatationImage5.png";
import meditationImage6 from "../../../../../../public/images/dashboard/meditation/mediatationImage6.png";
import meditationImage7 from "../../../../../../public/images/dashboard/meditation/mediatationImage7.png";
import Link from "next/link";

const MeditationActivityPage2: React.FC<{
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
              Caregiver Wellness - Blossom Haven{" "}
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
            <p className="font-bold">The STOP Technique</p>
            <p>
              Using the STOP technique can be done easily within the home and
              can be a tool used to teach other household members how to
              meditate. If other caregivers are stressed, or your child is
              experiencing strong emotions, sit down and teach them this easy,
              4-step method. It may seem like a simple exercise, but the STOP
              method has shown to significantly reduce stress levels in
              caregivers and work towards achieving mindfulness.
            </p>
            <p>
              Just remember, anytime you start to feel overwhelmned at work,
              home, or anywhere else just follow the STOP steps, and you{"'"}ll
              be on your way to achieving mindfulness and better mental/physical
              health as a caregiver.
            </p>
            <p className="font-bold">What will you need?</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 space-y-5 sm:space-y-0">
              <div className="mx-auto">
                <Image src={meditationImage2} alt="Olivia Kids"></Image>
                <p className="text-center">Pillow</p>
              </div>
              <div className="mx-auto">
                <Image src={meditationImage3} alt="Olivia Kids"></Image>
                <p className="text-center">Blanket</p>
              </div>
              <div className="mx-auto">
                <Image src={meditationImage4} alt="Olivia Kids"></Image>
                <p className="text-center">Water</p>
              </div>
              <div className="mx-auto">
                <Image src={meditationImage5} alt="Olivia Kids"></Image>
                <p className="text-center">Fan</p>
              </div>
              <div className="mx-auto">
                <Image src={meditationImage6} alt="Olivia Kids"></Image>
                <p className="text-center">Music</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <Image
              className="m-auto w-full lg:w-[60%]"
              src={meditationImage7}
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
            <button
              onClick={onNext}
              className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl"
            >
              Continue &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationActivityPage2;
