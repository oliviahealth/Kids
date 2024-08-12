"use client";
import React from "react";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";
import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";


export default function Page2({
    onNext,
    onBack,
}: {
    onNext: () => void;
    onBack: () => void;
}) {
    const activitySteps = [
        {
            stepNumber: 1,
            title: 'Diaphragmatic breathing - An Easy, Warm Up Breathing Exercise',
            description: 'This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.',
        },
        {
            stepNumber: 2,
            title: 'Pelvic Tilt Kegel Exercise',
            description: 'Strengthen your lower back and abdominal muscles.',
        },
        {
            stepNumber: 3,
            title: 'Cat-Cow Yoga Exercise',
            description: 'Increase the flexibility of your shoulders, neck, and spine.',
        },
        {
            stepNumber: 4,
            title: 'Postpartum Plank Exercise',
            description: 'An isometric exercise that can help strengthen your core.',
        },
    ];

    return (
        <>
            <Header
                logoSrc={headerIcon}
                title="Caregiver Wellness - Blossom Haven"
                subtitle="Mindful Movement"
                homeLink="/"
                subtitleColor="#F1A533"
            />

            <Activity steps={activitySteps} stepNumberColor="#F8E7BA" />
            <Footer
                onNext={onNext}
                onBack={onBack}
                leftButtonText="Back"
                rightButtonText="Continue"
                leftClickAllowed={true}
            />
        </>
    );
}
