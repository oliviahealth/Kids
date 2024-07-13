import { Description, AddPhotoButton, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

export default ({ onBack, onContinue, onExit }: Page) =>
    <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#35A663", "#88DFAC", "#B5F6D0"]} image="/images/activities/fantasy-forest/header-icon.svg" title="Nature Walk" subtitle="Caregiver Wellness - Fantasy Forest" >
        <div className='w-1/2'>
            <Description title="Key Takeaways" paragraphs={[
                "Walking is a great way to reduce stress and increase physical activity. This activity specifically allows for more exploration of your senses and a greater understanding of your surroundings. Earn the sticker for this activity by going on one walk, but don't just stop there! Enjoy the fresh air!",
            ]} />
            <AddPhotoButton icon="/images/activities/fantasy-forest/camera.svg" onClick={() => { }} />
        </div>
    </EmptyWhitePage >