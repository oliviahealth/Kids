import { PageContainer, AddPhotoButton } from '@/components/activity/white-page'
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

const takeawayText = `
Walking is a great way to reduce stress and increase physical activity. This activity specifically allows for more exploration of your senses and a greater understanding of your surroundings. Earn the sticker for this activity by going on one walk, but don't just stop there! Enjoy the fresh air!
`

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Nature Walk" subtitle="Caregiver Wellness - Fantasy Forest" homeLink="/" subtitleColor="#35A663" />
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
//         title="Nature Walk"
//         subtitle="Caregiver Wellness - Fantasy Forest"
//     >
//         <div className='w-1/2'>
//             <Description title="Key Takeaways" paragraphs={[
//                 "Walking is a great way to reduce stress and increase physical activity. This activity specifically allows for more exploration of your senses and a greater understanding of your surroundings. Earn the sticker for this activity by going on one walk, but don't just stop there! Enjoy the fresh air!",
//             ]} />
//             <AddPhotoButton icon="/images/activities/fantasy-forest/camera.svg" onClick={() => { }} />
//         </div>
//     </EmptyWhitePage >