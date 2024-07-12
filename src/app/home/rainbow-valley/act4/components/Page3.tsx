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
                <h1 className="text-lg font-bold ">Enter Your Vehicle</h1>
                <p>
                  To start, begin by getting inside the vehicle and taking a
                  deep breath.
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
                <h1 className="text-lg font-bold ">Observe carefully</h1>
                <p>
                  Think about what you are hearing as you sit in the car and
                  what the seatbelt feels like when you put it on.
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
                <h1 className="text-lg font-bold ">Check your mirrors</h1>
                <p>
                  Are they in the proper positions. What do you see when you are
                  looking through each one of them?
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
                  Take note of your surroundings
                </h1>
                <p>
                  As you start the car and begin to change the gear shift, look
                  at your surroundings and ensure that nothing is near the car.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 space-y-5 mt-2">
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>5</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Hit the road</h1>
                <p>
                  Once on the road you can continue taking deep breaths while
                  you look at the cars ahead of you. Relax your shoulders and
                  briefly look down to see how fast you are going. Are you
                  within the limit?
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>6</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Be patient</h1>
                <p>
                  If you start to feel in a hurry be sure to take extra breaths
                  and remind yourself that you will get to your destination. If
                  you are reckless and try to weave in between other vehicles
                  that might cause an accident.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>7</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Look out for others</h1>
                <p>
                  If you have a child in the backseat who is fussy why might
                  they be overwhelmed? Are they tired? Is it hot in the car? Did
                  they drop their toy on the floor? Whatever the situation may
                  be offer compassion and encourage them to take deep breaths as
                  well.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>8</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Monitor hand placement</h1>
                <p>
                  Now focus on your hand placement on the steering wheel and how
                  your hands holding the wheel are keeping you inside the lines.
                </p>
              </div>
            </div>
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
          <button
            onClick={onNext}
            className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl"
          >
            Continue &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage3;
