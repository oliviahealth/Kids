import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPNeedsContainer, WPNeedsContent } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Box Breathing"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Getting in the Groove"} paragraphs={[
        "One breathing technique we will be trying today is called Box breathing. Box breathing is a technique used worldwide, notably by Navy SEALs, as a form of stress relief. You may have also heard of this technique being called equal breathing, or square breathing.  ",
        "You can practice this breathing technique regularly, or just as needed for stress."
    ]} />
    <WPNeedsContainer title={"What will you need?"}>
        <WPNeedsContent items={[
            {
                name: "Alone Time",
                image: "/images/StarlightMeadows/person.svg",
            },
            
        ]} />
    </WPNeedsContainer>
</WPContainer >