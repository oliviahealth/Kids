import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>  {
    return (
        <ActivityPage
            bgColor="#61C5FE" 
            buttonColor="#33A6E6" 
            numColor="#FFC553" 
            num={1} 
            title=" Go outside and begin your walk" 
            subtitle="This can be in your neighborhood, a park, or anywhere you would like to go on a walk.  " 
            instruction="" // Customize the instructions
            time={0} 
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};

