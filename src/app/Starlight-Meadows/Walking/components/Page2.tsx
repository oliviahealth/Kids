import Image from "next/image";
import meditationImage from "../../../../../public/images/Group 58.png";
import meditationImage1 from "../../../../../public/images/Group 91.png";
import bookIcon from "../../../../../public/images/solar_bottle-bold.svg";
import journalIcon from "../../../../../public/images/mdi_sunglasses.svg";
import musicIcon from "../../../../../public/images/fluent_food-apple-24-filled.svg";
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
            <h1 className="text-2xl font-extrabold">Stress Management - Walking</h1>
            <p className="text-lg" style={{ color: '#5A6EDD' }}>
              Caregiver Wellness - Starlight Meadows
            </p>
          </div>
          <div className="ml-auto">
            <Link href="/home">
              <button className="h-6 w-6 sm:h-12 sm:w-12 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                X
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-1/2 space-y-5">
            <div className="space-y-5 pt-5">
              <p className="text-lg font-bold">Take note</p>
              <p>
                While walking it is important to take note of things that are happening both externally and internally. Keep record of changes in your environment and mental space. Observe without judgment, and appreciate these changes regardless of their tone.
              </p>
              
            </div>
            <div className="pt-10">
              <p className="font-bold mb-16">What will you need?</p>
              <div className={styles.iconsWrapper}>
                <div className={`${styles.iconItem} ${styles.iconBook}`}>
                  <Image className={styles.iconImage} src={bookIcon} alt="Book" />
                  <div className={styles.iconText}>Water</div>
                </div>
                <div className={styles.iconItem}>
                  <Image className={styles.iconImage} src={journalIcon} alt="Journal" />
                  <div className={styles.iconText}>Sunglasses</div>
                </div>
                <div className={styles.iconItem}>
                  <Image className={styles.iconImage} src={musicIcon} alt="Music" />
                  <div className={styles.iconText}>Snack</div>
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
