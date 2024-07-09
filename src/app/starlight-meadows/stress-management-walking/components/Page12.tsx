import React from 'react';
import { WPHeader, WPContainer, WPDescription, WPAddPhotoButton } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Walking"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "Walking is a great form of low-impact physical activity. Pairing walking with a mindfulness activity (such as this one) is an effective way to de-stress and center yourself. ","This activity can be used again and again as free and simple way to destress. Some people like to make walking part of their weekly routine, and others like to do it whenever they feel like it - do whatever works best for you!",
    ]} />
    <WPAddPhotoButton color="#D2D9FF" icon="/images/StarlightMeadows/Camera.svg" onClick={() => { }} />
</WPContainer>