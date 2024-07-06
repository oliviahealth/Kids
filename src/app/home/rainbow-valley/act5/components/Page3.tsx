import Image from "next/image";
import Link from "next/link";
import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";

const ActivityPage3: React.FC<{
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
              src={icon}
              alt="Olivia Kids"
            ></Image>
          </div>
          <div className=" pl-5 w-full my-auto float-left">
            <h1 className="text-xl font-bold ">Self-Care Wheel</h1>
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
          <div className="col-span-12 mt-5">
            <p className="font-bold">Guidelines</p>
          </div>
          <div className="col-span-12 sm:col-span-6 space-y-5 mt-2">
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>1</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Cut out a circle</h1>
                <p>Using a piece of paper, draw a circle and cut it out.</p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>2</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Divide into 8 sections</h1>
                <p>
                  You will draw a circle and 4 lines inside of it (1 horizontal,
                  1 vertical, and 2 diagonal) to create 8 sections
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>3</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">
                  Write down your favorite self-care activities
                </h1>
                <p>
                  These can be those you found online, or some you came up with
                  yourself
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>4</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">
                  Spin the wheel and have fun!
                </h1>
                <p>Complete whatever activities the wheel lands</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 space-y-5 mt-2"></div>
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
          <button
            onClick={onNext}
            className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl"
          >
            Continue to activity &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage3;
