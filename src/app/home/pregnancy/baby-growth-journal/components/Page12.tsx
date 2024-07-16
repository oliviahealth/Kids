import Image from "next/image";
import Link from "next/link";
import styles from "../BabyGrowthJournal.module.css";

const BabyGrowthJournalPage12: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
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
        <div
          className={`${styles.content} d-flex flex-column justify-content-between`}
        >
          <div>
            <h3 className={styles.heading}>
              <b>Key Takeaways</b>
            </h3>
            <p className={styles.text}>
              This activity will be continuous throughout your pregnancy, allowing you to relieve stress, work through your thoughts, and track your baby's growth! Once you have completed 5 weeks of entries, you will recieve your activity completion sticker. You can continue this journal once your child is born to keep track of their milestones and growth!
            </p>
          </div>
          <div className={`pt-3 align-self-center`}>
            <Image
              height={250}
              width={250}
              priority
              src="/images/pregnancy_add_a_photo.svg"
              alt="Exit button"
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.Button} onClick={onBack}>
          <img src="/images/backbuttonnew.svg" alt="Continue" />
        </button>
      </div>
    </>
  );
};

export default BabyGrowthJournalPage12;
