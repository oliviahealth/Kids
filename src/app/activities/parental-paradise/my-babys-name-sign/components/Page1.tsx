import Image from "next/image";
import Link from "next/link";
import styles from "../MyBabysNameSign.module.css";
import MaterialChecklist from "@/components/MaterialChecklist";
import { useState } from "react";

const RelaxationYogaPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const materials = [
    { imagePath: "/images/dashboard/pregnancy/board.svg", label: "Board" },
    {
      imagePath: "/images/dashboard/pregnancy/acrylic-paint.svg",
      label: "Acrylic Paint",
    },
    {
      imagePath: "/images/dashboard/pregnancy/paint-brush.svg",
      label: "Paint Brush",
    },
    {
      imagePath: "/images/dashboard/pregnancy/pencil.svg",
      label: "Pencil (Optional)",
    }
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
        <div className={styles.content}>
          <h3 className={styles.heading}>
            <b>Introduction</b>
          </h3>
          <p className={styles.text}>
          Take part in a peaceful painting activity while also preparing for your baby to arrive! Painting can be a great way to express your emotions, practice creativity, and learn new skills. In this activity, you will paint a name sign to hang in your baby&apos;s nursery! There are so many ways you can decorate a nursery. Why not make it a fun activity for you to practice creativity and bond with your baby at the same time?
          </p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <MaterialChecklist
            materials={materials}
            setButtonDisabled={setButtonDisabled}
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
          className={`bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center ${
            buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={onNext}
          disabled={buttonDisabled}
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
