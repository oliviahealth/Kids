import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPActivityPreview } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Healthy Weekly Meal Planner"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPActivityPreview color={"#A2F3C3"} activities={[
        {
            id: 1,
            title: 'Make a catalog',
            description: 'Create a master list of meals that your family will eat.',
        },
        {
            id: 2,
            title: 'Plan the week',
            description: "Take some of the meals from your master list for the week's plan. It is ok to have leftover nights!",
        },
        {
            id: 3,
            title: 'Gather your ingredients',
            description: "Check what ingredients you have and create a grocery list of the things you need.",
        },
    ]} />
</WPContainer >