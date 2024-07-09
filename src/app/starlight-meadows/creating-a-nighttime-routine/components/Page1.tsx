import React from 'react';
import { WPHeader, WPDescription, WPContainer } from '../../../../components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Creating a Nighttime Routine"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Sleep Health"} paragraphs={[
        "Getting good sleep is one of the keys to maintaining your physical and mental health. However, the excitement and stress of parenthood can affect the quality and amount of sleep you get. A great way to promote sleep health is to create a bedtime routine you can follow each night.","For this activity, you will be creating your own nighttime routine. Use the template to create and follow your nightly routine. "
    ]} />
</WPContainer >