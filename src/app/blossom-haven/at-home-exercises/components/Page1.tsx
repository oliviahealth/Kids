import React from 'react';
import { WPHeader, WPContainer, WPSubtitle } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";
import Link from 'next/link';

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/saly-at-home-exercises.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/flower.svg"} title={"At-Home Exercises"} subtitleColor={"#F1A533"} subtitle={"Caregiver Wellness - Blossom Haven"} />
    <div className="mb-8">
        <WPSubtitle title={"Mindful Movement"} />
        <p className="text-sm ml-4 mb-4">
            Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.
        </p>
        <p className="text-sm ml-4 mb-4">
            First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases.
            <Link className="text-blue-500 hover:text-blue-700 ml-1" href="https://www.acog.org/womens-health/faqs/exercise-after-pregnancy">(Source)</Link>
        </p>
        <p className="text-sm ml-4 mb-4">
            Please note, for postpartum caregivers, talk to your doctor to make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise.
            <Link className="text-blue-500 hover:text-blue-700 ml-1" href="https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/exercise-after-pregnancy/art-20044596">(Source)</Link>
        </p>
    </div>

</WPContainer >