import React from 'react';
import { WPHeader, WPContainer, WPDescription, WPAddPhotoButton } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit, page }: Page) => <WPContainer backText="Back" image="/images/FantasyForest/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Nature Walk"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "Walking is a great way to reduce stress and increase physical activity. This activity specifically allows for more exploration of your senses and a greater understanding of your surroundings. Earn the sticker for this activity by going on one walk, but don't just stop there! Enjoy the fresh air!",
    ]} />
    <WPAddPhotoButton onClick={() => { }} />
</WPContainer>