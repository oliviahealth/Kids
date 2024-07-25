"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png";
import Activity, { ActivityStep } from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";
import { ActivityPageProps } from "@/components/Template/ActivityPage";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps: ActivityStep[] = [
    {
      stepNumber: 1,
      description: ` (Place both "My Rainbow” coloring sheets in front of your child along with colored pencils/crayons/markers) "We are going to each color our rainbow reading each line. Let's write our names at the top of the page." `,
    },
    {
      stepNumber: 2,
      description: `"Okay, lets color in the first line - my skin color. What color should we chose?"  
(Help your child chose the color close to their skin color.)  
"Everyone has a different skin color. No one person has the same color. That makes us unique. Let's color the section of the rainbow for our skin color. " `,
    },
    {
      stepNumber: 3,
      description: ` "Let's color in the next line - my hair color. What color should we chose?" 
(Help your child chose the color close to their hair color.)  
"Everyone has a different hair color. No one person has the same color or texture of hair. That makes us unique and different from one another. Let's color the section of the rainbow for our hair color."  `,
    },
    {
      stepNumber: 4,
      description: `"What is your favorite vegetable?"  
(Help your child chose whatever color they want that resembles their favorite vegetable.)   
"Each person has a different favorite vegetable. It's okay to like different things from your friends. That's what makes us unique. Let's color the section of the rainbow for our favorite vegetable color."  `,
    },
    {
      stepNumber: 5,
      description: `"Let's color in the next line - my favorite fruit color. What is your favorite fruit?"   
(Help your child chose whatever color they want that resembles their favorite fruit.)   
"Let's color the section of the rainbow for our favorite fruit color."`,
    },
    {
      stepNumber: 6,
      description: `"Let's color in the next line - my favorite color.  What is your favorite color?"   
(Help your child chose whatever color they want.)   
"Let's color the section of the rainbow for our favorite color. Everyone has a different favorite color. It can be blue, pink, yellow, green. It is okay to like different colors from your friends."  `,
    },
    {
      stepNumber: 7,
      description: `"Let's color in the next line - my eye color. What color should we chose?"  
(Help your child chose the color close to their eye color.)  
"Everyone has a different eye color. It is how we were born. Each of us have different genes or DNA in our body. My genes and DNA are different than yours. Let's color the section of the rainbow for our eye color."    `,
    },
    {
      stepNumber: 8,
      description: `"Let's color in the next line - my favorite color to wear. What color should we chose?"  
(Help your child chose whatever color they want.)   
"What is your favorite outfit to wear in that color? - (accept your child's response). Each person likes different clothes. Some clothes may be different that the clothes you like to wear. You should always compliment your friends' clothes. They wear their clothes because they like how it makes them look and feel. Let's color the section of the rainbow for our favorite color to wear."`,
    },
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
        subtitleColor="#52C5C0"
      />

      <Activity steps={activitySteps} stepNumberColor="#C5FFFC" />
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
