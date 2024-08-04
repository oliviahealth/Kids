import Image from "next/image";
import Link from "next/link";
import styles from "../HomemadeGrowthChart.module.css";
import MaterialChecklist from "@/components/MaterialChecklist";
import { useState } from "react";

const RelaxationYogaPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const materials = [
    { imagePath: "/images/dashboard/pregnancy/plank.svg", label: "Plank" },
    { imagePath: "/images/dashboard/pregnancy/sandpaper.svg", label: "Sandpaper" },
    { imagePath: "/images/dashboard/pregnancy/paint.svg", label: "Paint" },
    { imagePath: "/images/dashboard/pregnancy/polyacrylic.svg", label: "Polyacrylic" },
    { imagePath: "/images/dashboard/pregnancy/paint-brush.svg", label: "Paint Brush" },
    { imagePath: "/images/dashboard/pregnancy/scissors.svg", label: "Scissors" },
    { imagePath: "/images/dashboard/pregnancy/vinyl-decal.svg", label: "Vinyl Decal" },
    { imagePath: "/images/dashboard/pregnancy/measuring-tape.svg", label: "Measuring Tape" }
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
        <div className={styles.content}>
          <h3 className={styles.heading}>
            <b>Introduction</b>
          </h3>
          <p className={styles.text}>
          Creative expression can be a great way to practice self-care throughout your life, especially during pregnancy. When you feel overwhelmed by the many changes pregnancy brings, finding a hobby or activity that brings you joy is important to you and your baby&apos;s health. Photography is just one way you can take part in a creative activity that will let your ideas and personality grow! In this activity, you will transform into both a photagrapher and a model to create your own maternity photoshoot! 
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
