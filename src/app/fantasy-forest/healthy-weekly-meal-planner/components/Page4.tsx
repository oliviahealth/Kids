import { Description, AddPhotoButton, EmptyWhitePage } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

export default ({ onBack, onContinue, onExit }: Page) =>
    <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#35A663", "#88DFAC", "#B5F6D0"]} image="/images/activities/fantasy-forest/header-icon.svg" title="Nature Walk" subtitle="Caregiver Wellness - Fantasy Forest" >

        <div className='w-1/2'>
            <Description title="Key Takeaways" paragraphs={[
                "Your family is one step closer to healthier eating and a week without the stress of planning what is for dinner! After you create a master meal list and one weekly meal plan, the activity sticker is yours. We hope you enjoy this activity with your kids!",
            ]} />
            <AddPhotoButton icon="/images/activities/fantasy-forest/camera.svg" onClick={() => { }} />
        </div>
    </EmptyWhitePage >