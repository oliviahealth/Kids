import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>  {
    return (
        <ActivityPage
            bgColor="#61C5FE" 
            buttonColor="#33A6E6" 
            numColor="#FFC553" 
            num={4} 
            title="Hold the exhale for 4 counts" 
            subtitle="Pause briefly before your next breath." 
            instruction="" // Customize the instructions
            time={0} 
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};

