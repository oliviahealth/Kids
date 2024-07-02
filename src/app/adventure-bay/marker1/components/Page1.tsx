"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/dashboard/adventure-bay/title-image.png";
import Link from "next/link";
import group82 from "../../../../../public/images/dashboard/adventure-bay/group-82.png";
import arrow from "../../../../../public/images/dashboard/adventure-bay/next_arrow.png"

export default function Page1({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div className="flex gap-4">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <span className="text-xl font-bold">
            Affirmations for Children and Caregivers
          </span>
          <span className="text-xl" style={{ color: "#52C5C0" }}>
            Caregiver Wellness - Adventure Bay
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

      <div className="grid md:grid-cols-12 gap-8 grid-cols-1 flex-grow">
        <div className="grid gap-8 col-span-7 py-5">
          <div className="grid gap-2">
            <h1 className="text-xl font-bold">Stay Positive!</h1>
            <p>
              At 3-4 years of age, children are little bundles of energy that
              are learning, growing, and exploring every day. They require a lot
              of attention from their caregiver, which can be physically and
              mentally taxing for that caregiver. As wonderful as it is for you
              to give so much of your attention to your child's health and
              development, it may cause burnout and negative thoughts over time.
              One way to combat these negative thoughts is by practicing daily
              affirmations. A positive affirmation is a phrase that one says to
              oneself to combat negative thoughts ( Citing this information
              from:
              https://wellspringprevention.org/blog/the-benefits-of-positive-affirmations/.)
              Many different affirmations can be used each day. We have included
              a list of examples for you to use, but feel free to create your
              own as well! The most beneficial affirmations are the ones you can
              relate to best.
            </p>
            <p>
              Studies have shown that positive affirmations have many benefits,
              such as reduced stress and improved mood. They give you the
              opportunity to recognize your thought patterns and reduce any
              negative feelings that you may be experiencing. The self-awareness
              that they provide opens up the opportunity for you to realize any
              changes that need to be made in your life. Affirmations can also
              aid in improved sleep and fewer feelings of anxiety and depression
              (Citing this information from:
              https://wellspringprevention.org/blog/the-benefits-of-positive-affirmations.)
            </p>
          </div>
        </div>

        <div className="col-span-5">
          <Image src={group82} alt="image" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
        <div className="justify-self-center sm:justify-self-start">
          <Link href='/home'
            className="text-red-600 py-2 px-4"
            onClick={onBack}
          >
            Learn more
          </Link>
        </div>
        <div className="justify-self-center sm:justify-self-end">
          <button
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-3xl flex justify-center items-center"
            onClick={onNext}
          >
            Continue
            <Image src={arrow} alt="arrow" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
