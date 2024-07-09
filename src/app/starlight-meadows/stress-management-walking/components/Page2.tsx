import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPNeedsContainer, WPNeedsContent } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Walking"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Take note"} paragraphs={[
        "While walking it is important to take note of things that are happening both externally and internally. Keep record of changes in your environment and mental space. Observe without judgment, and appreciate these changes regardless of their tone.",
        
    ]} />
    <WPNeedsContainer title={"What will you need?"}>
        <WPNeedsContent items={[
            {
                name: "Water",
                image: "/images/StarlightMeadows/water.svg",
            },
            {
                name: "Sunglasses",
                image: "/images/StarlightMeadows/sunglasses.svg",
            },
            {
                name: "Snack",
                image: "/images/StarlightMeadows/apple.svg",
            },
        ]} />
    </WPNeedsContainer>
</WPContainer >