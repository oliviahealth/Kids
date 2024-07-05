import Image from "next/image";
import Link from "next/link";
import rainbowValleyIconImage from "../../../../../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import rainbowValleyActivity3Page1SideImage from "../../../../../../public/images/dashboard/rainbowValley/act1/act1_SideImage.png";

const RainbowValleyActivity3Page1: React.FC<{
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
          <div className="col-span-8 space-y-5 order-2 sm:order-1">
            <p className="font-bold">Tap into your creative side</p>
            <p>
              By the age of two, your childs imagination is beginning to bloom!
              You may notice this in the way they play pretend with the objects
              they have around them. This creativity is important for your child
              because it allows for self expression, problem solving, the
              expression of feelings, and{" "}
              <a
                className="underline text-blue-600"
                href="https://www.pbs.org/wholechild/providers/play.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                improves their fine motor skills
              </a>
              . Just as it is important for toddlers to be creative, it is also
              just important for adults to foster their own creativity. This is
              why we created a Vision Board for Self Care.
            </p>
            <p>
              A{" "}
              <a
                className="underline text-blue-600"
                href="https://www.tandfonline.com/doi/full/10.1080/15401383.2015.1092901?casa_token=qUWifU0ggYAAAAAA%3A2rKg9IVhIXUo_t4pvzMosanTh5WcwUEEzcNjOMTFwx4leqCnVuBKsaAh-dOSHyti-jGp9CGp24J1LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                vision board
              </a>{" "}
              is a collection of pictures that represents your goals and
              aspirations. As a parent, you can decide what it is that gives you
              motivation, peaks your intestest, and inspires you! This could be
              something such as baking, gardening, health goals, or maybe even
              your five year plan! It is easy to get caught up in the stress of
              life, this vision board provides a concrete and observable visual
              for you to focus on and feel positive about.
            </p>
          </div>
          <div className="col-span-4 order-1 sm:order-2">
            <Image
              className="w-full"
              src={rainbowValleyActivity3Page1SideImage}
              alt="Olivia Kids"
            ></Image>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
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

export default RainbowValleyActivity3Page1;
