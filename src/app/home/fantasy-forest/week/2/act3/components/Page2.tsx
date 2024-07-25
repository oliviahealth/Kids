"use client";
import React from "react";
import logo from "@/public/images/dashboard/fantasyForest/shared/logo.png";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps = [
    {
      stepNumber: 1,
      description: `(Place all the supplies listed above in front of your child). "Today we are going to make a stress ball by using this flour, funnel, water bottle, and balloon."`,
    },
    {
      stepNumber: 2,
      description: `"To begin, we will put the flour into the water bottle using the funnel." (If your child is able, let them hold the funnel in the water bottle as you pour the flour into the funnel, into the water bottle.) "Great job!"`,
    },
    {
      stepNumber: 3,
      description: `"Now we will put the flour from the water bottle into the balloon. Once all the flour is in the balloon, I will slowly let the air out and tie the top." (Inflate the balloon, then transfer the flour into the balloon. Once the flour is entirely transferred, slowly let the air out of the balloon, and tie the top of the balloon.)`,
    },
    {
      stepNumber: 4,
      description: `"This is our stress ball, and it is ready for a face and hair. What kind of face would you like to draw on it?" (Use the sharpie to draw whatever face they would like. If your child needs suggestions, suggest a smiling face.)`,
    },
    {
      stepNumber: 5,
      description: `"Now our stress ball is all done, you were a great helper! We can use this whenever we feel worried or uneasy. All you have to do is squeeze it and breathe deeply. Like this!"(Demonstrate how to squeeze the stress ball and breathe deeply.) "Now you try!" (Help your child if necessary until they can squeeze the stress ball and breathe deeply.) `,
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="DIY Stress Ball"
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
