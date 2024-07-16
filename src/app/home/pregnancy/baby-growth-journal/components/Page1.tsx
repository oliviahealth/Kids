import Image from "next/image";
import Link from "next/link";
import styles from "../BabyGrowthJournal.module.css";
import MaterialChecklist from "@/components/MaterialChecklist";
import { useState } from "react";

const BabyGrowthJournalPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const materials = [
    { imagePath: "/images/dashboard/pregnancy/journal.svg", label: "Journal/Notebook" },
    { imagePath: "/images/dashboard/pregnancy/pencil.svg", label: "Writing Utensil" },
    { imagePath: "/images/dashboard/pregnancy/coloring-utensil.svg", label: "Coloring Untensils" }
  ];
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img
            src="/images/flower.svg"
            alt="Flower Icon"
            className={styles.icon}
          />
          <div>
            <h1 className={styles.title}>Baby Growth Journal</h1>
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
            As you continue throughout your pregnancy journey, your baby will grow and develop more and more each day. Keeping track of these milestones can be a great way to stay informed, enhance your baby’s growth, and use your creativity as an outlet for unwanted stress. In this activity, you will create a journal to track your baby’s growth and your thoughts and feelings along the way. Let your creativity flow, and personalize your journal how you want!
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

export default BabyGrowthJournalPage1;
