"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import group82 from "../../../../public/images/dashboard/adventure-bay/group-82.png";
import coloringPage from "../../../../public/images/dashboard/adventure-bay/Group 74.png";
import pencil from "../../../../public/images/dashboard/adventure-bay/fluent-emoji-high-contrast_crayon.png";
import marker from "../../../../public/images/dashboard/adventure-bay/material-symbols_ink-marker-sharp.png";

const pageContent = [
  {
    title: "Focusing on Feelings",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Essential Introspection",
      content: {
        part1:
          "When caring for a young child, you may begin to believe that they deserve one hundred percent of your attention all of the time. This can lead to you putting your own feelings on the back-burner. Ignoring your emotions can cause them to build up over time. They can result in feelings of stress and discomfort. Calm.com describes emotions as the language of your body, providing feedback on how your body feels about what is happening around it (https://www.calm.com/blog/how-to-feel-your-feeling.) Emotions send important messages to your mind and body -- messages that shouldn't be ignored! Listen to your emotions to help recognize what your needs are.",
      },
    },
  },
  {
    title: "Focusing on Feelings",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Express Yourself!",
      content: {
        part1:
          "This activity can help you recognize what feelings you are experiencing. You will need a pencil and paper to write down what emotion you experienced each day. You can utilize our list of feelings to help recognize what emotion you are experiencing, At the end of each day, reflect on your day and write down what feeling you are experiencing. Track your feelings each day (or more than once a day if desired) and think about why you are feeling this emotion and what your body needs. For example, if you are feeling fatigued, listen to this feeling and consider asking someone to watch your child while you take a nap.",
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

      <div className="grid items-start md:grid-cols-12 gap-8 grid-cols-1">
        <div className="grid gap-8 col-span-7">
          <div className="grid gap-2">
            <h1 className="text-xl font-bold">{content.mainContent.title}</h1>
            <p>{content.mainContent?.content?.part1}</p>
          </div>
          {currentIndex == 1 && (
            <div className="grid gap-8 ">
              <h1 className="text-xl font-bold">
                {content.mainContent.content2?.title}
              </h1>
              <div className="flex gap-20">
                <div className="flex flex-col items-center justify-between">
                  <Image src={coloringPage} alt="Coloring Pages" />
                  <div>Olivia-Kids Gratitude Jars</div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Image src={pencil} alt="pencil" />
                  <span>Paper</span>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Image src={marker} alt="Marker" />
                  <div>Pen</div>
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
            {currentIndex == 0 ? "Learn more" : "Back"}
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
