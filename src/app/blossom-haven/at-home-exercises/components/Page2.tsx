import { ActivityPreview, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>
    <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#F1A533", "#F8E7BA", "#FFF7E3"]} title="Mindful Movement" image="/images/flower.svg" subtitle="Caregiver Wellness - Blossom Haven" >
        <div className="md:w-1/2">
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
        </div>
        <div className="md:w-1/2">
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
        </div>
    </EmptyWhitePage >