import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity3Page2SideImage from "../../../../../../public/images/dashboard/rainbowValley/act3/act3_SideImage.png";
import rainbowValleyActivity3Page2Image1 from "../../../../../../public/images/dashboard/rainbowValley/act3/act3_image1.png";
import rainbowValleyActivity3Page2Image2 from "../../../../../../public/images/dashboard/rainbowValley/act3/act3_image2.png";
import rainbowValleyActivity3Page2Image3 from "../../../../../../public/images/dashboard/rainbowValley/act3/act3_image3.png";
import rainbowValleyActivity3Page2Image4 from "../../../../../../public/images/dashboard/rainbowValley/act3/act3_image4.png";

const RainbowValleyActivity3Page2: React.FC<{
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
            <h1 className="text-xl font-bold ">Vision Board for Self-Care</h1>
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
            <p className="font-bold">Collage of inspiration</p>
            <p>
              For this activity, first start by taking time away from
              distraction to figure out what it is that inspires you. Once you
              have this goal, you{"'"}ll need to decide how you want to make
              your vision board. Do you want to make it online on a platform
              such as PowerPoint or would you like to use a piece of paper? If
              you are using an online platform begin searching the internet for
              pictures or drawings that relate to your goal. You can even use
              your own pictures! If you are wanting to make your vision board on
              a piece of paper, you can print pictures, draw your own, or cut
              out images from magazines! Once you have gathered your pictures
              create a collage on your paper! Some people like to hang their
              vision board in a place that they can see it everyday - such as by
              the bedroom mirror. This allows people to remember their vision
              and to go back to that positive mindset!
            </p>
            <p className="font-bold">What will you need?</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 space-y-5 sm:space-y-0">
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity3Page2Image1}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Paper</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity3Page2Image2}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Scissors</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity3Page2Image3}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Glue</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity3Page2Image4}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Magazine</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <Image
              className="m-auto w-full lg:w-[60%]"
              src={rainbowValleyActivity3Page2SideImage}
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

export default RainbowValleyActivity3Page2;
