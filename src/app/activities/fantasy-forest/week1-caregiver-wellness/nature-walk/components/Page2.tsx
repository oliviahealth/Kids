"use client";

import React from 'react';
import Activity from '@/components/Template/ActivitySteps';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';
import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

const activitySteps = [
    {
        stepNumber: 1,
        title: 'Step outside',
        description: 'Get outdoors and relax your mind',
    },
    {
        stepNumber: 2,
        title: 'Notice everything',
        description: 'When you start walking, look and listen for new things. If you’re in a new place, most things will be new to you.',
    },
    {
        stepNumber: 3,
        title: 'Avoid tunnel vision',
        description: "Look around at things that aren't right in front of you.",
    },
    {
        stepNumber: 4,
        title: 'Pass it down',
        description: 'If you bring your child, teach them about what you see. You can play "I Spy" or let them show you things they find interesting.',
    },
];

export default function NatureWalk({
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
        title="Nature Walk"
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
