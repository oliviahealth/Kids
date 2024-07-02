import React from 'react';
import { APContainer, APHeader, APInstruction } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

const activity = {
    buttonColor: "#FF7613",
    numColor: "#FDDE6F",
    bgColor: "#FF8C38",
    num: 1,

    title: "Diaphragmatic breathing - An Easy, Warm Up Breathing Exercise",
    subtitle: "This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.",
    instructions: [
        "Find a comfortable place and lie on your back.",
        "Place one hand on your stomach, above your belly button, and the other hand on your chest.",
        "Breathe in slowly through your nose.",
        "Breathe out slowly through your mouth.",
        "As you inhale, imagine filling a balloon in your stomach, and as you exhale, imagine shrinking the balloon. Continue breathing in and out for the remaining time.",
    ]
}

export default activity.instructions.map((instruction, instructionIndex) => ({ onBack, onContinue, onExit }: Page) => <APContainer
    key={`activity-${instructionIndex}`}
    bgColor={activity.bgColor}
    buttonColor={activity.buttonColor}
    numColor={activity.numColor}

    time={0}
    num={activity.num}

    onBack={onBack}
    onContinue={onContinue}
    onExit={onExit}
>
    <APHeader title={activity.title} subtitle={activity.subtitle} />
    <APInstruction instruction={instruction} />
</APContainer>)