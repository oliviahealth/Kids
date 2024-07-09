import React from 'react';
import { WPHeader, WPContainer, WPDescription, WPAddPhotoButton } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Box Breathing"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "Box breathing is a free  and effective way to relieve stress and calm yourself. Parenting can be very overwhelming at times, so box breathing is one way of quickly de-stressing, so that you can take care of yourself, as well as your family. ",
    ]} />
    <WPAddPhotoButton color="#D2D9FF" icon="/images/StarlightMeadows/Camera.svg" onClick={() => { }} />
</WPContainer>