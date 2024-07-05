import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";

const RainbowValleyActivity1Page3: React.FC<{
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
                <h1 className="text-lg font-bold ">Select an app</h1>
                <p>Choose a music platform you will create your playlist on.</p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-rose-100 flex items-center justify-center">
                  <p>2</p>
                </div>
              </div>
              <div className=" pl-5 w-full my-auto float-left">
                <h1 className="text-lg font-bold ">Compile a playlist</h1>
                <p>
                  Venture through the platform and add songs to your playlist.
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
                <h1 className="text-lg font-bold ">Pick a time</h1>
                <p>
                  When your day begins, choose a time that you plan to listen to
                  your playlist.
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
                <h1 className="text-lg font-bold ">Let it play</h1>
                <p>
                  Put it on for at least 10-15 minutes and enjoy grooving along
                  to the beat.
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
                <h1 className="text-lg font-bold ">Make it a party</h1>
                <p>Include your children and start a dance party!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
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

export default RainbowValleyActivity1Page3;
