import Image from "next/image";
import Link from "next/link";
import styles from "../MyBabysNameSign.module.css";

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
            <h1 className={styles.title}>My Baby's Name Sign</h1>
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
              As your baby grows, Creative Art will be an important skill for
              him/her to learn. As their caregiver, they'll need you to teach
              them these skills along the way. This activity allows you to
              practice self-care, decorate your nursery, and get a head start on
              your many years of crafting to come! <br></br><br></br> Once you complete this
              activity, you will receive an activity completion sticker for the
              Creative Arts Learning Domain.
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
