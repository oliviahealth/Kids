import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPNeedsContainer, WPNeedsContent } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Back" image="/images/FantasyForest/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/FantasyForest/HeaderIcon.svg"} title={"Nature Walk"} subtitleColor={"#2EA05D"} subtitle={"Caregiver Wellness - Fantasy Forest"} />
    <div className="flex justify-between">
        <div className="flex-1 p-2">
            <WPDescription title={"Ditch the distractions"} paragraphs={[
                "Nature walks are easy to do with kids, or you can go alone for some quiet time. Just remember to leave your phone and music at home so you can enjoy the walk without distractions. ",
            ]} />
        </div>
        <div className="flex-1 p-2">
            <WPNeedsContainer bgColor="#B5F6D0" title={"Materials Needed"}>
                <WPNeedsContent outlineColor="#35A663" bgColor="#88DFAC" items={[
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
        </div>
    </div>
</WPContainer >