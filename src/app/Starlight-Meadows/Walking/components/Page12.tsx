import Image from "next/image";
import meditationImage from "../../../../../public/images/Group 58.png";
import meditationImage1 from "../../../../../public/images/Group 91.png";
import addPhotoIcon from "../../../../../public/images/Group 107.png";
import continueButton from "../../../../../public/images/Group 108.png";
import Link from "next/link";

const MeditationActivityPage1: React.FC<{
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
          <div className="pl-5 w-2/3 my-auto">
            <h1 className="text-2xl font-extrabold">Stress Management - Walking</h1>
            <p className="text-lg" style={{ color: '#5A6EDD' }}>
              Caregiver Wellness - Starlight Meadows
            </p>
          </div>
          <div className="ml-auto">
            <Link href="/home">
              <button className="h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-1/2 space-y-5">
            <div className="space-y-5 pt-5">
              <p className="text-lg font-bold">Key Takeaways</p>
              <p>
                Walking is a great form of low-impact physical activity. Pairing walking with a mindfulness activity (such as this one) is an effective way to de-stress and center yourself. 
              </p>
              <p>
                This activity can be used again and again as free and simple way to destress. Some people like to make walking part of their weekly routine, and others like to do it whenever they feel like it - do whatever works best for you!
              </p>
            </div>
          </div>
          <div className="w-1/2 mt-0 transform -translate-y-20 pl-10">
            <Image
              className="w-full lg:w-[90%] mx-auto"
              src={meditationImage1}
              alt="Olivia Kids"
            />
          </div>
        </div>
      </div>
      <div className="pl-10 pb-5 flex justify-start">
        <Image
          src={addPhotoIcon}
          alt="Add Photo Icon"
        />
      </div>
      <div className="pt-5 flex justify-between p-10">
        <button
          onClick={onBack}
          className="text-rose-600 font-bold py-2 px-4"
        >
          Back
        </button>
        <Link href="/Starlight-Meadows">
          <Image
            className="cursor-pointer"
            src={continueButton}
            alt="Continue Button"
          />
        </Link>
      </div>
    </section>
  );
};

export default MeditationActivityPage1;
