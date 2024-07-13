import { MaterialChecklist, Description, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

export default ({ onBack, onContinue, onExit }: Page) => <EmptyWhitePage
    onBack={onBack}
    onContinue={onContinue}
    onExit={onExit}
    colors={["#35A663", "#88DFAC", "#B5F6D0"]}
    image="/images/activities/fantasy-forest/header-icon.svg"
    title="Progressive Relaxation"
    subtitle="Caregiver Wellness - Fantasy Forest"
>
    <div className="md:w-1/2">
        <Description title={"Take some stress off."} paragraphs={[
            "When your child is 4 or 5 years old, they grow and learn a lot. They might start preschool or kindergarten, learn to read and write, or become a good big brother or sister. It can be hard for parents to help their child during this time. It’s important for parents to take a break and relax sometimes.",
            "This is a guide to help you relax. It's called Progressive Relaxation. You will relax each muscle in your body to feel calm."
        ]} />
        <Description title={"?"} paragraphs={[
            "?"
        ]} />
    </div>
    <div className="md:w-1/2">
        <MaterialChecklist title={"Materials Needed"} items={[
            {
                name: "Gratitude Jars",
                image: "/images/activities/fantasy-forest/gratitude-jar.svg",
            },
            {
                name: "Pen",
                image: "/images/activities/fantasy-forest/pen.svg",
            },
            {
                name: "Paper",
                image: "/images/activities/fantasy-forest/paper.svg",
            },
        ]} />
    </div>
</EmptyWhitePage >