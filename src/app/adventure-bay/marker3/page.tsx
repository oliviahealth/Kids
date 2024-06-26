"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import group82 from "../../../../public/images/dashboard/adventure-bay/group-82.png";
import coloringPage from "../../../../public/images/dashboard/adventure-bay/Group 74.png";
import pencil from "../../../../public/images/dashboard/adventure-bay/fluent-emoji-high-contrast_crayon.png";
import marker from "../../../../public/images/dashboard/adventure-bay/material-symbols_ink-marker-sharp.png";
import ellipse from "../../../../public/images/dashboard/adventure-bay/Ellipse 107.png";
const pageContent = [
  {
    title: "My Gratitude Jars",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Coloring for all ages!",
      content: {
        part1:
          "When things do not seem to be going our way, taking the time to embrace and apply the art of gratitude allows us to shift our perspective away from hardship and focus on the gifts of life. In general, gratitude is linked with positive health benefits all-around, such as improved mental and physical wellness. For example, studies have proven that a grateful mind aids in the regulation of blood pressure, mood, and sleep.",
      },
    },
  },
  {
    title: "My Gratitude Jars",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Relieve your anxiety",
      content: {
        part1:
          "When we take a moment and reflect in a state of gratitude, this gives us a chance to be appreciative of little things, big things, and everything else in between. The benefits of demonstrating gratitude on a daily basis not only helps with our well-being but also helps children witness the impact of thankfulness first hand. With this activity, you can learn more about how you can grow in gratitude while also teaching and showing your children to do the same!",
      },
      content2: {
        title: "What will you need?",
      },
    },
  },
  {
    title: "My Gratitude Jars",
    desc: "Caregiver Wellness - Adventure Bay",
    mainContent: {
      title: "Guidelines",
      content: {
        part1: {
          title: "Gather Supplies",
          desc: "Get some drawing utensils, and print out the jars!",
        },
        part2: {
          title: "Contemplate",
          desc: "Take a moment to think about what makes you happy",
        },
        part3: {
          title: "Write it down!",
          desc: "Write down or draw out what you are grateful for in each jar on the page",
        },
        part4: {
          title: "Include your children",
          desc: "Feel free to have your kids join you in a reflective state of gratitude!",
        },
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
            {currentIndex != 2 && <p>{content?.mainContent?.content?.part1}</p>}
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
          {currentIndex === 2 && (
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-10 gap-2 py-4">
                <div className="col-span-1 flex justify-center items-center">
                  <Image className="absolute" src={ellipse} />
                  <span className="relative font-bold z-30 ">1</span>
                </div>
                <div className="col-span-9 justify-center px-8 sm:px-4">
                  <h1 className="font-bold text-xl">
                    {content.mainContent.content.part1?.title}
                  </h1>
                  <p>{content.mainContent.content.part1?.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-10 gap-2 py-4">
                <div className="col-span-1 flex justify-center items-center">
                  <Image className="absolute" src={ellipse} />
                  <span className="relative font-bold z-30 ">2</span>
                </div>
                <div className="col-span-9 justify-center px-8 sm:px-4">
                  <h1 className="font-bold text-xl">
                    {content.mainContent.content.part2?.title}
                  </h1>
                  <p>{content.mainContent.content.part2?.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-10 gap-2 py-4">
                <div className="col-span-1 flex justify-center items-center">
                  <Image className="absolute" src={ellipse} />
                  <span className="relative font-bold z-30 ">3</span>
                </div>
                <div className="col-span-9 justify-center px-8 sm:px-4">
                  <h1 className="font-bold text-xl">
                    {content.mainContent.content.part3?.title}
                  </h1>
                  <p>{content.mainContent.content.part3?.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-10 gap-2 py-4">
                <div className="col-span-1 flex justify-center items-center">
                  <Image className="absolute" src={ellipse} />
                  <span className="relative font-bold z-30 ">4</span>
                </div>
                <div className="col-span-9 justify-center px-8 sm:px-4">
                  <h1 className="font-bold text-xl">
                    {content.mainContent.content.part4?.title}
                  </h1>
                  <p>{content.mainContent.content.part4?.desc}</p>
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
