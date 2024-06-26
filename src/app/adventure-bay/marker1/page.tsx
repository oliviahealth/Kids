"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import group82 from "../../../../public/images/dashboard/adventure-bay/group-82.png";
import pen from "../../../../public/images/dashboard/adventure-bay/fluent_pen-20-filled.png";
import paper from "../../../../public/images/dashboard/adventure-bay/mdi_paper.png";

const pageContent = [
  {
    title: "Affirmations for Children and Caregivers",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Stay Positive!",
      content: {
        part1:
          "At 3-4 years of age, children are little bundles of energy that are learning, growing, and exploring every day. They require a lot of attention from their caregiver, which can be physically and mentally taxing for that caregiver. As wonderful as it is for you to give so much of your attention to your child's health and development, it may cause burnout and negative thoughts over time. One way to combat these negative thoughts is by practicing daily affirmations. A positive affirmation is a phrase that one says to oneself to combat negative thoughts ( Citing this information from: https://wellspringprevention.org/blog/the-benefits-of-positive-affirmations/.) Many different affirmations can be used each day. We have included a list of examples for you to use, but feel free to create your own as well! The most beneficial affirmations are the ones you can relate to best.",
        part2:
          "Studies have shown that positive affirmations have many benefits, such as reduced stress and improved mood. They give you the opportunity to recognize your thought patterns and reduce any negative feelings that you may be experiencing. The self-awareness that they provide opens up the opportunity for you to realize any changes that need to be made in your life. Affirmations can also aid in improved sleep and fewer feelings of anxiety and depression (Citing this information from: https://wellspringprevention.org/blog/the-benefits-of-positive-affirmations.)",
      },
    },
  },
  {
    title: "Affirmations for Children and Caregivers",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "A Simple Integration",
      content: {
        part1:
          "Integrating positive affirmations into your daily routine is simple! You can choose to recite them at a scheduled time each day or just say them to yourself at any time during the day when you feel like you need them. These short statements can help retrain your brain into a mindset that is supportive and encouraging. This will aid in your resilience as a caregiver (Citing this information from: https://www.thebump.com/a/positive-parenting-affirmations.)",
        part2:
          "Utilize our list of affirmations to practice this exercise with your child today!",
      },
      content2: {
        title: "What will you need?",
      },
    },
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageContent.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pageContent.length) % pageContent.length
    );
  };

  const content = pageContent[currentIndex];

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div className="flex gap-4">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <span className="text-xl font-bold">{content.title}</span>
          <span className="text-xl" style={{ color: "#52C5C0" }}>
            {content.desc}
          </span>
        </div>

        <div className="float-right pl-20">
          <Link
            href="/home"
            className="rounded-full z-30 bg-gray-300 flex items-center justify-center w-20 h-20 absolute top-10 right-10"
          >
            X
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8 grid-cols-1">
        <div className="grid gap-8 col-span-7">
          <div className="grid gap-2">
            <h1 className="text-xl font-bold">{content.mainContent.title}</h1>
            <p>{content.mainContent.content.part1}</p>
            <p>{content.mainContent.content.part2}</p>
          </div>
          {currentIndex == 1 && (
            <div className="grid gap-8 ">
              <h1 className="text-xl font-bold">
                {content.mainContent.content2?.title}
              </h1>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <Image src={pen} alt="Pen" />
                  <div>Pen</div>
                </div>
                <div className="flex flex-col items-center">
                  <Image src={paper} alt="Paper" />
                  <span>Paper</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-span-5">
          <Image src={group82} alt="image" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
        <div className="justify-self-center sm:justify-self-start">
          <button
            className="text-rose-600 font-bold py-2 px-4"
            onClick={handlePrev}
          >
            Previous
          </button>
        </div>
        <div className="justify-self-center sm:justify-self-end">
          <button
            className="bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl"
            onClick={handleNext}
          >
            Continue &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
