import React from 'react';
import { WPHeader, WPDescription, WPContainer } from '../../../../components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Box Breathing"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Just breathe. "} paragraphs={[
        "Being a parent, guardian, or caregiver can be a very busy lifestyle! This can make it hard sometimes to find the time to take care of yourself when you are feeling stressed or overwhelmed. However, it is very important to make sure that you make some time each day to take care of your needs. One quick way to do this is by using breathing techniques to calm yourself. ",
    ]} />
</WPContainer >