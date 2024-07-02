import Image from "next/image";
import Link from "next/link";
import styles from "../ExerciseActivity.module.css";

const ExerciseActivityPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img src="/images/flower.svg" alt="Flower Icon" className={styles.icon} />
          <div>
            <h1 className={styles.title}>At-Home Exercises</h1>
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
          <h3 className={styles.heading}><b>Mindful Movement</b></h3>
          <p className={styles.text}>
            Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.
          </p>
          <p className={styles.text}>
            First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases. For more information, visit <a href="https://www.acog.org/womens-health/faqs/exercise-after-pregnancy" target="_blank" rel="noopener noreferrer">ACOG</a>.
          </p>
          <p className={styles.text}>
            Please note, for postpartum caregivers, talk to your doctor to make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise. For more information, visit <a href="https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/exercise-after-pregnancy/art-20044596" target="_blank" rel="noopener noreferrer">Mayo Clinic</a>.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/saly-at-home-exercises.svg" alt="Saly Exercise Illustration" className={styles.illustration} />
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

export default ExerciseActivityPage1;
