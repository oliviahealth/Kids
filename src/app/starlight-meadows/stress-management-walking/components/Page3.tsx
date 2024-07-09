import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPActivityPreview } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => (
    <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
        <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Walking"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows "} />
        <WPActivityPreview color={"#A9B6FF"} activities={[
            {
                id: 1,
                title: 'Go outside and begin your walk',
                description: 'This can be in your neighborhood, a park, or anywhere you would like to go on a walk.',
            },
            {
                id: 2,
                title: 'Look outward',
                description: "Notice five things you can see. The leaves on trees may be blowing in the wind, squirrels might be running around, etc.",
            },
            {
                id: 3,
                title: 'Look inward',
                description: "Think about four things you can feel. This could be wind blowing on your face, how your feet feel in your shoes, your child’s hand or their stroller (if they came along for this walk), etc.",
            },
            {
                id: 4,
                title: 'Listen',
                description: "Listen for three things you can hear. Your footsteps, birds chirping, people talking, gravel crunching, etc.",
            },
            {
                id: 5,
                title: 'Take a deep inhale',
                description: "Think about two things you can smell.",
            },
            {
                id: 6,
                title: 'Grab a bite',
                description: "Maybe you brought a drink or a snack with you to taste, or there is either at home. Take a second to reflect on the sensation of taste.  ",
            },
            {
                id: 7,
                title: 'Repeat',
                description: "You may repeat this activity as many times as you wish, or just do it one time.  ",
            },
        ]} />
    </WPContainer>
);