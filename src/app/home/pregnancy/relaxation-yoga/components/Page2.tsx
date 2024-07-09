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
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>1</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Add something here</h1>
                  <p>Add something here.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>2</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Add something here</h1>
                  <p>Add something here.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>3</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Add something here</h1>
                  <p>Add something here.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>4</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Add something here</h1>
                  <p>Add something here.</p>
                </div>
              </div>
            </div>
            <div className={styles.activityColumn}>
              <div className={styles.activityItem}>
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>5</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Add something here</h1>
                  <p>Add something here.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>6</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Add something here</h1>
                  <p>Add something here.</p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <p>7</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Add something here</h1>
                  <p>Add something here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.Button} onClick={onBack}>
          <img src="/images/backbuttonnew.svg" alt="Back" />
        </button>
        <button className={styles.continueButton} onClick={onNext}>
          <img src="/images/continue.svg" alt="Continue" />
        </button>
      </div>
    </>
  );
};

export default RelaxationYogaPage2;
