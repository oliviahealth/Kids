import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPActivityPreview } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Sleep Health"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPActivityPreview color={"#A9B6FF"} activities={[
        {
            id: 1,
            title: 'Limit caffeine in the evening',
            description: 'Caffeine consumption stimulates your brain and keeps you alert and awake. Try to cut out caffeine in the late afternoon and evening.  ',
        },
        {
            id: 2,
            title: 'Avoid long naps',
            description: "Long naps or naps late in the day. Naps can be very useful and energizing, however, you should try to limit your naps to 30 minutes and avoid napping late in the day. ",
        },
        {
            id: 3,
            title: 'Eliminate screens',
            description: "Exposure to screens such as smartphones or laptops before bed keeps your mind active. Try to eliminate screen time for at least 30 minutes before bed.  ",
        },
        {
            id: 4,
            title: 'Ease your waking mind',
            description: "Implement some calming activities for your brain before bed. Some examples include reading a book, journaling, or listening to calming music.",
        },
    ]} />
</WPContainer >