"use client";

import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import styles from "./WalkingNatureJournal.module.css";
import WalkingNatureJournalWrapUp from "../components/_page";

const WalkingNatureJournal = () => {
  const router = useRouter();

  const handleExit = () => {
    router.push("/home");
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
              <img
                src="/images/flower.svg"
                alt="Flower Icon"
                className={styles.icon}
              />
              <div>
                <h1 className={styles.title}>Walking Nature Journal</h1>
                <h2 className={styles.subtitle}>
                  Caregiver Wellness - Blossom Haven
                </h2>
              </div>
            </div>
            <button className={styles.exitButton} onClick={handleExit}>
              <img
                src="/images/exit.svg"
                alt="Exit"
                className={styles.exitIcon}
              />
            </button>
          </div>
        </>
      ),
      content: (
        <>
          <div className={styles.content}>
            <h3 className={styles.heading}>
              <b>Take a walk.</b>
            </h3>
            <p className={styles.text}>
              Taking care of a child, especially an infant (0-1 year old), is
              not an easy task. The change in routines and constant running
              around can easily increase feelings of stress and other emotions
              that can hurt mental and physical health.
            </p>
            <p className={styles.text}>
              Postpartum depression is a major concern among new caregivers.
              Strong feelings of sadness, anxiety, and being tired that happen
              soon after delivery of the child. Those with postpartum depression
              have difficulty managing their emotions, have mood swings, lose
              interest in things they used to like, have trouble bonding with
              their child, and experience depressive emotions such as thoughts
              of suicide. Luckily for all caregivers, there are exercises you
              can follow to improve your mental health and learn the risks of
              postpartum depression.
            </p>
            <p className={styles.text}>
              A great exercise that caregivers can do to improve their mental
              health is journaling. For this activity, we are going to focus on
              creating a walking nature journal for the caregiver to use no
              matter where they may be located. We recommend that caregivers
              have a physical journal as this helps with engagement, but having
              an electronic version is okay too.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/walking.svg"
              alt="Walking Illustration"
              className={styles.illustration}
            />
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
              <img
                src="/images/flower.svg"
                alt="Flower Icon"
                className={styles.icon}
              />
              <div>
                <h1 className={styles.title}>Walking Nature Journal</h1>
                <h2 className={styles.subtitle}>
                  Caregiver Wellness - Blossom Haven
                </h2>
              </div>
            </div>
            <button className={styles.exitButton} onClick={handleExit}>
              <img
                src="/images/exit.svg"
                alt="Exit"
                className={styles.exitIcon}
              />
            </button>
          </div>
        </>
      ),
      content: (
        <>
          <div className={styles.content}>
            <h3 className={styles.heading}>
              <b>What will you need?</b>
            </h3>
            <div className={styles.journalingSection}>
              <h4 className={styles.journalingHeading}>
                For physical journaling
              </h4>
              <div className={styles.iconsWrapper}>
                <div className={styles.iconItem}>
                  <img src="/images/journal.svg" alt="Journal" />
                  <div className={styles.iconText}>Journal</div>
                </div>
                <div className={styles.iconItem}>
                  <img src="/images/pen.svg" alt="Pen" />
                  <div className={styles.iconText}>Pen</div>
                </div>
                <div className={styles.iconItem}>
                  <img src="/images/marker.svg" alt="Marker" />
                  <div className={styles.iconText}>Marker</div>
                </div>
                <div className={styles.iconItem}>
                  <img src="/images/sticker.svg" alt="Stickers" />
                  <div className={styles.iconText}>Stickers</div>
                </div>
                <div className={styles.iconItem}>
                  <img src="/images/post-it.svg" alt="Post-Its" />
                  <div className={styles.iconText}>Post-Its</div>
                </div>
                <div className={styles.iconItem}>
                  <img src="/images/camera.svg" alt="Phone Camera" />
                  <div className={styles.iconText}>Phone Camera</div>
                </div>
              </div>
              <h4 className={styles.journalingHeading}>
                For digital journaling
              </h4>
              <div className={styles.iconsWrapper}>
                <div className={styles.iconItem}>
                  <img src="/images/phone.svg" alt="Phone" />
                  <div className={styles.iconText}>Phone</div>
                </div>
                <div className={styles.iconItem}>
                  <img src="/images/camera.svg" alt="Phone Camera" />
                  <div className={styles.iconText}>Phone Camera</div>
                </div>
                <div className={styles.iconItem}>
                  <img src="/images/notes.svg" alt="Notes App" />
                  <div className={styles.iconText}>Notes App</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/hand.svg"
              alt="Hand Illustration"
              className={styles.illustration}
            />
          </div>
        </>
      ),
      buttons: (
        <>
          <button className={styles.button} onClick={goBack}>
            Back
          </button>
          <button className={styles.continueButton} onClick={goForward}>
            <img src="/images/continue.svg" alt="Continue" />
          </button>
        </>
      ),
    },
  ];

  return (
    currentStep === 3 ? (
      <WalkingNatureJournalWrapUp
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    ) : (
      <div className={styles.container}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Candal&family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main className={styles.main}>
          <div className={styles.card}>
            {steps[currentStep === 4 ? currentStep - 1 : currentStep].header}
            {steps[currentStep === 4 ? currentStep - 1 : currentStep].content && (
              <div className={styles.contentWrapper}>
                {steps[currentStep === 4 ? currentStep - 1 : currentStep].content}
              </div>
            )}
            <div className={styles.buttonWrapper}>
              {steps[currentStep === 4 ? currentStep - 1 : currentStep].buttons}
            </div>
          </div>
        </main>
      </div>
    )
  );
  
};

export default WalkingNatureJournal;
