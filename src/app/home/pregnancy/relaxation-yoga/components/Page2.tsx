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
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>1</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Set Up</h1>
                  <p>
                    Find a quiet and comfortable place. Lay out your mat, towel, or blanket, and pillows on the floor. Play your choice of music. Sit with your legs crossed.
                  </p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>2</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Slow your breathing and mind</h1>
                  <p>
                    Close your eyes. Clear your mind. Take five deep breaths, holding your breath in and letting it out.
                  </p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>3</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Neck Rotation</h1>
                  <p>
                    With your eyes closed, put your chin to your chest and slowly rotate your head clockwise. Rotate your head three times clockwise, loosening the tension in your neck and shoulders. Rotate your head three times counterclockwise. Take deep breaths throughout.
                  </p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>4</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Cat-Cow Pose</h1>
                  <p>
                    Open your eyes and slowly move into a tabletop position with your hands and knees on the ground. Begin by slowly arching your back towards the sky, stretching your shoulder blades apart like a cat. Breathe in while in this position. Next, stretch your belly towards the floor and your chest to the sky like a cow. Breathe out in this position. Repeat this stretch five times, breathing in on cat and out on cow.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.activityColumn}>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>5</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Child’s Pose</h1>
                  <p>
                    Next, slowly move into Child’s Pose by sitting back on your feet and stretching your arms out in front of you. Hold this position. Take five deep breaths.
                  </p>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>6</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg font-bold">Savasana</h1>
                  <p>
                    Lastly, move into a comfortable laying position, using your pillows for support behind your head, back, or in between your legs. Close your eyes. Take five deep breaths.
                  </p>
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
