"use client";

import React, { ReactNode, useState } from 'react';
import Head from 'next/head';

const Header: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="flex items-center mb-8">
        <div className="flex-shrink-0">
            <img src="/images/flower.svg" alt="Logo" className="h-16 w-16" />
        </div>
        <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <h2 className="text-xl text-[#f59e0b]">{subtitle}</h2>
        </div>
    </div>
);

const Description: React.FC<{ title: string, paragraphs: string[] }> = ({ title, paragraphs }) => (
    <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {paragraphs.map((paragraph, index) => <p key={index} className="text-base ml-4 mb-4">{paragraph}</p>)}
    </div>
);

const Container: React.FC<{ children: ReactNode, onLeft: () => void, leftText: string, onContinue: () => void, image?: string }> = ({ image, children, leftText, onLeft, onContinue }) => (
    <div className="relative min-h-[100vh] w-[100vw] bg-cover bg-center bg-[url('/images/map.svg')]">
        <div className="bg-black bg-opacity-50 w-[100vw] h-[100vh] flex justify-center items-center">

            <div className="bg-white rounded-3xl overflow-y-auto max-w-7xl max-h-[80vh] p-16 m-8 relative">
                <button className="absolute right-16 top-16">
                    <img src="/images/exit.svg" alt="Exit" className="size-16" />
                </button>

                <div className="md:flex space-x-16">
                    <div className="w-full xl:w-auto">
                        {children}
                    </div>
                    <img src={image && image} className="hidden max-w-[40%] xl:block w-auto h-auto max-h-[40vh]" />
                </div>

                <div className="flex justify-between w-full mt-4">
                    <button onClick={onLeft} className="bg-transparent text-red-500 p-0 border-none cursor-pointer text-lg no-underline hover:underline">{leftText}</button>
                    <button onClick={onContinue} className="bg-transparent border-none cursor-pointer text-lg no-underline">
                        <img src="/images/continue.svg" alt="Continue" />
                    </button>
                </div>
            </div>
        </div>
    </div >
);

const NeedsContent: React.FC<{ title?: string, items: { name: string, image: string }[] }> = ({ title, items }) => <div>
    {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
    <div className="ml-4 sm:flex space-x-8">
        {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
                <img src={item.image} alt={item.name} className="h-16 w-16 mb-4 object-cover" />
                <span className="text-xl">{item.name}</span>
            </div>
        ))}
    </div>
</div>

const NeedsContainer: React.FC<{ title?: string, children: ReactNode }> = ({ title, children }) => <div className="mb-8">
    {title && <h1 className="text-2xl font-bold mb-8">{title}</h1>}
    {children}
</div>

const ActivityPreview: React.FC<{ activities: { id: number, title: string, description: string }[] }> = ({ activities }) => <div className="mb-8">
    <h2 className="text-2xl font-bold mb-8">Activity</h2>
    <ul className="ml-4 space-y-8">
        {activities.map((activity) => (
            <li key={activity.id} className="flex items-start">
                <div className="size-12 flex items-center justify-center bg-[#FBEBCC] rounded-full text-lg mr-4">
                    {activity.id}
                </div>
                <div>
                    <h3 className="font-bold mb-1">
                        {activity.title}

                    </h3>
                    <p className="text-sm">{activity.description}</p>
                </div>
            </li>
        ))}
    </ul>
</div>

const pages = [
    {
        leftText: "Learn More",
        image: "/images/saly-at-home-exercises.svg",
        content: <>
            <Header title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
            <Description title={"Mindful Movement"} paragraphs={[
                "Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.",
                "First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases (https://www.acog.org/womens-health/faqs/exercise-after-pregnancy).",
                "Please note, for postpartum caregivers, talk to your doctor make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise (https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/exercise-after-pregnancy/art-20044596)."
            ]} />
        </>
    },
    {
        leftText: "Back",
        image: "/images/at-home-exercises-bg.svg",
        content: <>
            <Header title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
            <Description title={"Multifaceted Benefits"} paragraphs={[
                "Caregivers who have recently given birth can greatly benefit from exercise as it has decreased the risk of postpartum depression, increased abdominal muscle strength, and helps to keep a healthy body weight after pregnancy (https://www.acog.org/womens-health/faqs/exercise-after-pregnancy). The exercises that this activity includes are designed for caregivers of infants to do at home, giving the same benefits as someone going to a gym.",
            ]} />
            <NeedsContainer title={"What will you need?"}>
                <NeedsContent items={[
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
            </NeedsContainer>
        </>
    },
    {
        leftText: "Back",
        content: <>
            <Header title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
            <ActivityPreview activities={[
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
        </>
    },
    {
        leftText: "Back",
        image: "/images/at-home-exercises-bg.svg",
        content: <>
            <Header title={"At-Home Exercises"} subtitle={"Caregiver Wellness - Blossom Haven"} />
            <Description title={"Key Takeaways"} paragraphs={[
                "These four exercises have been proven to significantly help caregivers of infants, especially those who have recently given birth, have better physical health and therefore improve their mental health. Other than the exercises that are listed above there a few other simple exercises that are much easier to complete. These activities include walking around the house, doing body weight squats, and lunges across the house. You can even include your infant in these exercises such as standing and holding your infant and raising them up and down to help with upper body strength, squats with the infant, and even bench press your infant.",
                "There are many different exercises that any caregiver can do at home either with their baby or just by themselves, but by taking part in any of these exercises you have a great opportunity to improve your physical and mental health. Please make sure to check with your doctor before beginning any exercises, and make sure that you can safely begin these exercises that will greatly help you out in the long run.",
            ]} />
        </>
    }
]


const AtHomeExercisesPage = () => {
    const [page, setPage] = useState(0);

    const handleLeft = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleContinue = () => {
        if (page < pages.length - 1) setPage(page + 1);
    };

    return (
        <Container leftText={pages[page].leftText} onLeft={handleLeft} onContinue={handleContinue} image={pages[page].image}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Candal&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            {pages[page].content}
        </Container>
    );
}

export default AtHomeExercisesPage;