import Image from "next/image";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity4Page9SideImage from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_SideImage.png";
import rainbowValleyActivity4Page9Image1 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image4.png";
import rainbowValleyActivity4Page9Image2 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image4.png";
import rainbowValleyActivity4Page9Image3 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image4.png";

import Link from "next/link";
const RainbowValleyActivity4Page9: React.FC<{
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
              src={rainbowValleyIconImage}
              alt="Olivia Kids"
            ></Image>
          </div>
          <div className=" pl-5 w-full my-auto float-left">
            <h1 className="text-xl font-bold ">Mindful Driving</h1>
            <p className="text-lg text-rose-300">
              Caregiver Wellness - Rainbow Valley
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
                    You have successfully finished this activity and reached
                    your destination safely. Hopefully you are calmer than
                    before by focusing on your senses rather than consuming
                    yourself with the stressors of driving. The next time you
                    feel overwhelmed when inside the car you can think back to
                    these steps to ensure safety and improve your mental health.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 space-y-5 sm:space-y-0 ">
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={rainbowValleyActivity4Page9Image1}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={rainbowValleyActivity4Page9Image2}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={rainbowValleyActivity4Page9Image3}
                  alt="Olivia Kids"
                ></Image>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <div className="">
              <Image
                className="m-auto w-full lg:w-[60%]"
                src={rainbowValleyActivity4Page9SideImage}
                alt="Olivia Kids"
              ></Image>
            </div>
          </div>
        </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 space-y-5 sm:space-y-0">
          <div className="justify-self-center sm:justify-self-start">
            <button
              onClick={onBack}
              className="text-rose-600 font-bold py-2 px-4"
            >
              Back
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

export default RainbowValleyActivity4Page9;
