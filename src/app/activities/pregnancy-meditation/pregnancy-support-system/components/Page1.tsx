import Image from "next/image";
import Link from "next/link";
import styles from "../PregnancySupportSystem.module.css";
import MaterialChecklist from "@/components/MaterialChecklist";
import { useState } from "react";

const PregnancySupportSystemPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const materials = [
    { imagePath: "/images/dashboard/pregnancy/paper.svg", label: "Paper" },
    { imagePath: "/images/dashboard/pregnancy/pencil.svg", label: "Writing Utensil" },
    { imagePath: "/images/dashboard/pregnancy/printer.svg", label: "Printer (Optional)" },
    { imagePath: "/images/dashboard/pregnancy/phone.svg", label: "Phone (Optional)" }
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
            <h1 className={styles.title}>My Pregnancy Support System</h1>
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
            Pregnancy is a very exciting time in your life. It can also be unpredictable and overwhelming at times, but you are not alone. Many pregnant people exeprience these emotions. With the many changes happening to your body, hormones, and lifestyle, stress is expected. Luckily, there are many ways to prepare for the stress to come. Having a support system to encourage you throughout your pregnancy is a great place to start. This can be family, friends, doctors, therapists, counselors, teachers, coaches, and more! For this activity, you are going to build your support system. This system can be as small or as big as you want. It is all up to you! Whatever makes you feel comfortable and supported.
          </p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <MaterialChecklist
            materials={materials}
            setButtonDisabled={setButtonDisabled}
            colorScheme={{
              borderColor: "F797FF",
              emptySlotColor: "FCD3FF",
              backgroundColor: "FEEDFF",
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

export default PregnancySupportSystemPage1;
