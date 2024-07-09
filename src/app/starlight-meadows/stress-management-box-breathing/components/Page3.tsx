import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPActivityPreview } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Box Breathing"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPActivityPreview color={"#A9B6FF"} activities={[
        {
            id: 1,
            title: 'Breathe in for 4 counts',
            description: 'Gather as much air as comfortable.',
        },
        {
            id: 2,
            title: 'Hold that breath in for 4 counts',
            description: "Let the pressure sit.",
        },
        {
            id: 3,
            title: 'Release that breath for 4 counts',
            description: "Exhale slowly and steadily.",
        },
        {
            id: 4,
            title: 'Hold the exhale for 4 counts',
            description: "Pause briefly before your next breath. ",
        },
    ]} />
</WPContainer >