import Image from "next/image";
import Link from "next/link";
import styles from "../WalkingNatureJournal.module.css";

const WalkingActivityPage1: React.FC<{
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
          <h3 className={styles.heading}><b>Take a walk.</b></h3>
          <p className={styles.text}>
            Taking care of a child, especially an infant (0-1 year old), is not an easy task. The change in routines and constant running around can easily increase feelings of stress and other emotions that can hurt mental and physical health.
          </p>
          <p className={styles.text}>
            Postpartum depression is a major concern among new caregivers. Strong feelings of sadness, anxiety, and being tired that happen soon after delivery of the child. Those with postpartum depression have difficulty managing their emotions, have mood swings, lose interest in things they used to like, have trouble bonding with their child, and experience depressive emotions such as thoughts of suicide. Luckily for all caregivers, there are exercises you can follow to improve your mental health and learn the risks of postpartum depression.
          </p>
          <p className={styles.text}>
            A great exercise that caregivers can do to improve their mental health is journaling. For this activity, we are going to focus on creating a walking nature journal for the caregiver to use no matter where they may be located. We recommend that caregivers have a physical journal as this helps with engagement, but having an electronic version is okay too.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/walking.svg" alt="Walking Illustration" className={styles.illustration} />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.continueButton} onClick={onNext}>
          <img src="/images/continue.svg" alt="Continue" />
        </button>
      </div>
    </>
  );
};

export default WalkingActivityPage1;
