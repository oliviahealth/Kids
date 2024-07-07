import Image from "next/image";
import Link from "next/link";
import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import sideImage from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_SideImage.png";
import image1 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image1.png";
import image2 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image2.png";
import image3 from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_image3.png";

const ActivityPage2: React.FC<{
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
            <p className="font-bold">Assemble an all star playlist</p>
            <p>
              This activity allows you to go onto your favorite music platform
              and compile a playlist made of songs that improve your mood. You
              can make it however long or short you would like. After the
              playlist is finished you can listen to it for 10-15 minutes each
              day. You can listen to it in the morning as you get ready, during
              nap time, when you are feeling overwhelmed, or whenever you would
              like to. This activity call even incorporate the children if they
              enjoy listening to music. You can start the playlist while they
              are playing with toys or have a dance party while the music is
              playing. Track each time that you listen and after 5 days of
              listening for 10-15 minutes you will earn a badge.
            </p>
            <p className="font-bold">What will you need?</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 space-y-5 sm:space-y-0">
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={image1}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Headphones</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={image2}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Favorite App</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={image3}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Music</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 order-1 sm:order-2">
            <Image className="w-full" src={sideImage} alt="Olivia Kids"></Image>
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

export default ActivityPage2;
