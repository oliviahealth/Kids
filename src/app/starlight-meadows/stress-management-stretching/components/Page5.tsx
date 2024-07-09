import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>  {
    return (
        <ActivityPage
            bgColor="#FF8C38" 
            buttonColor="#FF7613" 
            numColor="#FDDE6F" 
            num={2} 
            title="Toe Touch" 
            subtitle="Use a familiar stretch to achieve unfamiliar flexibility. " 
            instruction="Stand with your feet shoulder-width apart, slowly bend at your hips to reach toward your toes, and hold for 10-20 seconds while breathing deeply. Repeat this stretch 5-10 times to improve your flexibility." // Customize the instructions
            time={0} 
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};

