import { PageContainer } from '@/components/activity/white-page'

import Activity from '@/components/Template/ActivitySteps';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

const activitySteps = [
    {
        stepNumber: 1,
        title: 'Make a catalog',
        description: 'Create a master list of meals that your family will eat.',
    },
    {
        stepNumber: 2,
        title: 'Plan the week',
        description: "Take some of the meals from your master list for the week's plan. It is ok to have leftover nights!",
    },
    {
        stepNumber: 3,
        title: 'Gather your ingredients',
        description: "Check what ingredients you have and create a grocery list of the things you need.",
    },
];

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Healthy Weekly Meal Planner" subtitle="Caregiver Wellness - Fantasy Forest" homeLink="/" subtitleColor="#35A663" />
        <Activity steps={activitySteps} stepNumberColor="#B5F6D0" />
        <Footer onBack={onBack} onNext={onContinue} leftButtonText="Back" rightButtonText="Continue" leftClickAllowed={true} />
    </PageContainer>

// export default ({ onBack, onContinue, onExit }: Page) =>
//     <EmptyWhitePage
//         onBack={onBack}
//         onContinue={onContinue}
//         onExit={onExit}
//         colors={["#35A663", "#88DFAC", "#B5F6D0"]}
//         image="/images/activities/fantasy-forest/header-icon.svg"
//         title="Healthy Weekly Meal Planner"
//         subtitle="Caregiver Wellness - Fantasy Forest"
//     >
//         <div className="md:w-1/2">
//             <ActivityPreview activities={[
//                 {
//                     id: 1,
//                     title: 'Make a catalog',
//                     description: 'Create a master list of meals that your family will eat.',
//                 },
//                 {
//                     id: 2,
//                     title: 'Plan the week',
//                     description: "Take some of the meals from your master list for the week's plan. It is ok to have leftover nights!",
//                 },
//                 {
//                     id: 3,
//                     title: 'Gather your ingredients',
//                     description: "Check what ingredients you have and create a grocery list of the things you need.",
//                 },
//             ]} />
//         </div>
//     </EmptyWhitePage >