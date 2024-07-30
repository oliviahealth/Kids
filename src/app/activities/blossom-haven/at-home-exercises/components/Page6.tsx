import { PageContainer, AddPhotoButton } from '@/components/activity/white-page'
import KeyTakeaways from '@/components/Template/KeyTakeaways';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";
import photo from "/public/images/dashboard/adventure-bay/Group 114.png"

const takeawayText = `Repeat after me: "I am great at positive affirmations!"
Congratulations on completing the affirmations activity! Recite your
affirmations daily for one week to earn your badge. We hope that you
truly believe these wonderful messages and that they begin to make a
positive difference in your mindset!`;

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Caregiver Wellness - Blossom Haven" subtitle="Mindful Movement" homeLink="/" subtitleColor="#F1A533" />
        <KeyTakeaways text={takeawayText} />
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

// <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#F1A533", "#F8E7BA", "#FFF7E3"]} title="Mindful Movement" image="/images/flower.svg" subtitle="Caregiver Wellness - Blossom Haven" >

//     <div className='w-1/2'>
//         <Description title={"Key Takeaways"} paragraphs={[
//             "These four exercises have been proven to significantly help caregivers of infants, especially those who have recently given birth, have better physical health and therefore improve their mental health. Other than the exercises that are listed above there a few other simple exercises that are much easier to complete. These activities include walking around the house, doing body weight squats, and lunges across the house. You can even include your infant in these exercises such as standing and holding your infant and raising them up and down to help with upper body strength, squats with the infant, and even bench press your infant.",
//             "There are many different exercises that any caregiver can do at home either with their baby or just by themselves, but by taking part in any of these exercises you have a great opportunity to improve your physical and mental health. Please make sure to check with your doctor before beginning any exercises, and make sure that you can safely begin these exercises that will greatly help you out in the long run.",
//         ]} />
//         <AddPhotoButton icon="" onClick={() => { }} />
//     </div>
// </EmptyWhitePage >