import React from 'react';
import { WPHeader, WPContainer, WPDescription, WPAddPhotoButton } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Stretching"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "Stretching is a great method to help reduce stress and promote your health. With the stresses that can come from being a parent, it is important to remember to take care of yourself! These three simple stretches are an easy way to practice stress relief. ",
    ]} />
    <WPAddPhotoButton color="#D2D9FF" icon="/images/StarlightMeadows/Camera.svg" onClick={() => { }} />
</WPContainer>