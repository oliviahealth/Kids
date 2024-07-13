import { MaterialChecklist, Subtitle, Description, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

import Link from 'next/link';

export default ({ onBack, onContinue, onExit }: Page) =>
    <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#F1A533", "#F8E7BA", "#FFF7E3"]} title="Mindful Movement" image="/images/flower.svg" subtitle="Caregiver Wellness - Blossom Haven" >
        <div className="md:w-1/2">
            <Subtitle>Mindful Movement</Subtitle>
            <Description>
                <p className="mb-4">
                    Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.
                </p>
                <p className="mb-4">
                    First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases.
                    <Link className="text-blue-500 hover:text-blue-700 ml-1" href="https://www.acog.org/womens-health/faqs/exercise-after-pregnancy">(Source)</Link>
                </p>
                <p className="mb-4">
                    Please note, for postpartum caregivers, talk to your doctor to make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise.
                    <Link className="text-blue-500 hover:text-blue-700 ml-1" href="https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/exercise-after-pregnancy/art-20044596">(Source)</Link>
                </p>
            </Description>

        </div>
        <div className="md:w-1/2">
            <MaterialChecklist title="Materials Needed" items={[
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
        </div>
    </EmptyWhitePage >
