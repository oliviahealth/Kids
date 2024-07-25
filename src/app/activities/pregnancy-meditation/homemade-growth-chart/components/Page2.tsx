import Image from "next/image";
import Link from "next/link";
import styles from "../HomemadeGrowthChart.module.css";

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
                    Take your plank of wood and sand it down if necessary to
                    smooth out any rough patches.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>2</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                    Next, you can either paint the wood a color of your choosing
                    or stain it depending on your preference. To help preserve
                    it, apply a layer or two of polycrylic protective finish
                    after the paint has dried.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>3</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                    If you decide you want to hang it, measure the height from
                    the floor to the base of the plank to determine proper
                    placement of the vinyl decals. For example, if you want to
                    place it 6 inches above the ground, you will lay the decals
                    so that the 1-foot sticker will be placed 6 inches from the
                    bottom of the plank.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>4</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">Use a measuring tape to line up the decals how you would like them. You may need to use scissors to cut off the top and bottom of the vinyl so that it fits the wood.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>5</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                  Simply remove the backing and stick the vinyl decals onto the wood!
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
