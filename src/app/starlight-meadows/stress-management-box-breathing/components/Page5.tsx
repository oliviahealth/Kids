import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>  {
    return (
        <ActivityPage
            bgColor="#61C5FE" 
            buttonColor="#33A6E6" 
            numColor="#FFC553" 
            num={2} 
            title="Hold that breath in for 4 counts" 
            subtitle="Let the pressure sit." 
            instruction="" // Customize the instructions
            time={0} 
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};

