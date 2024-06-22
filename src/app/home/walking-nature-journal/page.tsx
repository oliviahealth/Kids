"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import styles from './WalkingNatureJournal.module.css';

const WalkingNatureJournal = () => {
  const router = useRouter();

  const handleExit = () => {
    router.push('/home');
  };

  const [currentStep, setCurrentStep] = useState(0);

  const goForward = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      header: (
        <>
          <div className={styles.headerWrapper}>
            <div className={styles.header}>
              <img src="/images/flower.svg" alt="Flower Icon" className={styles.icon} />
              <div>
                <h1 className={styles.title}>Walking Nature Journal</h1>
                <h2 className={styles.subtitle}>Caregiver Wellness - Blossom Haven</h2>
              </div>
            </div>
            <button className={styles.exitButton} onClick={handleExit}>
              <img src="/images/exit.svg" alt="Exit" className={styles.exitIcon} />
            </button>
          </div>
        </>
      ),
      content: (
        <>
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
          </div>
          <div className={styles.imageWrapper}>
            <img src="/images/walking.svg" alt="Walking Illustration" className={styles.illustration} />
          </div>
        </>
      ),
      buttons: (
        <>
          <button className={styles.button}>Learn more</button>
          <button className={styles.continueButton} onClick={goForward}>
            <img src="/images/continue.svg" alt="Continue" />
          </button>
        </>
      ),
    },
    {
      header: (
        <>
          <div className={styles.headerWrapper}>
            <div className={styles.header}>
              <img src="/images/flower.svg" alt="Flower Icon" className={styles.icon} />
              <div>
                <h1 className={styles.title}>Walking Nature Journal</h1>
                <h2 className={styles.subtitle}>Caregiver Wellness - Blossom Haven</h2>
              </div>
            </div>
            <button className={styles.exitButton} onClick={handleExit}>
              <img src="/images/exit.svg" alt="Exit" className={styles.exitIcon} />
            </button>
          </div>
        </>
      ),
      content: null,
      buttons: (
        <>
          <button className={styles.button} onClick={goBack}>Back</button>
          <button className={styles.continueButton} onClick={goForward}>
            <img src="/images/continue.svg" alt="Continue" />
          </button>
        </>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Candal&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          {steps[currentStep].header}
          {steps[currentStep].content && (
            <div className={styles.contentWrapper}>
              {steps[currentStep].content}
            </div>
          )}
          <div className={styles.buttonWrapper}>
            {steps[currentStep].buttons}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WalkingNatureJournal;
