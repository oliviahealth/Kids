"use client";

import React from "react";
import Image from "next/image";
import { PageContainer, AddPhotoButton } from "@/components/activity/white-page";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";
import photo from "/public/images/dashboard/adventure-bay/Group 114.png";

export default function Page3({ onNext, onBack }: {
    onBack: () => void;
    onNext: () => void;
}) {
    const takeawayText = `Your family is one step closer to healthier eating and a week without the stress of planning what is for dinner! After you create a master meal list and one weekly meal plan, the activity sticker is yours. We hope you enjoy this activity with your kids!`;

    return (
        <>
            <Header
                logoSrc={headerIcon}
                title="Healthy Weekly Meal Planner"
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
