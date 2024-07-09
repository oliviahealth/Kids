import React from 'react';
import { ActivityPage } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>  {
    return (
        <ActivityPage
            bgColor="#FF8C38" 
            buttonColor="#FF7613" 
            numColor="#FDDE6F" 
            num={1} 
            title="Neck Rotations" 
            subtitle="Release built up tension by increasing range of motion." 
            instruction="Sit or stand up straight, relax your shoulders, and slowly move your head in a circle, first to the right and then to the left, while breathing deeply. Repeat this 5-10 times to help your neck feel better and more flexible." // Customize the instructions
            time={0} 
            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        />
    );
};

