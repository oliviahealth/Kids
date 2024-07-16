import Image from "next/image";
import Link from "next/link";
import styles from "../MaternityPhotoshoot.module.css";

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
            <h1 className={styles.title}>Maternity Photoshoot</h1>
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
              Creativity is important for all of us from childhood growth and
              development to self-care as adults. As you grow with your baby
              through pregnancy and life, finding a creative outlet for bonding
              and relieving stress can be a helpful tool. The Maternity
              Photoshoot is a great place to start! <br></br><br></br> Once you complete this
              activity, you will recieve an activity completion sticker for the
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
