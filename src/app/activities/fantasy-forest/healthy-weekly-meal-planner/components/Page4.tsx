import { PageContainer, AddPhotoButton } from '@/components/activity/white-page'
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

const takeawayText = "Your family is one step closer to healthier eating and a week without the stress of planning what is for dinner! After you create a master meal list and one weekly meal plan, the activity sticker is yours. We hope you enjoy this activity with your kids!"

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Healthy Weekly Meal Planner" subtitle="Caregiver Wellness - Fantasy Forest" homeLink="/" subtitleColor="#35A663" />
        <KeyTakeaways text={takeawayText} />
        <AddPhotoButton icon="/images/activities/fantasy-forest/camera.svg" onClick={() => { }} />
        <Footer
            onNext={onContinue}
            onBack={onBack}
            leftButtonText="Back"
            rightButtonText="Continue"
            leftClickAllowed={true}
            rightHasLink={true}
            rightLinkHref={"/home"}
        />
    </PageContainer>

// export default ({ onBack, onContinue, onExit }: Page) =>
//     <EmptyWhitePage
//         onBack={onBack}
//         onContinue={onContinue}
//         onExit={onExit}
//         colors={["#35A663", "#88DFAC", "#B5F6D0"]}
//         image="/images/activities/fantasy-forest/header-icon.svg"
//         title="Healthy Weekly Meal Planner"
//         subtitle="Caregiver Wellness - Fantasy Forest"p
//     >

//         <div className='w-1/2'>
//             <Description title="Key Takeaways" paragraphs={[
//                 "Your family is one step closer to healthier eating and a week without the stress of planning what is for dinner! After you create a master meal list and one weekly meal plan, the activity sticker is yours. We hope you enjoy this activity with your kids!",
//             ]} />
//             <AddPhotoButton icon="/images/activities/fantasy-forest/camera.svg" onClick={() => { }} />
//         </div>
//     </EmptyWhitePage >