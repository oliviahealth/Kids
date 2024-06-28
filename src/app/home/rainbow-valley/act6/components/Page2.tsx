import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity6Page2SideImage from "../../../../../../public/images/dashboard/rainbowValley/act6/act6_SideImage.png";
import rainbowValleyActivity6Page2Image1 from "../../../../../../public/images/dashboard/rainbowValley/act6/act6_image1.png";
import rainbowValleyActivity6Page2Image2 from "../../../../../../public/images/dashboard/rainbowValley/act6/act6_image2.png";

const RainbowValleyActivity6Page2: React.FC<{
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
            <h1 className="text-xl font-bold ">Cleaning Schedule</h1>
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
            <p className="font-bold">Scheduled scrubbing</p>
            <p>
              We hope that being able to split up the cleaning throughout the
              week helps reduce some of the stress that comes with looking at
              all that needs to be completed. Additionally we hope that after
              completing this schedule you will feel accomplished for getting a
              significant amount of work done around the living space.
            </p>
            <p className="font-bold">What will you need?</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 space-y-5 sm:space-y-0">
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity6Page2Image1}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Pen</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity6Page2Image2}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Cleaning Supplies</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <Image
              className="m-auto w-full lg:w-[60%]"
              src={rainbowValleyActivity6Page2SideImage}
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

export default RainbowValleyActivity6Page2;
