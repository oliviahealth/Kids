import { PageContainer } from '@/components/activity/white-page'
import Activity from '@/components/Template/ActivitySteps';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const activitySteps = [
    {
        stepNumber: 1,
        title: 'Diaphragmatic breathing- An Easy, Warm Up Breathing Exercise',
        description: 'This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.',
    },
    {
        stepNumber: 2,
        title: 'Pelvic Tilt Kegel Exercise',
        description: 'Strengthen your lower back and abdominal muscles.',
    },
    {
        stepNumber: 3,
        title: 'Cat-Cow Yoga Exercise',
        description: 'Increase the flexibility of your shoulders, neck, and spine.',
    },
    {
        stepNumber: 4,
        title: 'Postpartum Plank Exercise',
        description: 'An isometric exercise that can help strengthen your core.',
    },
];

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Caregiver Wellness - Blossom Haven" subtitle="Mindful Movement" homeLink="/" subtitleColor="#F1A533" />
        <Activity steps={activitySteps} stepNumberColor="#FFF7E3" />
        <Footer onBack={onBack} onNext={onContinue} leftButtonText="Back" rightButtonText="Continue" leftClickAllowed={true} />
    </PageContainer>


// <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#F1A533", "#F8E7BA", "#FFF7E3"]} title="Mindful Movement" image="/images/flower.svg" subtitle="Caregiver Wellness - Blossom Haven" >
//     <div className="md:w-1/2">
//         <ActivityPreview activities={[
//             {
//                 id: 1,
//                 title: 'Diaphragmatic breathing- An Easy, Warm Up Breathing Exercise',
//                 description: 'This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.',
//             },
//             {
//                 id: 2,
//                 title: 'Pelvic Tilt Kegel Exercise',
//                 description: 'Strengthen your lower back and abdominal muscles.',
//             },
//             {
//                 id: 3,
//                 title: 'Cat-Cow Yoga Exercise',
//                 description: 'Increase the flexibility of your shoulders, neck, and spine.',
//             },
//             {
//                 id: 4,
//                 title: 'Postpartum Plank Exercise',
//                 description: 'An isometric exercise that can help strengthen your core.',
//             },
//         ]} />
//     </div>
//     <div className="md:w-1/2">
//         <ActivityPreview activities={[
//             {
//                 id: 1,
//                 title: 'Diaphragmatic breathing- An Easy, Warm Up Breathing Exercise',
//                 description: 'This exercise is tailored to everyone, and can be done just a few days after a caregiver has given birth.',
//             },
//             {
//                 id: 2,
//                 title: 'Pelvic Tilt Kegel Exercise',
//                 description: 'Strengthen your lower back and abdominal muscles.',
//             },
//             {
//                 id: 3,
//                 title: 'Cat-Cow Yoga Exercise',
//                 description: 'Increase the flexibility of your shoulders, neck, and spine.',
//             },
//             {
//                 id: 4,
//                 title: 'Postpartum Plank Exercise',
//                 description: 'An isometric exercise that can help strengthen your core.',
//             },
//         ]} />
//     </div>
// </EmptyWhitePage >