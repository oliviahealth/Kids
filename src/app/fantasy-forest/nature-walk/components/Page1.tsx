import { MaterialChecklist, Description, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

export default ({ onBack, onContinue, onExit }: Page) =>
    <EmptyWhitePage
        onBack={onBack}
        onContinue={onContinue}
        onExit={onExit}
        colors={["#35A663", "#88DFAC", "#B5F6D0"]}
        image="/images/activities/fantasy-forest/header-icon.svg"
        title="Nature Walk"
        subtitle="Caregiver Wellness - Fantasy Forest"
    >
        <div className="md:w-1/2">
            <Description title={"Take a trek!"} paragraphs={[
                "Going on a nature walk is good for your mind and body! You might wonder what makes a nature walk different from a regular walk. The big difference is paying more attention to what’s around you. Follow these steps to enjoy your walk and feel calm and happy.",
            ]} />
            <Description title={"Ditch the distractions"} paragraphs={[
                "Nature walks are easy to do with kids, or you can go alone for some quiet time. Just remember to leave your phone and music at home so you can enjoy the walk without distractions. ",
            ]} />
        </div>
        <div className="w-1/2">
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
    </EmptyWhitePage>