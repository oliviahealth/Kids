import React from 'react';
import Head from 'next/head';
import styles from './WalkingNatureJournal.module.css';

const WalkingNatureJournal = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Candal&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.leftSide}>
            <div className={styles.header}>
              <img src="/images/flower.svg" alt="Flower Icon" className={styles.icon} />
              <div>
                <h1 className={styles.title}>Walking Nature Journal</h1>
                <h2 className={styles.subtitle}>Caregiver Wellness - Blossom Haven</h2>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.heading}><b>Take a walk.</b></h3>
              <p className={styles.text}>
                Taking care of a child, especially an infant (0-1 year old), is not an easy task. The change in routines and constant running around can easily increase feelings of stress and other emotions that can hurt mental and physical health.
              </p>
              <p className={styles.text}>
                Postpartum depression is a major concern among new caregivers. Strong feelings of sadness, anxiety, and being tired that happen soon after delivery of the child. Those with postpartum depression have difficulty managing their emotions, have mood swings, lose interest in things they used to like, have trouble bonding with their child, and experience depressive emotions such as thoughts of suicide. Luckily for all caregivers, there are exercises you can follow to improve your mental health and learn the risks of postpartum depression.
              </p>
              <p className={styles.text}>
                A great exercise that caregivers can do to improve their mental health is journaling. For this activity, we are going to focus on creating a walking nature journal for the caregiver to use no matter where they may be located. We recommend that caregivers have a physical journal as this helps with engagement, but having an electronic version is okay too.
              </p>
              <button className={styles.button}>Learn more</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WalkingNatureJournal;