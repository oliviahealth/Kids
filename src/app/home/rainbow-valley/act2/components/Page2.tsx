import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity2Page2SideImage from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_SideImage.png";
import rainbowValleyActivity2Page2Image1 from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_image1.png";
import rainbowValleyActivity2Page2Image2 from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_image2.png";
import rainbowValleyActivity2Page2Image3 from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_image3.png";

const RainbowValleyActivity2Page2: React.FC<{
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
            <h1 className="text-xl font-bold ">Journaling</h1>
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
            <p className="font-bold">Create with guidance</p>
            <p>
              This task can be completed by using the journal templates we have
              created as inspiration for what to write about. You can choose to
              print the templates out and write on them or transfer the
              information into a journal of your own. There are four templates
              that can be completed before going to bed, and one that can be
              worked on in the morning before starting your day. If you would
              like to incorporate the children into this activity, you can
              follow the templates and have the kid(s) think of ideas for how
              they would answer each section. You can either write down their
              answers or just listen to what they are saying.
            </p>
            <p className="font-bold">What will you need?</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 space-y-5 sm:space-y-0">
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity2Page2Image1}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Journal Templates</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity2Page2Image2}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Journal</p>
              </div>
              <div className="mx-auto">
                <Image
                  className="m-auto h-full object-contain"
                  src={rainbowValleyActivity2Page2Image3}
                  alt="Olivia Kids"
                ></Image>
                <p className="text-center">Pen</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 order-1 sm:order-2">
            <Image
              className="w-full"
              src={rainbowValleyActivity2Page2SideImage}
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

export default RainbowValleyActivity2Page2;
