"use client";

import React from 'react';
import Activity from '@/components/Template/ActivitySteps';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';
import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

const activitySteps = [
    {
        stepNumber: 1,
        title: 'Get into position',
        description: 'Find a quiet place, lie down, and close your eyes. Keep your eyes closed until the end.',
    },
    {
        stepNumber: 2,
        title: 'Start with your feet',
        description: "Squeeze the muscles in your feet and lower legs, then slowly relax them.",
    },
    {
        stepNumber: 3,
        title: 'Legs and hips',
        description: "Move to your upper legs and hips. Squeeze those muscles, then relax them.",
    },
    {
        stepNumber: 4,
        title: 'Make fists',
        description: "Next, squeeze your hands into fists, then relax them.",
    },
    {
        stepNumber: 5,
        title: 'Abdominal muscles',
        description: "Squeeze your abdominal muscles, then relax.",
    },
];

export default function ProgressiveRelaxation({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <>
      <Header
        logoSrc={headerIcon}
        title="Progressive Relaxation"
        subtitle="Caregiver Wellness - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <Activity
        steps={activitySteps}
        stepNumberColor="#B5F6D0"
      />
      
      <Footer
        onBack={onBack}
        onNext={onContinue}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
      />
    </>
  );
}
