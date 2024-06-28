import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPNeedsContainer, WPNeedsContent } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" image="/images/FantasyForest/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Healthy Weekly Meal Planner"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <WPDescription title={"Simple planning"} paragraphs={[
        "Here, you can find a printable template for a weekly meal plan as well as a template for a grocery list. You can fill them out alone or you can include your kids in the planning process. Two benefits of including your kids is that you can teach them about the importance of balance with nutrition, and they are more likely to eat the meals if they help choose them. To increase involvement, a kid-friendly food group plate is included that shows the recommended amounts of each food group with common examples. ",
        "Taking some time once a week to make a meal plan and a grocery list can remove some of the stress during the week.  "
    ]} />
    <WPNeedsContainer title={"What will you need?"}>
        <WPNeedsContent items={[
            {
                name: "Gratitude Jars",
                image: "/images/FantasyForest/GratitudeJar.svg",
            },
            {
                name: "Pen",
                image: "/images/FantasyForest/Pen.svg",
            },
            {
                name: "Paper",
                image: "/images/FantasyForest/Paper.svg",
            },
        ]} />
    </WPNeedsContainer>
</WPContainer >