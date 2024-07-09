import React from 'react';
import { WPHeader, WPDescription, WPContainer } from '../../../../components/WhitePage';
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) => <WPContainer backText="Learn More" image="/images/StarlightMeadows/WhitepageBackground.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
    <WPHeader image={"/images/StarlightMeadows/HeaderIcon.svg"} title={"Stress Management - Walking"} subtitleColor={"#5A6EDD"} subtitle={"Caregiver Wellness - Starlight Meadows"} />
    <WPDescription title={"Walk it off."} paragraphs={[
        "Parenting can be very stressful at times, so finding ways to manage your stress is key.  Exercise and mindfulness are some forms of stress management that help many people. This activity will allow you to practice mindfulness, by engaging with your five senses during the walk, while also getting exercise. You may even bring your child along if you choose! ",
    ]} />
</WPContainer >