"use client";

import React, { ReactNode, act, useState } from 'react';

import { WPHeader, WPDescription, WPContainer, WPNeedsContent, WPNeedsContainer, WPActivityPreview } from './AtHomeExercisesWhitePage';
import { APContainer, APHeader, APInstruction } from './AtHomeExercisesActivityPage';

const activityData = [
    [
        {
            buttonColor: "#FF7613",
            pageNumColor: "#FDDE6F",
            bgColor: "#FF8C38",
            pageNum: 1,

            title: "Diaphragmatic breathing - An Easy, Warm Up Breathing Exercise",
            subtitle: "This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.",
            instructions: [
                "Find a comfortable place and lie on your back.",
                "Place one hand on your stomach, above your belly button, and the other hand on your chest.",
                "Breathe in slowly through your nose.",
                "Breathe out slowly through your mouth.",
                "As you inhale, imagine filling a balloon in your stomach, and as you exhale, imagine shrinking the balloon. Continue breathing in and out for the remaining time.",
            ]
        },
        {
            buttonColor: "#FFC700",
            pageNumColor: "#FBEBCC",
            bgColor: "#FFED4D",
            pageNum: 2,

            title: "Pelvic Tilt Kegel Exercise",
            subtitle: "Strengthen your lower back and abdominal muscles.",
            instructions: [
                "Lie on your back with your knees bent and feet flat on the floor.",
                "Tighten your abdominal muscles and press your lower back into the floor.",
                "Hold for a few seconds, then release.",
                "Repeat this movement 10-15 times, gradually increasing as your muscles become stronger.",
            ]
        },
        {
            buttonColor: "#8BD5FF",
            pageNumColor: "#FFC553",
            bgColor: "#61C5FE",
            pageNum: 3,

            title: "Cat-Cow Yoga Exercise",
            subtitle: "Increase the flexibility of your shoulders, neck, and spine.",
            instructions: [
                "Kneel on the floor and put your hands on the floor in front of you.",
                "Keep your hands shoulder-width apart and your knees directly below your hips. ",
                "Inhale deeply while curving your lower back and bringing your head up, tilting your pelvis up like a \"cow.\"",
                "Exhale deeply and bring your abdomen in, arching your spine and bringing your head and pelvis down like a \"cat\". Repeat several times.",
            ]
        }
    ]
]

interface Page { page: number, onBack: () => void; onContinue: () => void, onExit: () => void }

const activityPages: React.FC<Page>[] = activityData.flatMap((activityGroup, groupIndex) =>
    activityGroup.flatMap((activity, activityIndex) =>
        activity.instructions.map((instruction, instructionIndex) => ({ onBack, onContinue, onExit, page }) => <APContainer
            key={`activity-${groupIndex}-${activityIndex}-${instructionIndex}`}

            bgColor={activity.bgColor}
            buttonColor={activity.buttonColor}
            pageNumColor={activity.pageNumColor}

            time={10}
            page={activity.pageNum}

            onBack={onBack}
            onContinue={onContinue}
            onExit={onExit}
        >
            <APHeader title={activity.title} subtitle={activity.subtitle} />
            <APInstruction instruction={instruction} />
        </APContainer>)
    )
);

const whitePages: React.FC<Page>[] = [

    ({ onBack, onContinue, onExit }) => <WPContainer backText="Learn More" image="/images/saly-at-home-exercises.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
        <WPHeader title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
        <WPDescription title={"Mindful Movement"} paragraphs={[
            "Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.",
            "First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases (https://www.acog.org/womens-health/faqs/exercise-after-pregnancy).",
            "Please note, for postpartum caregivers, talk to your doctor make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise (https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/exercise-after-pregnancy/art-20044596)."
        ]} />
    </WPContainer >,

    ({ onBack, onContinue, onExit, page }) => <WPContainer backText="Back" image="/images/at-home-exercises-bg.svg" onBack={onBack} onContinue={onContinue} onExit={onExit}>
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
    </WPContainer>,

    ({ onBack, onContinue, onExit, page }) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
        <WPHeader title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
        <WPActivityPreview activities={[
            {
                id: 1,
                title: 'Diaphragmatic breathing- An Easy, Warm Up Breathing Exercise',
                description: 'This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.',
            },
            {
                id: 2,
                title: 'Pelvic Tilt Kegel Exercise',
                description: 'Strengthen your lower back and abdominal muscles.',
            },
            {
                id: 3,
                title: 'Cat-Cow Yoga Exercise',
                description: 'Increase the flexibility of your shoulders, neck, and spine.',
            },
            {
                id: 4,
                title: 'Postpartum Plank Exercise',
                description: 'An isometric exercise that can help strengthen your core.',
            },
        ]} />
    </WPContainer>,

    ({ onBack, onContinue, onExit, page }) => <WPContainer backText="Back" onBack={onBack} onContinue={onContinue} onExit={onExit}>
        <WPHeader title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
        <WPDescription title={"Key Takeaways"} paragraphs={[
            "These four exercises have been proven to significantly help caregivers of infants, especially those who have recently given birth, have better physical health and therefore improve their mental health. Other than the exercises that are listed above there a few other simple exercises that are much easier to complete. These activities include walking around the house, doing body weight squats, and lunges across the house. You can even include your infant in these exercises such as standing and holding your infant and raising them up and down to help with upper body strength, squats with the infant, and even bench press your infant.",
            "There are many different exercises that any caregiver can do at home either with their baby or just by themselves, but by taking part in any of these exercises you have a great opportunity to improve your physical and mental health. Please make sure to check with your doctor before beginning any exercises, and make sure that you can safely begin these exercises that will greatly help you out in the long run.",
        ]} />
    </WPContainer>
]

const pages = [...whitePages]
pages.splice(3, 0, ...activityPages)

const AtHomeExercisesPage = () => {
    const [page, setPage] = useState(0);

    const handleBack = () => {
        if (page > 0) setPage(page - 1);
    }

    const handleContinue = () => {
        if (page < pages.length - 1) setPage(page + 1);
    }

    const handleExit = () => {
        setPage(0)
    }

    return pages[page]({ onBack: handleBack, onContinue: handleContinue, onExit: handleExit, page: page + 1 });
}

export default AtHomeExercisesPage;