import React from 'react';
import { APContainer, APHeader, APInstruction } from './ActivityPage';
import { Page } from './Types';

const activity = {
    buttonColor: "#FFC700",
    numColor: "#FBEBCC",
    bgColor: "#FFED4D",
    num: 2,

    title: "Pelvic Tilt Kegel Exercise",
    subtitle: "Strengthen your lower back and abdominal muscles.",
    instructions: [
        "Lie on your back with your knees bent and feet flat on the floor.",
        "Tighten your abdominal muscles and press your lower back into the floor.",
        "Hold for a few seconds, then release.",
        "Repeat this movement 10-15 times, gradually increasing as your muscles become stronger.",
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