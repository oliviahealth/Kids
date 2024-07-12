import Image from "next/image";
import Link from "next/link";
import icon from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import sideImage from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_SideImage.png";

const ActivityPage1: React.FC<{
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
          <div className="col-span-8 space-y-5 order-2 sm:order-1">
            <p className="font-bold">Clean your environment.</p>
            <p>
              Cleaning is a responsibility that some find relaxing and others
              struggle to complete. Despite your opinions on this task,
              completing it while caring for children between the ages of 2-3
              can be extremely daunting. Laundry builds up, smudges on mirrors
              become more prevalent, and you start to become more aware of grime
              from the floors that sticks to your feet. All of this and more can
              be occurring around you increasing your stress level and making it
              difficult to choose where to start. That is why we have created
              the Cleaning Schedule for each day of the week.
            </p>
            <p>
              Our Cleaning Schedule is a list of cleaning options to perform
              around the house each day to lessen the daily workload while still
              getting it all done. It begins on Sunday and follows the days of
              the week with different chores split up based on sections of the
              living space. Examples of the sections are bedrooms, laundry,
              bathrooms, etc. You can choose to print out our pre-made schedule
              or the blank schedule if you would like to create your own
              routine. If you use the pre-made schedule you will follow along
              each day completing the tasks and marking them off on the list.
              Creating your own includes determining the tasks you want to focus
              on each day and writing them onto your schedule. Then you will
              follow that plan throughout the next 7 days. By the end of the
              week you will have cleaned your whole house while most importantly
              ensuring your children are well cared for.
            </p>
          </div>
          <div className="col-span-4 order-1 sm:order-2">
            <Image className="w-full" src={sideImage} alt="Olivia Kids"></Image>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10">
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
  );
};

export default ActivityPage1;
