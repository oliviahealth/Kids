import React from 'react';
import { WPHeader, WPContainer, WPDescription } from '@/components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit, page }: Page) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/flower.svg"} title={"At-Home Exercises"} subtitleColor={"#F1A533"} subtitle={"Caregiver Wellness - Blossom Haven"} />
    <WPDescription title={"Key Takeaways"} paragraphs={[
        "These four exercises have been proven to significantly help caregivers of infants, especially those who have recently given birth, have better physical health and therefore improve their mental health. Other than the exercises that are listed above there a few other simple exercises that are much easier to complete. These activities include walking around the house, doing body weight squats, and lunges across the house. You can even include your infant in these exercises such as standing and holding your infant and raising them up and down to help with upper body strength, squats with the infant, and even bench press your infant.",
        "There are many different exercises that any caregiver can do at home either with their baby or just by themselves, but by taking part in any of these exercises you have a great opportunity to improve your physical and mental health. Please make sure to check with your doctor before beginning any exercises, and make sure that you can safely begin these exercises that will greatly help you out in the long run.",
    ]} />
</WPContainer>