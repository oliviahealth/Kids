import { ActivityPreview, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

export default ({ onBack, onContinue, onExit }: Page) => <EmptyWhitePage
    onBack={onBack}
    onContinue={onContinue}
    onExit={onExit}
    colors={["#35A663", "#88DFAC", "#B5F6D0"]}
    image="/images/activities/fantasy-forest/header-icon.svg"
    title="Nature Walk"
    subtitle="Caregiver Wellness - Fantasy Forest"
>
    <ActivityPreview activities={[
        {
            id: 1,
            title: 'Step outside',
            description: 'Get outdoors and relax your mind',
        },
        {
            id: 2,
            title: 'Notice everything',
            description: 'When you start walking, look and listen for new things. If you’re in a new place, most things will be new to you.',
        },
        {
            id: 3,
            title: 'Avoid tunnel vision',
            description: "Look around at things that aren't right in front of you.",
        },
        {
            id: 4,
            title: 'Pass it down',
            description: 'If you bring your child, teach them about what you see. You can play "I Spy" or let them show you things they find interesting.',
        },
    ]} />
</EmptyWhitePage >