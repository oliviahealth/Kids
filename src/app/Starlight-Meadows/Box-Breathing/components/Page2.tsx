import Image from "next/image";
import meditationImage from "../../../../../public/images/Group 58.png";
import meditationImage1 from "../../../../../public/images/Group 91.png";
import bookIcon from "../../../../../public/images/ph_person-fill.svg";
import journalIcon from "../../../../../public/images/Group 54.svg";
import musicIcon from "../../../../../public/images/Vector.svg";
import continueButton from "../../../../../public/images/Group 109.svg";
import styles from "./PageStyles.module.css";

import Link from "next/link";

const MeditationActivityPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <section className="h-full flex flex-col justify-between">
      <div className="p-10 space-y-5 flex-grow">
        <div className="flex">
          <div className="my-auto">
            <Image
              className="max-w-full max-h-full"
              src={meditationImage}
              alt="Olivia Kids"
            />
          </div>
          <div className="pl-5 w-2/3 my-auto">
            <h1 className="text-2xl font-extrabold">Stress Management - Box Breathing</h1>
            <p className="text-lg" style={{ color: '#5A6EDD' }}>
              Caregiver Wellness - Starlight Meadows
            </p>
          </div>
          <div className="ml-auto">
            <Link href="/Starlight-Meadows" passHref>
              <button
                className="h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-1/2 space-y-5">
            <div className="space-y-5 pt-5">
              <p className="text-lg font-bold">Getting in the Groove</p>
              <p>
                One breathing technique we will be trying today is called Box breathing. Box breathing is a technique used worldwide, notably by Navy SEALs, as a form of stress relief. You may have also heard of this technique being called equal breathing, or square breathing.  
              </p>
              <p>
                You can practice this breathing technique regularly, or just as needed for stress. 
              </p>
            </div>
            <div className="pt-10">
              <p className="font-bold mb-16">What will you need?</p>
              <div className={styles.iconsWrapper}>
                <div className={`${styles.iconItem} ${styles.iconBook}`}>
                  <Image className={styles.iconImage} src={bookIcon} alt="Book" />
                  <div className={styles.iconText}>Alone Time</div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-1/2 mt-0 transform -translate-y-20 pl-10">
            <Image
              className="w-full lg:w-[90%] mx-auto"
              src={meditationImage1}
              alt="Olivia Kids"
            />
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-between p-10">
        <button
          onClick={onBack}
          className="text-rose-600 font-bold py-2 px-4"
        >
          Back
        </button>
        <button onClick={onNext}>
          <Image src={continueButton} alt="Continue Button" />
        </button>
      </div>
    </section>
  );
};

export default MeditationActivityPage1;
