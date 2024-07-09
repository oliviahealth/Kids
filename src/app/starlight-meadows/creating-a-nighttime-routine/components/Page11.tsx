import React from 'react';
import { WPHeader, WPContainer, WPDescription, WPAddPhotoButton } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Sleep Health"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "Your family is one step closer to healthier eating and a week without the stress of planning what is for dinner! After you create a master meal list and one weekly meal plan, the activity sticker is yours. We hope you enjoy this activity with your kids!",
    ]} />
    <WPAddPhotoButton color="#D2D9FF" icon="/images/StarlightMeadows/Camera.svg" onClick={() => { }} />
</WPContainer>