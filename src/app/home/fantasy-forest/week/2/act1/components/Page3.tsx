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
      description:
        " After the rocks are dry, head back out into the yard or on a walk around the neighborgood to distribute the rocks. ",
    },
    {
      stepNumber: 10,
      description:
        "Encourage your child to place their rocks in places that are easily visible so as many people will be able to see them as possible.  ",
    },
    {
      stepNumber: 11,
      description:
        "You can also take your child's rocks to the yards of grandparents, other family or friends to bring a smile to their face. ",
    },
    {
      stepNumber: 12,
      description:
        "Make sure to explain to your child the importance of their creative art adding to the beauty of the environment around them and bringing joy to others who see them.  ",
    }
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Rock Painting"
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
