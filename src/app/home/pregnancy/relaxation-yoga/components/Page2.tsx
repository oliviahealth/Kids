import Image from "next/image";
import Link from "next/link";
import styles from "../RelaxationYoga.module.css";

const RelaxationYogaPage2: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img src="/images/flower.svg" alt="Flower Icon" className={styles.icon} />
          <div>
            <h1 className={styles.title}>Relaxation Yoga</h1>
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
                {/* TODO: Fill these points (I couldn't find the info for them and maybe add the circles (I was having issues. Sorry) */}
                <div className={styles.activityNumber}>1.</div>
                <p className={styles.activityText}>Add something here.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>2.</div>
                <p className={styles.activityText}>Add something here.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>3.</div>
                <p className={styles.activityText}>Add something here.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>4.</div>
                <p className={styles.activityText}>Add something here.</p>
              </div>
            </div>
            <div className={styles.activityColumn}>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>5.</div>
                <p className={styles.activityText}>Add something here.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>6.</div>
                <p className={styles.activityText}>Add something here.</p>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityNumber}>7.</div>
                <p className={styles.activityText}>Add something here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
      <button className={styles.Button} onClick={onBack}>
          <img src="/images/backbuttonnew.svg" alt="Continue" />
        </button>
        <button className={styles.continueButton} onClick={onNext}>
          <img src="/images/continue.svg" alt="Continue" />
        </button>
      </div>
    </>
  );
};

export default RelaxationYogaPage2;
