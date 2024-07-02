import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";

const RainbowValleyActivity7Page3: React.FC<{
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
                <h1 className="text-lg font-bold ">Get your BINGO card</h1>
                <p>
                  You can print out our BINGO card template or transfer the
                  activities over to a paper of your own.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>2</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Work towards BINGO</h1>
                <p>
                  In order to receive a BINGO you will perform 5 of the 25
                  activities in a row. This can be vertically, horizontally, or
                  diagonally.
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
                <h1 className="text-lg font-bold ">Take it further!</h1>
                <p>
                  If you would like an extra challenge, you are more than
                  welcome to complete all of the activities for an extra badge
                  at the end of this activity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 space-y-5 mt-2"></div>
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
              Continue to activity &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RainbowValleyActivity7Page3;
