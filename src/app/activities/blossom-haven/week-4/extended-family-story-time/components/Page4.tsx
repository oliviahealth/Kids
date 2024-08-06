import { PageContainer, AddPhotoButton } from '@/components/activity/white-page'
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const takeawayText = `
The main focus of growing your 0-1 year old's language, literacy, and speech skills is getting them exposed to words, conversations, stories, and the different ways people speak. At this young age, your child is constantly absorbing auditory information to develop their own vocabulary and linguistic structure. Their words now may sound like babbling, but these are the early building blocks for more complex language use. Story time with other family members is a proven activity that helps your child develop those important language, literacy, and speech milestones, and will increase the emotional bond you and others will have with your child. By reading to your child, you'll be setting them up for success in many of their growth and development milestones.
`

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Extended Family Story Time" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
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