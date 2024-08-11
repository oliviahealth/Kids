"use client";

import React from "react";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";
import photo from "/public/images/activities/fantasy-forest/addAPhoto.svg";

export default function Page4({ onNext, onBack }: {
    onBack: () => void;
    onNext: () => void;
}) {
    const takeawayText = `Walking is a great way to reduce stress and increase physical activity. This activity specifically allows for more exploration of your senses and a greater understanding of your surroundings. Earn the sticker for this activity by going on one walk, but don't just stop there! Enjoy the fresh air!`;

    return (
        <>
            <Header
                logoSrc={headerIcon}
                title="Nature Walk"
                subtitle="Caregiver Wellness - Fantasy Forest"
                homeLink="/"
                subtitleColor="#35A663"
            />
                <KeyTakeaways text={takeawayText} photoSrc={photo} photoAlt="Photo" />
            <Footer
                onNext={onNext}
                onBack={onBack}
                leftButtonText="Back"
                rightButtonText="Continue"
                leftClickAllowed={true}
                rightHasLink={true}
                rightLinkHref="/home"
            />
        </>
    );
}
