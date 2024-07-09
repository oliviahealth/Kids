import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPActivityPreview } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Stretching"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPActivityPreview color={"#A9B6FF"} activities={[
        {
            id: 1,
            title: 'Neck Rotations',
            description: 'Release built up tension by increasing your range of motion.',
        },
        {
            id: 2,
            title: 'Toe Touch',
            description: "Use a familiar stretch to achieve unfamiliar flexibility.",
        },
        {
            id: 3,
            title: 'Child’s Pose',
            description: "Alleviate hip and back muscles with a lesser known stretch.",
        },
    ]} />
</WPContainer >