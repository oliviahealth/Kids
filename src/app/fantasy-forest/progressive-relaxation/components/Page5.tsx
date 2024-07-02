import React from 'react';
import { WPHeader, WPContainer, WPDescription, WPAddPhotoButton } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit, page }: Page) => <WPContainer backText="Back" image="/images/FantasyForest/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Progressive Relaxation"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "Progressive relaxation is a great way to center the mind when life feels too overwhelming. After completing this activity you should feel relaxed and focused. If you complete this practice 4 days out of 7 days in one week you can recieve the sticker for this activity! Take a deep breath and take your next step, but don't forget to take a break to relax your mind throughout the week. ",
    ]} />
    <WPAddPhotoButton color="#C1F5D6" icon="/images/FantasyForest/Camera.svg" onClick={() => { }} />
</WPContainer>