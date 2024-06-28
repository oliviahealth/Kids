import React from 'react';
import { WPHeader, WPDescription, WPContainer } from '../../../../components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/FantasyForest/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Nature Walk"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPDescription title={"Take a trek!"} paragraphs={[
        "Going on a nature walk is good for your mind and body! You might wonder what makes a nature walk different from a regular walk. The big difference is paying more attention to what’s around you. Follow these steps to enjoy your walk and feel calm and happy.",
    ]} />
</WPContainer >