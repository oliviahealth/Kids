import { MaterialChecklist, Description, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

export default ({ onBack, onContinue, onExit }: Page) =>
    <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#35A663", "#88DFAC", "#B5F6D0"]} image="/images/activities/fantasy-forest/header-icon.svg" title="Nature Walk" subtitle="Caregiver Wellness - Fantasy Forest" >
        <div className="md:w-1/2">
            <Description title={"Take Control"} paragraphs={[
                "There are many things you can't control in life, especially when you have to take care of others. But one thing you can control is making a meal plan each week! This can help reduce some stress.",
            ]} />
            <Description title={"Simple planning"} paragraphs={[
                "Here, you can find a printable template for a weekly meal plan as well as a template for a grocery list. You can fill them out alone or you can include your kids in the planning process. Two benefits of including your kids is that you can teach them about the importance of balance with nutrition, and they are more likely to eat the meals if they help choose them. To increase involvement, a kid-friendly food group plate is included that shows the recommended amounts of each food group with common examples. ",
                "Taking some time once a week to make a meal plan and a grocery list can remove some of the stress during the week.  "
            ]} />
        </div>
        <div className="md:w-1/2">
            <MaterialChecklist title="Materials Needed" items={[
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