import Image from "next/image";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity1Page9SideImage from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_SideImage.png";
import rainbowValleyActivity1Page9Image1 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image4.png";
import rainbowValleyActivity1Page9Image2 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image4.png";
import rainbowValleyActivity1Page9Image3 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image4.png";

import Link from "next/link";
const RainbowValleyActivity1Page9: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col h-full justify-between p-10">
      <div className="space-y-10">
        <div className="flex">
          <div className="my-auto">
            <Image
              className="max-w-full max-h-full"
              src={rainbowValleyIconImage}
              alt="Olivia Kids"
            ></Image>
          </div>
          <div className=" pl-5 w-full my-auto float-left">
            <h1 className="text-xl font-bold ">
              Create Your Own Music Playlist
            </h1>
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
          <div className="col-span-8 space-y-5 order-2 sm:order-1">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="space-y-5">
                  <p className="font-bold">Key Takeaways</p>
                  <p>
                    We would like to congratulate you on completing this
                    activity. In addition we hope that listening to some of your
                    favorite or even a few new songs has given you more energy
                    to care for your children. It is important to make sure you
                    are healthy and hopefully this activity helped make that
                    task a little easier.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 space-y-5 sm:space-y-0 ">
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={rainbowValleyActivity1Page9Image1}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={rainbowValleyActivity1Page9Image2}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div>
                <Image
                  className="rounded-2xl h-full w-full"
                  src={rainbowValleyActivity1Page9Image3}
                  alt="Olivia Kids"
                ></Image>
              </div>
            </div>
          </div>
          <div className="col-span-4 order-1 sm:order-2">
            <Image
              className="w-full"
              src={rainbowValleyActivity1Page9SideImage}
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
          <Link href="/home">
            <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl">
              Continue &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RainbowValleyActivity1Page9;
