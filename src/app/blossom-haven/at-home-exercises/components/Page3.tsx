import React from 'react';
import { WPHeader, WPContainer, WPActivityPreview } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit, page }: Page) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/flower.svg"} title={"At-Home Exercises"} subtitleColor={"#F1A533"} subtitle={"Caregiver Wellness - Blossom Haven"} />
    <WPActivityPreview color={"#FBEBCC"} activities={[
        {
            id: 1,
            title: 'Diaphragmatic breathing- An Easy, Warm Up Breathing Exercise',
            description: 'This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.',
        },
        {
            id: 2,
            title: 'Pelvic Tilt Kegel Exercise',
            description: 'Strengthen your lower back and abdominal muscles.',
        },
        {
            id: 3,
            title: 'Cat-Cow Yoga Exercise',
            description: 'Increase the flexibility of your shoulders, neck, and spine.',
        },
        {
            id: 4,
            title: 'Postpartum Plank Exercise',
            description: 'An isometric exercise that can help strengthen your core.',
        },
    ]} />
</WPContainer>