import React from 'react';
import { WPHeader, WPDescription, WPContainer, WPNeedsContainer, WPNeedsContent } from './WhitePage';
import { Page } from './Types';

export default ({ onBack, onContinue, onExit, page }: Page) => <WPContainer backText="Back" image="/images/at-home-exercises-bg.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
    <WPDescription title={"Multifaceted Benefits"} paragraphs={[
        "Caregivers who have recently given birth can greatly benefit from exercise as it has decreased the risk of postpartum depression, increased abdominal muscle strength, and helps to keep a healthy body weight after pregnancy (https://www.acog.org/womens-health/faqs/exercise-after-pregnancy). The exercises that this activity includes are designed for caregivers of infants to do at home, giving the same benefits as someone going to a gym.",
    ]} />
    <WPNeedsContainer title={"What will you need?"}>
        <WPNeedsContent items={[
            {
                name: "Yoga Mat",
                image: "/images/yogamat.svg",
            },
            {
                name: "Timer",
                image: "/images/timer.svg",
            },
            {
                name: "Water",
                image: "/images/water.svg",
            },
            {
                name: "Gym Clothes",
                image: "/images/gymclothes.svg",
            }
        ]} />
    </WPNeedsContainer>
</WPContainer>