import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>  {
    return (
        <ActivityPage
            bgColor="#61C5FE" 
            buttonColor="#33A6E6" 
            numColor="#FFC553" 
            num={7} 
            title="Repeat" 
            subtitle="You may repeat this activities as many times as you wish, or just do it one time.  " 
            instruction="" // Customize the instructions
            time={0} 
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};

