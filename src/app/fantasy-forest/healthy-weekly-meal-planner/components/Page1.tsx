import React from 'react';
import { WPHeader, WPDescription, WPContainer } from '../../../../components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/FantasyForest/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Healthy Weekly Meal Planner"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPDescription title={"Take Control"} paragraphs={[
        "There are many things you can't control in life, especially when you have to take care of others. But one thing you can control is making a meal plan each week! This can help reduce some stress.",
    ]} />
</WPContainer >