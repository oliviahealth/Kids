import React from 'react';
import { WPHeader, WPDescription, WPContainer } from '../../../../components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Stretching"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Muscle Tension"} paragraphs={[
        "Stress can cause tension to build up in your muscles. A quick way to relieve tension is through simple stretching exercises. Follow 3 simple stretches to alleviate tension and manage your stress. ",
    ]} />
</WPContainer >