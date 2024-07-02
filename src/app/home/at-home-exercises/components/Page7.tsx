import Image from "next/image";
import Link from "next/link";
import styles from "../ExerciseActivity.module.css";

const ExercuseActivityPage7: React.FC<{
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
          <h3 className={styles.heading}><b>Key Takeaways</b></h3>
          <p className={styles.text}>
          These four exercises have been proven to significantly help caregivers of infants, especially those who have recently given birth, have better physical health and therefore improve their mental health. Other than the exercises that are listed above there a few other simple exercises that are much easier to complete. These activities include walking around the house, doing body weight squats, and lunges across the house. You can even include your infant in these exercises such as standing and holding your infant and raising them up and down to help with upper body strength, squats with the infant, and even bench press your infant.
          </p>
          <p className={styles.text}>
          There are many different exercises that any caregiver can do at home either with their baby or just by themselves, but by taking part in any of these exercises you have a great opportunity to improve your physical and mental health. Please make sure to check with your doctor before beginning any exercises, and make sure that you can safely begin these exercises that will greatly help you out in the long run.
          </p>
        </div>
        <div className={styles.imageWrapper}>
            <img src="/images/at-home-exercises-bg.svg" alt="Circles Illustration" className={styles.illustration} />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onBack}>Back</button>
      </div>
    </>
  );
}

export default ExercuseActivityPage7;
