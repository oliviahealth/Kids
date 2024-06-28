import React from 'react';
import { WPHeader, WPContainer, WPDescription } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit, page }: Page) => <WPContainer backText="Back" image="/images/FantasyForest/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Healthy Weekly Meal Planner"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "Your family is one step closer to healthier eating and a week without the stress of planning what is for dinner! After you create a master meal list and one weekly meal plan, the activity sticker is yours. We hope you enjoy this activity with your kids!",
    ]} />
</WPContainer>