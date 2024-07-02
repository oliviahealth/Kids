import Image from "next/image";
import Link from "next/link";
import styles from "../ExerciseActivity.module.css";

const ExerciseActivityPage2: React.FC<{
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
          <h3 className={styles.heading}><b>Multifaceted Benefits</b></h3>
          <div className={styles.journalingSection}>
            <h4 className={styles.journalingHeading}>
              Caregivers who have recently given birth can greatly benefit from exercise as it has decreased the risk of postpartum depression, increased abdominal muscle strength, and helps to keep a healthy body weight after pregnancy 
              (<a href="https://www.acog.org/womens-health/faqs/exercise-after-pregnancy" target="_blank" rel="noopener noreferrer">ACOG</a>).
              The exercises that this activity includes are designed for caregivers of infants to do at home, giving the same benefits as someone going to a gym.
            </h4>
            <div className={styles.spacing}></div>
            <h4 className={styles.journalingHeading}><b>What will you need?</b></h4>
            <div className={styles.iconsWrapper}>
              <div className={styles.iconItem}>
                <img src="/images/yogamat.svg" alt="Yoga Mat" />
                <div className={styles.iconText}>Yoga Mat</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/timer.svg" alt="Timer" />
                <div className={styles.iconText}>Timer</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/water.svg" alt="Water" />
                <div className={styles.iconText}>Water</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/gymclothes.svg" alt="Gym Clothes" />
                <div className={styles.iconText}>Gym Clothes</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/at-home-exercises-bg.svg" alt="Circles Illustration" className={styles.illustration} />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onBack}>Back</button>
        <button className={styles.continueButton} onClick={onNext}>
          <img src="/images/continue.svg" alt="Continue" />
        </button>
      </div>
    </>
  );
};

export default ExerciseActivityPage2;
