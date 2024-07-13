import { ActivityPreview, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from "@/components/Pagination";

export default ({ onBack, onContinue, onExit }: Page) =>
    <EmptyWhitePage
        onBack={onBack}
        onContinue={onContinue}
        onExit={onExit}
        colors={["#35A663", "#88DFAC", "#B5F6D0"]}
        image="/images/activities/fantasy-forest/header-icon.svg"
        title="Healthy Weekly Meal Planner"
        subtitle="Caregiver Wellness - Fantasy Forest"
    >
        <div className="md:w-1/2">
            <ActivityPreview activities={[
                {
                    id: 1,
                    title: 'Make a catalog',
                    description: 'Create a master list of meals that your family will eat.',
                },
                {
                    id: 2,
                    title: 'Plan the week',
                    description: "Take some of the meals from your master list for the week's plan. It is ok to have leftover nights!",
                },
                {
                    id: 3,
                    title: 'Gather your ingredients',
                    description: "Check what ingredients you have and create a grocery list of the things you need.",
                },
            ]} />
        </div>
    </EmptyWhitePage >