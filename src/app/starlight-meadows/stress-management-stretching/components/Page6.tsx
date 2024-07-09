import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>  {
    return (
        <ActivityPage
            bgColor="#FF8C38" 
            buttonColor="#FF7613" 
            numColor="#FDDE6F" 
            num={3} 
            title="Child’s Pose" 
            subtitle="Alleviate hip and back muscles with a lesser known stretch. " 
            instruction="Kneel on the floor, sit back on your heels, and stretch your arms forward, lowering your chest to the ground while breathing deeply. Hold for 20-30 seconds and repeat 3-5 times to improve flexibility." // Customize the instructions
            time={0} 
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};

