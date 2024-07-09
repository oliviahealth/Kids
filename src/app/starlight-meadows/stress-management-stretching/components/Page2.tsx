import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPNeedsContainer, WPNeedsContent } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Stretching"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Anywhere, Anytime"} paragraphs={[
        "Our method is effective for its versatility and convenience. ",
        
    ]} />
    <WPNeedsContainer title={"What will you need?"}>
        <WPNeedsContent items={[
            {
                name: "Space",
                image: "/images/StarlightMeadows/spaceIcon.svg",
            },
            {
                name: "Yoga Mat",
                image: "/images/StarlightMeadows/yogaMat.svg",
            },
            
        ]} />
    </WPNeedsContainer>
</WPContainer >