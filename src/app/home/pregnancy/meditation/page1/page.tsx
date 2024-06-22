import Image from "next/image";
import meditationImage from "../../../../../../public/images/dashboard/meditation/mediatationImage.png";
import meditationImage1 from "../../../../../../public/images/dashboard/meditation/mediatationImage1.png";
import Link from "next/link";
const MeditationActivity: React.FC = () => {
  return (
    <section>
      <div className=" p-10 space-y-5">
        <div className="flex">
          <div className="my-auto">
            <Image
              className="max-w-full max-h-full"
              src={meditationImage}
              alt="Olivia Kids"
            ></Image>
          </div>
          <div className=" pl-5 w-full my-auto float-left">
            <h1 className="text-xl font-bold ">Meditation</h1>
            <p className="text-lg text-yellow-400">
              Caregiver Wellness - Blossom Haven{" "}
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
              <p className="font-bold">Why Meditation?</p>
              <p>
                Being the caregiver of an infant (0-1 year old) is not an easy
                task and can cause a large amount of stress. Chronic stress is
                defined as a continual feeling of pressure and being overwhelmed
                for a long period of time.{" "}
                <span className="font-bold">Chronic stress</span> has been
                linked to diseases such as hypertension (high blood pressure),
                depression, addiction, and anxiety disorders which have a strong
                impact on a person{"'"}s emotional, physical, and{" "}
                <span className="font-bold">mental health</span>. Giving time to
                yourself as a caregiver is vital to keeping yourself healthy and
                ensures you{"'"}re healthy enough to take care of your 0-1 year
                old(s).
              </p>
              <p>
                One way to decrease the feeling of stress as a caregiver is to
                practice meditation. Meditation is an effective tool to reduce
                stress levels and work towards achieving{" "}
                <span className="font-bold">mindfulness</span> (awareness of one
                {"'"}s emotions and feelings without judgment). Those who
                practice meditation have many{" "}
                <span className="font-bold">opportunities</span> to reduce their
                feelings of stress, improve their sleep, regulate their emotions
                (especially for postpartum caregivers), bond with their infants,
                manage pain, and improve postpartum recovery with a mind-body
                connection.
              </p>
              <p>
                Meditation is a very personal experience that can be done in a
                number of ways within the home. For all inclusive purposes, we
                are going to focus on meditation practices that any caregiver
                can do within their home environment.
              </p>
            </div>
          </div>
          <div className="col-span-4 mt-5 sm:m-auto order-1 sm:order-2">
            <Image src={meditationImage1} alt="Olivia Kids"></Image>
          </div>
        </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 space-y-5 sm:space-y-0">
          <div className="justify-self-center sm:justify-self-start">
            <button className="text-rose-600 font-bold py-2 px-4">
              Learn More
            </button>
          </div>
          <div className="justify-self-center sm:justify-self-end">
            <Link href="./page2">
              <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl">
                Continue &gt;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationActivity;
