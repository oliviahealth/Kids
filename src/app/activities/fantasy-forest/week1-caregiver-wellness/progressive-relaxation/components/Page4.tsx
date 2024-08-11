"use client";

import React from 'react';
import { PageContainer, AddPhotoButton } from '@/components/activity/white-page';
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";
import cameraIcon from "/public/images/activities/fantasy-forest/camera.svg";
import photo from "/public/images/activities/fantasy-forest/addAPhoto.svg";


export default function ProgressiveRelaxation({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  const takeawayText = `
    Progressive relaxation is a great way to center the mind when life feels too overwhelming. After completing this activity you should feel relaxed and focused. If you complete this practice 4 days out of 7 days in one week you can receive the sticker for this activity! Take a deep breath and take your next step, but don't forget to take a break to relax your mind throughout the week.
  `;

  return (
    <>
      <Header
        logoSrc={headerIcon}
        title="Progressive Relaxation"
        subtitle="Caregiver Wellness - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <KeyTakeaways text={takeawayText} photoSrc={photo} photoAlt="Photo" />

      <Footer
        onBack={onBack}
        onNext={onContinue}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
        rightHasLink={true}
        rightLinkHref="/home"
      />
    </>
  );
}
