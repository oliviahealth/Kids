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
            num={5} // Customize the number
            title="Setting traditions" // Customize the title
            subtitle="Set time for any other important nighttime activities your family is used to." // Customize the subtitle
            instruction="" // Customize the instructions
            time={0} // Customize the countdown time
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};
