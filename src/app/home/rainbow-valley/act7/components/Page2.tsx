import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity7Page2SideImage from "../../../../../../public/images/dashboard/rainbowValley/act7/act7_SideImage.png";
import rainbowValleyActivity7Page2Image1 from "../../../../../../public/images/dashboard/rainbowValley/act7/act7_image1.png";
import rainbowValleyActivity7Page2Image2 from "../../../../../../public/images/dashboard/rainbowValley/act7/act7_image2.png";

const RainbowValleyActivity7Page2: React.FC<{
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
            <h1 className="text-xl font-bold ">Self-Care Bingo</h1>
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
            <p className="font-bold">Bingo!</p>
            <p>
              This activity is called Self Care BINGO and gives you multiple
              opportunities to perform self care while playing a game at the
              same time. There are 25 options for self care activities listed on
              the BINGO card. In order to receive a BINGO you will perform 5 of
              the 25 activities in a row. This can be vertically, horizontally,
              or diagonally. Each time you complete an activity you will mark it
              off on the BINGO card which will bring you closer to winning a
              BINGO. If you would like an extra challenge, you are more than
              welcome to complete all of the activities for an extra badge at
              the end of this activity.
            </p>
            <p className="font-bold">What will you need?</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 space-y-5 sm:space-y-0">
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity7Page2Image1}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Marker</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity7Page2Image2}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Bingo Card</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <Image
              className="m-auto w-full lg:w-[60%]"
              src={rainbowValleyActivity7Page2SideImage}
              alt="Olivia Kids"
            ></Image>
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

export default RainbowValleyActivity7Page2;
