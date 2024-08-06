import { PageContainer, AddPhotoButton } from '@/components/activity/white-page'
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const takeawayText = `
One of the most important goals of your child's language, literacy, and speech milestones is being able to know and express their emotions. In this age group, they may not be able to verbally express their emotions, but they are constantly working towards it. This activity is a key learning experience that helps to show your child what certain emotions look like visually, and works on helping them assign words that describe their subjective experience. When you are saying the words of the emotions and making the faces, your child is learning to recognize how their emotions sound and look. This activity may be simply used now, but can be changed in your child's later years to further help them show how emotions feel and continue helping your child reach any language, literacy, and speech milestones.
`

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Little Emotional Explorer!" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
        <KeyTakeaways text={takeawayText} />
        <AddPhotoButton bgColor="#FFF7E3" textColor="" icon="/images/activities/blossom-haven/camera.svg" onClick={() => { }} />
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