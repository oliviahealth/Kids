import Link from "next/link";

const ActivityPage2: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <div className="bg-orange-400 flex flex-col h-full justify-between p-10">
      <div className="space-y-10">
        <div className="flex justify-between">
          <div className="">
            <div className="bg-yellow-400 h-20 w-20 stoneBullet flex items-center justify-center text-lg font-bold">
              2
            </div>
          </div>
          <div className="my-auto mt-24 text-center">
            <h1 className="text-2xl font-black ">Get your schedule</h1>
            <p className="text-lg font-semibold">
              You can choose to print out our pre-made schedule or the blank
              schedule if you would like to create your own routine.
            </p>
          </div>

          <div className="">
            <Link href="/home">
              <button className="h-6 w-6 sm:h-12 sm:w-12 mx-auto mt-3 rounded-full bg-orange-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
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
            className="h-20 w-20 inline-block align-middle text-center bg-orange-600 text-white font-extrabold rounded-full text-3xl"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage2;
