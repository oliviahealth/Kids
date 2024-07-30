import Image from "next/image";
import Link from "next/link";
import styles from "../HomemadeGrowthChart.module.css";

const RelaxationYogaPage9: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img
            src="/images/dashboard/pregnancy/prenatal-icon.svg"
            alt="Flower Icon"
            className={styles.icon}
          />
          <div>
            <h1 className={styles.title}>Homemade Growth Chart</h1>
            <h2 className={styles.subtitle}>
              Creative Arts - Prenatal Paradise
            </h2>
          </div>
        </div>
        <Link href="/home">
          <button className={styles.exitButton}>
            <img
              src="/images/exit.svg"
              alt="Exit"
              className={styles.exitIcon}
            />
          </button>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        <div
          className={`${styles.content} d-flex flex-column justify-content-between`}
        >
          <div>
            <h3 className={styles.heading}>
              <b>Key Takeaways</b>
            </h3>
            <p className={styles.text}>
              Now you have a cute, customizable, homemade growth chart to
              celebrate each stage of your child's growth that you can cherish
              forever! Participating in creative activities when pregnant is
              very beneficial, reducing stress, boosting emotional wellbeing,
              promoting cognitive function, and providing a sense of
              accomplisment. It is also an opportunity for you to bond with both
              the baby and any other family members that may take part in the
              project!
            </p>
          </div>
          <div className={`pt-3 align-self-center`}>
            <Image
              height={250}
              width={250}
              priority
              src="/images/pregnancy_add_a_photo.svg"
              alt="Exit button"
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.Button} onClick={onBack}>
          <img src="/images/backbuttonnew.svg" alt="Continue" />
        </button>
      </div>
    </>
  );
};

export default RelaxationYogaPage9;
