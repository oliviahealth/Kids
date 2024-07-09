import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";
import NightMascot from "../../../../../public/images/StarlightMeadows/nightmascot.svg"

export default ({ onBack, onContinue, onExit }: Page) => {
    return (
        <ActivityPage
            bgColor="#FEEE61" // Customize the background color
            buttonColor="#F5DD00" // Customize the button color
            numColor="#8BD5FF" // Customize the number color
            num={6} // Customize the number
            title="You are finished!" // Customize the title
            subtitle="Remember to try to stick to this routine and avoid caffeine and distractions close to bedtime. " // Customize the subtitle
            instruction="" // Customize the instructions
            time={0} // Customize the countdown time
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};
