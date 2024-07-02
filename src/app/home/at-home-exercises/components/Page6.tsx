import Image from "next/image";
import Link from "next/link";
import styles from "../ExerciseActivity.module.css";

const ExercuseActivityPage6: React.FC<{
    onNext: () => void;
    onBack: () => void;
  }> = ({ onNext, onBack }) => {
    return (
        <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onBack}>Back</button>
        <button className={`${styles.continueButton} ${styles.continueToActivityButton}`} onClick={onNext}>
          <img src="/images/continueToActivity.svg" alt="Continue to Activity" />
        </button>
      </div>
    );
};

export default ExercuseActivityPage6;
