import Image from "next/image";
import Link from "next/link";
import styles from "../RelaxationYoga.module.css";
import MaterialChecklist from "@/components/MaterialChecklist";

const RelaxationYogaPage1: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const materials = [
    { imagePath: "/images/farmer_dude.svg", label: "OliviaKids Affirmation List" },
    { imagePath: "/images/farmer_dude.svg", label: "Pencil" },
    { imagePath: "/images/farmer_dude.svg", label: "Paper" }
  ];
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img src="/images/flower.svg" alt="Flower Icon" className={styles.icon} />
          <div>
            <h1 className={styles.title}>Relaxation Yoga</h1>
            <h2 className={styles.subtitle}>Caregiver Wellness - Blossom Haven</h2>
          </div>
        </div>
        <Link href="/home">
          <button className={styles.exitButton}>
            <img src="/images/exit.svg" alt="Exit" className={styles.exitIcon} />
          </button>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h3 className={styles.heading}><b>Introduction</b></h3>
          <p className={styles.text}>
            With the many life changes and busy schedule that comes with planning your baby’s arrival, pregnancy can be an overwhelming time in your life. This is completely normal, but it's important you are working to manage this stress, so it does not affect you and your baby’s health. Different relaxation methods can be very useful tools to cope with stress during pregnancy. One of these methods is yoga. Yoga can be a great way to boost your mental and physical health. It can be used to take a needed break from your busy schedule. Preparing for your baby is important but staying happy and healthy is too! As a bonus, yoga builds skills in strength, flexibility, and mindful breathing to better prepare you for giving birth!  Now that we know a little bit about the benefits of yoga during pregnancy, let's get started!
          </p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <MaterialChecklist 
            materials={materials} 
            onComplete={() => {
              console.log("All materials checked!");
            }}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.learnButton}>
          <img src="/images/learnmorebutton.svg" alt="Learn more" />
          </button>
          <button className={styles.continueButton} onClick={onNext}>
            <img src="/images/continue.svg" alt="Continue" />
            </button>
        </div>
    </>
  );
};

export default RelaxationYogaPage1;
