import Image from "next/image";
import Link from "next/link";
import styles from "../WalkingNatureJournal.module.css";  // Import the CSS

const WalkingActivityPage2: React.FC<{
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
          <h3 className={styles.heading}><b>What will you need?</b></h3>
          <div className={styles.journalingSection}>
            <h4 className={styles.journalingHeading}>For physical journaling</h4>
            <div className={styles.iconsWrapper}>
              <div className={styles.iconItem}>
                <img src="/images/journal.svg" alt="Journal" />
                <div className={styles.iconText}>Journal</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/pen.svg" alt="Pen" />
                <div className={styles.iconText}>Pen</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/marker.svg" alt="Marker" />
                <div className={styles.iconText}>Marker</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/sticker.svg" alt="Stickers" />
                <div className={styles.iconText}>Stickers</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/post-it.svg" alt="Post-Its" />
                <div className={styles.iconText}>Post-Its</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/camera.svg" alt="Phone Camera" />
                <div className={styles.iconText}>Phone Camera</div>
              </div>
            </div>
            <h4 className={styles.journalingHeading}>For digital journaling</h4>
            <div className={styles.iconsWrapper}>
              <div className={styles.iconItem}>
                <img src="/images/phone.svg" alt="Phone" />
                <div className={styles.iconText}>Phone</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/camera.svg" alt="Phone Camera" />
                <div className={styles.iconText}>Phone Camera</div>
              </div>
              <div className={styles.iconItem}>
                <img src="/images/notes.svg" alt="Notes App" />
                <div className={styles.iconText}>Notes App</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/hand.svg" alt="Hand Illustration" className={styles.illustration} />
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

export default WalkingActivityPage2;
