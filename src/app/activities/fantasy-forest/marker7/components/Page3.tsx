"use client";
import React from "react";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import Activity, { ActivityStep } from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page3({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps: ActivityStep[] = [
    {
      stepNumber: 9,
      description: `"Lastly, let's color in the next line - my favorite drink color.  What is your favorite drink?" 
(Help your child chose whatever color they want.)   
"Let's color the section of the rainbow for our favorite drink color."`,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="My Rainbow"
        subtitle="Creative Arts - Fantasy Forest"
        homeLink="/home"
        subtitleColor="#35A663"
      />

      <Activity steps={activitySteps} stepNumberColor="#A7F2C5" />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
      />
    </>
  );
}
