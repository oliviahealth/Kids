import { PageContainer, AddPhotoButton } from '@/components/activity/white-page'
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const takeawayText = `
Trying to make your child's language, literacy, and speech activities may be difficult, but that doesn't mean the activities aren't fun! The pictures and sounds of animals are a great way to keep your child's attention and keep them working on meeting their language, literacy, and speech milestones. The animals provided on the worksheet are those with simple names and sounds that are likely to be seen in other books or worksheets. These worksheets help gauge where your child is at now in their milestones, and help you see their progress as they keep on growing. Keep familiarizing your child with these activities, and they will be on their path to language, literacy, and speech success.
`

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Animal Safari: Baby Animal’s Adventure!" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
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