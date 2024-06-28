import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPActivityPreview } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Nature Walk"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPActivityPreview color={"#A2F3C3"} activities={[
        {
            id: 1,
            title: 'Step outside',
            description: 'Get outdoors and relax your mind',
        },
        {
            id: 2,
            title: 'Notice everything',
            description: 'When you start walking, look and listen for new things. If you’re in a new place, most things will be new to you.',
        },
        {
            id: 3,
            title: 'Avoid tunnel vision',
            description: "Look around at things that aren't right in front of you.",
        },
        {
            id: 4,
            title: 'Pass it down',
            description: 'If you bring your child, teach them about what you see. You can play "I Spy" or let them show you things they find interesting.',
        },
    ]} />
</WPContainer >