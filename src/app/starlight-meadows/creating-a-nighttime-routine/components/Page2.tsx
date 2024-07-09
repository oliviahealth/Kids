import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPNeedsContainer, WPNeedsContent } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Sleep Health"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Getting in the Groove"} paragraphs={[
        "Try to wake up and go to bed at the same time every day, aiming for at least 7 hours of sleep per night. Set an alarm for the same time every morning and set a reminder or an alarm at night for the time you want to start doing your bedtime routine.  ",
        "Once your bedtime reminder goes off, begin your nighttime routine. Spend a few minutes preparing for your day tomorrow, take a warm shower, brush your teeth, etc. This can be personalized as much as you like! "
    ]} />
    <WPNeedsContainer title={"What will you need?"}>
        <WPNeedsContent items={[
            {
                name: "Book",
                image: "/images/StarlightMeadows/book.svg",
            },
            {
                name: "Journal",
                image: "/images/StarlightMeadows/journal.svg",
            },
            {
                name: "Music",
                image: "/images/StarlightMeadows/musicIcon.svg",
            },
        ]} />
    </WPNeedsContainer>
</WPContainer >