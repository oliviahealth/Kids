import Image from "next/image";
import Link from "next/link";
import styles from "../MemoryBox.module.css";
import MaterialChecklist from "@/components/MaterialChecklist";

const RelaxationYogaPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {

  const materials = [
    { imagePath: "/images/dashboard/pregnancy/box.svg", label: "Box" },
    { imagePath: "/images/dashboard/pregnancy/decorative-supplies.svg", label: "Decorative Supplies" },
    { imagePath: "/images/dashboard/pregnancy/box-items.svg", label: "Mementos to store in the Box" }
  ];
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
            <h1 className={styles.title}>Memory Box</h1>
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
        <div className={styles.content}>
          <h3 className={styles.heading}>
            <b>Introduction</b>
          </h3>
          <p className={styles.text}>
          Pregnancy can be such a special, transformative time filled with lots of excitement, celebration, and sentiment. Creating a memory box to help capture those treasured memories and momentos is a relaxing project that can help alleviate stress, allow for reflection, and foster excitement while awaiting the arrival of your precious little one! It is also a great way to collect keepsakes that you can one day show your child, allowing them insight into the journey you embarked upon before they were even born! 
          </p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <MaterialChecklist
            materials={materials}
            colorScheme={{
              borderColor: "F797FF", // the border of the items in the material neeeded section
              emptySlotColor: "FCD3FF", // the background color of the empty slots in the material needed section
              backgroundColor: "FEEDFF", // the background color of the material needed section
            }}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.learnButton}>
          <img src="/images/learnmorebutton.svg" alt="Learn more" />
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

export default RelaxationYogaPage1;
