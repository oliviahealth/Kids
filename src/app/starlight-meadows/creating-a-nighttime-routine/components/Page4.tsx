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
            num={1} // Customize the number
            title="Creating a nighttime routine" // Customize the title
            subtitle="Grab your materials and click continue to get started." // Customize the subtitle
            instruction="" // Customize the instructions
            time={0} // Customize the countdown time
            svg={"/images/StarlightMeadows/nightmascot.svg"} // Pass the NightMascot SVG
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};
