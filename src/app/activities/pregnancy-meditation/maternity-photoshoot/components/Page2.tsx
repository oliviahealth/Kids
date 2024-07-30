import Image from "next/image";
import Link from "next/link";
import styles from "../MaternityPhotoshoot.module.css";

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
                    You're first going to pick out and put on an outfit you feel
                    comfortable in. Outfits will differ for each person. Pick
                    something that represents you!
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>2</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                    Next, find a location to take your pictures. This can be
                    anywhere you'd like. Whether it's a blank wall in your
                    house, a peaceful place in nature, or a location meaningful
                    to you and your family.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>3</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                    Once you're in your photoshoot outfit at your shoot site,
                    prepare any props you brought. This may include hanging up a
                    backdrop/sheet, positioning a chair, or practicing poses
                    with sonagram pictures and more.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>4</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                    Next, set up your camera/phone OR direct your partner on how
                    to take each picture.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>5</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                    Practice your poses, angles, expressions. There are tons of
                    photagraphers who discuss maternity poses. Feel free to
                    research different ideas. Pinterest can be a great tool to
                    use. AbyJoanne Photagraphy provides a ton of useful tips:{" "}
                    <a
                      href="https://www.abyjoannephotography.co.uk/blog/my-diy-maternity-shoot"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#0000EE",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      AbyJoanne Photography Blog: DIY Maternity Shoot
                    </a>
                    . We have also included a photoshoot example sheet at the
                    bottom of this activity page.
                  </h1>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={`${styles.circle}`}>
                  <p className={styles.activityNumber}>6</p>
                </div>
                <div className={styles.activityTextWrapper}>
                  <h1 className="text-lg">
                  Lastly, have fun and be creative! There is no wrong way to do this. Get creative and try new ways to pose and represent your personality and your pregnancy.
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
