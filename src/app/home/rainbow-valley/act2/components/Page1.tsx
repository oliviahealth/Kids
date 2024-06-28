import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity2Page1SideImage from "../../../../../../public/images/dashboard/rainbowValley/act2/act2_SideImage.png";

const RainbowValleyActivity2Page1: React.FC<{
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
          <div className="col-span-8 space-y-5 mt-5 sm:m-auto order-2 sm:order-1">
            <div className="space-y-5">
              <p className="font-bold">Jot your thoughts</p>
              <p>
                Caring for a child or multiple children between the ages of 2-3
                is a difficult task. Practicing self-care may feel like the
                least important task on your to-do list. As a caregiver it is
                important to implement self-care so you can best take care of
                others. It can improve confidence, mood, and foster an
                encouraging environment for the children.
              </p>
              <p>
                This activity consists of setting aside a certain amount of time
                each day to write about anything you may want to clear from your
                head. You can write down what events happened that day, what you
                are thankful for, or even what obstacle(s) you faced and how you
                handled it/them or wished you handled it/them. If you feel
                remorseful for how you handled a certain situation, thinking
                through how it went and what to improve in the future can help
                you try to avoid that circumstance again. Jotting down the
                moments that went well and brought you joy can instill in you
                the energy you need to take care of the children.
              </p>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <Image
              className="m-auto w-full lg:w-[60%]"
              src={rainbowValleyActivity2Page1SideImage}
              alt="Olivia Kids"
            ></Image>
          </div>
        </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 space-y-5 sm:space-y-0">
          <div className="justify-self-center sm:justify-self-start">
            <button className="text-rose-600 font-bold py-2 px-4">
              Learn More
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

export default RainbowValleyActivity2Page1;
