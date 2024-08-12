"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/blossom-haven/header-icon.png";
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
      description: "Keep this phrase in mind: \"Bring baby to breast, not breast to baby\". When you lean or hunch over during feeding time, this causes unnecessary pain to your back and shoulders. Sitting upright, bring your child to you during feeding time to reduce soreness",
    },
    {
      stepNumber: 2,
      description: "Check to make sure your child is latching onto you correctly during nursing. Whenever you are ready to unlatch your child from breast, do so gently by putting finger slightly in their mouth and turn to release. Being gentle will reduce the aches and pains of your nipples during and after feeding time.",
    },
    {
      stepNumber: 3,
      description: "When you are breastfeeding, it is best to be in an upright position holding your child in a cradle position. This position provides the most comfort for breastfeeding caregivers, and remember to bring the baby to your breast to further reduce the chance of soreness. Pillows can also provide more comfort.",
    },
    {
      stepNumber: 4,
      description: "Massage and use a cool compress on your breasts after breastfeeding your child. This can help reduce muscle inflammation and create more comfort for you.",
    },
    {
      stepNumber: 5,
      description: "To reduce aches and pain from your muscles, perform some neck, shoulder, and back stretches. Two highly recommended stretches are \"Thread the Needle\" and \"Wall Chest Opener.\" For \"Thread the Needle,\" with your knees on the ground and hands slightly above your head, take one arm and thread it through the opening between your other arm and leg. Hold this position for 5-10 seconds, then repeat with your other arm, performing this stretch 5-10 times with each arm. For \"Wall Chest Opener,\" stand next to a wall and place your hand and arm flat on the wall with your elbow at a 90-degree angle. With your foot closest to the wall, slowly push forward and hold the stretch, breathing slowly. Maintain this position for 10-15 seconds on each side, repeating about 5 times. This stretch is especially beneficial after nursing.",
    },
  ];  

  return (
    <>
      <Header
        logoSrc={logo}
        title="Breastfeeding Relief Tips for Caregiver"
        subtitle="Nutrition - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <Activity steps={activitySteps} stepNumberColor="#F8E7BA" />
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
