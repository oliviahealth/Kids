import Image from "next/image";
import Link from "next/link";
import styles from "../RelaxationYoga.module.css";

const RelaxationYogaPage3: React.FC<{
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
        <div className={styles.contentFullWidth}>
          <h3 className={`${styles.heading} ${styles.activityHeading}`}><b>Activity</b></h3>
          <div className={styles.activityList}>
            <div className={styles.activityColumn}>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>1.</div>
                <p className={styles.activityText}>Find a safe, local walking path in your community.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>2.</div>
                <p className={styles.activityText}>If there are no walking paths in your living community, search for other options like nature trails, shopping malls, parks, and/or school running tracks where you have the option to be outside and walk around away from the stress at home.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>3.</div>
                <p className={styles.activityText}>This is your decision but you can go by yourself, take your child along to observe, or even other household caregivers.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>4.</div>
                <p className={styles.activityText}>While you're walking along the path, take notes (in your journal while walking or wait until you're home) of your surroundings such as trees, plants, flowers, bugs, birds, animals, people, and anything else that brings you comfort and happiness.</p>
              </div>
            </div>
            <div className={styles.activityColumn}>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>5.</div>
                <p className={styles.activityText}>Schedule these walks when you have the time to yourself or away from the stress at home.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>6.</div>
                <p className={styles.activityText}>Once you open your journal, begin writing down the different things you saw/took note of. Draw some sketches or explain how each thing you saw made you feel.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>7.</div>
                <p className={styles.activityText}>Update your journal each time you go on a walk or see something new that brings you good emotions.</p>
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

export default RelaxationYogaPage3;
