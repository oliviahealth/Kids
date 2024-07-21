import React from 'react';
import { APContainer, APHeader, APInstruction } from '@/components/ActivityPage';
import { Page } from "@/components/Pagination";

const activity = {
    buttonColor: "#8BD5FF",
    numColor: "#FFC553",
    bgColor: "#61C5FE",
    num: 3,

    title: "Cat-Cow Yoga Exercise",
    subtitle: "Increase the flexibility of your shoulders, neck, and spine.",
    instructions: [
        "Kneel on the floor and put your hands on the floor in front of you.",
        "Keep your hands shoulder-width apart and your knees directly below your hips. ",
        "Inhale deeply while curving your lower back and bringing your head up, tilting your pelvis up like a \"cow.\"",
        "Exhale deeply and bring your abdomen in, arching your spine and bringing your head and pelvis down like a \"cat\". Repeat several times.",
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