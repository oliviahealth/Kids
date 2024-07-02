import Image from "next/image";
import Link from "next/link";
import styles from "../ExerciseActivity.module.css";

const ExerciseActivityPage3: React.FC<{
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
        <div className={styles.contentFullWidth}>
          <h3 className={`${styles.heading} ${styles.activityHeading}`}><b>Activity</b></h3>
          <div className={styles.activityList}>
            <div className={styles.activityColumn}>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>1.</div>
                <div>
                  <p className={styles.activityHeading}><b>Diaphragmatic breathing- An Easy, Warm Up Breathing Exercise</b></p>
                  <p className={styles.activityText}>This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>2.</div>
                <div>
                  <p className={styles.activityHeading}><b>Pelvic Tilt Kegel Exercise</b></p>
                  <p className={styles.activityText}>Strengthen your lower back and abdominal muscles.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>3.</div>
                <div>
                  <p className={styles.activityHeading}><b>Cat-Cow Yoga Exercise</b></p>
                  <p className={styles.activityText}>Increase the flexibility of your shoulders, neck, and spine.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>4.</div>
                <div>
                  <p className={styles.activityHeading}><b>Postpartum Plank Exercise</b></p>
                  <p className={styles.activityText}>An isometric exercise that can help strengthen your core.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onBack}>Back</button>
        <button className={`${styles.continueButton} ${styles.continueToActivityButton}`} onClick={onNext}>
          <img src="/images/continueToActivity.svg" alt="Continue to Activity" />
        </button>
      </div>
    </>
  );
};

export default ExerciseActivityPage3;
