import Image from "next/image";
import Link from "next/link";
import styles from "../WalkingNatureJournal.module.css";

const WalkingActivityPage7: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img src="/images/flower.svg" alt="Flower Icon" className={styles.icon} />
          <div>
            <h1 className={styles.title}>Walking Nature Journal</h1>
            <h2 className={styles.subtitle}>Caregiver Wellness - Blossom Haven</h2>
          </div>
        </div>
        <Link href="/home">
          <button className={styles.exitButton}>
            <img src="/images/exit.svg" alt="Exit" className={styles.exitIcon} />
          </button>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h3 className={styles.heading}><b>Key Takeaways</b></h3>
          <p className={styles.text}>
            Caregivers who continually journal and set time aside for this activity can reduce stress, better control their emotions, reduce their risk of postpartum depression, boost self-awareness, and improve their mental health and physical health.
          </p>
          <p className={styles.text}>
            This journal will always be available to you. Anytime you start to feel anxious, stressed, or overwhelmed, you'll know what steps to take.
          </p>
          <p className={styles.text}>
            While this journal is mainly used for your nature observations, this journal could also be used for keeping notes of your baby's growth!
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/relaxed.svg" alt="Relaxed Illustration" className={styles.illustrationSmall} />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onBack}>Back</button>
      </div>
    </>
  );
}

export default WalkingActivityPage7;
