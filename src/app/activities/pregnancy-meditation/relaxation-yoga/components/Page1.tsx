import Image from "next/image";
import Link from "next/link";
import styles from "../RelaxationYoga.module.css";
import MaterialChecklist from "@/components/MaterialChecklist";
import { useState } from "react";

const RelaxationYogaPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const materials = [
    { imagePath: "/images/dashboard/pregnancy/yoga-mat.svg", label: "Yoga Mat" },
    { imagePath: "/images/dashboard/pregnancy/pillow.svg", label: "Pillows" },
    { imagePath: "/images/dashboard/pregnancy/music.svg", label: "Relaxing Music" }
  ];
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img
            src="/images/dashboard/pregnancy/prenatal-icon.svg"
            alt="Flower Icon"
            className={styles.icon}
          />
          <div>
            <h1 className={styles.title}>Relaxation Yoga</h1>
            <h2 className={styles.subtitle}>
              Caregiver Wellness - Prenatal Paradise
            </h2>
          </div>
        </div>
        <Link href="/home">
          <button className={styles.exitButton}>
            <img
              src="/images/exit.svg"
              alt="Exit"
              className={styles.exitIcon}
            />
          </button>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h3 className={styles.heading}>
            <b>Introduction</b>
          </h3>
          <p className={styles.text}>
            With the many life changes and busy schedule that comes with
            planning your baby’s arrival, pregnancy can be an overwhelming time
            in your life. This is completely normal, but it's important you are
            working to manage this stress, so it does not affect you and your
            baby’s health. Different relaxation methods can be very useful tools
            to cope with stress during pregnancy. One of these methods is yoga.
            Yoga can be a great way to boost your mental and physical health. It
            can be used to take a needed break from your busy schedule.
            Preparing for your baby is important but staying happy and healthy
            is too! As a bonus, yoga builds skills in strength, flexibility, and
            mindful breathing to better prepare you for giving birth! Now that
            we know a little bit about the benefits of yoga during pregnancy,
            let's get started!
          </p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <MaterialChecklist
            materials={materials}
            setButtonDisabled={setButtonDisabled}
            colorScheme={{
              borderColor: "F797FF", // the border of the items in the material neeeded section
              emptySlotColor: "FCD3FF", // the background color of the empty slots in the material needed section
              backgroundColor: "FEEDFF", // the background color of the material needed section
            }}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.learnButton}>
          <img src="/images/learnmorebutton.svg" alt="Learn more" />
        </button>
        <button
          className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center ${
            buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={onNext}
          disabled={buttonDisabled}
        >
          Continue
          <Image
            src="/images/dashboard/adventure-bay/next_arrow.png"
            alt="arrow"
            width={30}
            height={30}
          />
        </button>
      </div>
    </>
  );
};

export default RelaxationYogaPage1;
