import { PageContainer, AddPhotoButton } from '@/components/activity/white-page'
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

const takeawayText = `
"Progressive relaxation is a great way to center the mind when life feels too overwhelming. After completing this activity you should feel relaxed and focused. If you complete this practice 4 days out of 7 days in one week you can recieve the sticker for this activity! Take a deep breath and take your next step, but don't forget to take a break to relax your mind throughout the week. ",
`

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Progressive Relaxation" subtitle="Caregiver Wellness - Fantasy Forest" homeLink="/" subtitleColor="#35A663" />
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

// export default ({ onBack, onContinue, onExit }: Page) => <EmptyWhitePage
//     onBack={onBack}
//     onContinue={onContinue}
//     onExit={onExit}
//     colors={["#35A663", "#88DFAC", "#B5F6D0"]}
//     image="/images/activities/fantasy-forest/header-icon.svg"
//     title="Progressive Relaxation"
//     subtitle="Caregiver Wellness - Fantasy Forest"
// >
//     <div className="md:w-1/2">
//         <Description title={"Key Takeaways"} paragraphs={[
//             "Progressive relaxation is a great way to center the mind when life feels too overwhelming. After completing this activity you should feel relaxed and focused. If you complete this practice 4 days out of 7 days in one week you can recieve the sticker for this activity! Take a deep breath and take your next step, but don't forget to take a break to relax your mind throughout the week. ",
//         ]} />
//         <AddPhotoButton icon="/images/activities/fantasy-forest/camera.svg" onClick={() => { }} />
//     </div>
// </EmptyWhitePage>