import Image from "next/image";
import Link from "next/link";
import styles from "../MyBabysNameSign.module.css";

const RelaxationYogaPage2: React.FC<{
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
            <h1 className={styles.title}>My Baby&apos;s Name Sign</h1>
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
        <div className={styles.contentFullWidth}>
          <h3 className={`${styles.heading} ${styles.activityHeading}`}>
            <b>Activity</b>
          </h3>
          <div className={styles.activityList}>
            <div className={styles.activityColumn}>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>1</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                    First choose a platform to paint on. This can be any
                    platform of your choice such as the wall of your nursery,
                    any size canvas, any fabric, and more.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>2</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                  Find the paint and colors of your choice. Choose colors that best fit you and your baby&apos;s personalities! 
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>3</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                  Find inspiration on Pinterest and and other creative sites.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>4</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                  Paint Away! You may want to use a pencil to outline the letters and design of your baby&apos;s name before painting. 
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>5</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                  Let your paint dry.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>6</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                  If applicable, hang your painting anywhere in your baby&apos;s nursery. Make sure the painting is secure for safety. 
                  </h1>
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
        <button
          className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center`}
          onClick={onNext}
        >
          Continue
          <Image
            src="/images/dashboard/adventure-bay/next_arrow.png"
            alt="arrow"
            width={30}
            height={30}
          />
        </button>
      </div>
    </>
  );
};

export default RelaxationYogaPage2;
