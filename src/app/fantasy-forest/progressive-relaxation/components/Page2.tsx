import { PageContainer } from '@/components/activity/white-page'

import Activity from '@/components/Template/ActivitySteps';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from "@/components/Pagination";

import headerIcon from "/public/images/activities/fantasy-forest/header-icon.svg";

const activitySteps = [
    {
        stepNumber: 1,
        title: 'Get into position',
        description: 'Find a quiet place, lie down, and close your eyes. Keep your eyes closed until the end.',
    },
    {
        stepNumber: 2,
        title: 'Start with your feet',
        description: "Squeeze the muscles in your feet and lower legs, then slowly relax them.",
    },
    {
        stepNumber: 3,
        title: 'Legs and hips',
        description: "Move to your upper legs and hips. Squeeze those muscles, then relax them.",
    },
    {
        stepNumber: 4,
        title: 'Make fists',
        description: "Next, squeeze your hands into fists, then relax them.",
    },
    {
        stepNumber: 5,
        title: 'Abdominal muscles',
        description: "Squeeze your muscles muscles, then relax.",
    },
]

export default ({ onBack, onContinue, onExit }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Progressive Relaxation" subtitle="Caregiver Wellness - Fantasy Forest" homeLink="/" subtitleColor="#35A663" />
        <Activity steps={activitySteps} stepNumberColor="#B5F6D0" />
        <Footer onBack={onBack} onNext={onContinue} leftButtonText="Back" rightButtonText="Continue" leftClickAllowed={true} />
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
//         <ActivityPreview title={"Guidelines"} activities={[
//             {
//                 id: 1,
//                 title: 'Get into position',
//                 description: 'Find a quiet place, lie down, and close your eyes. Keep your eyes closed until the end.',
//             },
//             {
//                 id: 2,
//                 title: 'Start with your feet',
//                 description: "Squeeze the muscles in your feet and lower legs, then slowly relax them.",
//             },
//             {
//                 id: 3,
//                 title: 'Legs and hips',
//                 description: "Move to your upper legs and hips. Squeeze those muscles, then relax them.",
//             },
//             {
//                 id: 4,
//                 title: 'Make fists',
//                 description: "Next, squeeze your hands into fists, then relax them.",
//             },
//             {
//                 id: 5,
//                 title: 'Abdominal muscles',
//                 description: "Squeeze your muscles muscles, then relax.",
//             },

//         ]} />
//     </div>
//     <div className="md:w-1/2">
//         <ActivityPreview title={"  "} activities={[

//             {
//                 id: 6,
//                 title: 'Take a deep breath',
//                 description: "Take a deep breath and hold it while you tighten your chest muscles, then slowly breathe out and relax.",
//             },
//             {
//                 id: 7,
//                 title: 'Shoulders and uppers arms',
//                 description: "Squeeze your shoulders and upper arms, then relax them.",
//             },
//             {
//                 id: 8,
//                 title: 'Neck',
//                 description: "Squeeze the muscles in your neck, then relax them.",
//             },
//             {
//                 id: 9,
//                 title: 'Slow your breathing',
//                 description: "Now, you should feel calm and your breathing should be slower.",
//             },
//             {
//                 id: 10,
//                 title: 'Finish',
//                 description: "Slowly open your eyes and sit up slowly.",
//             },

//         ]} />
//     </div>
// </EmptyWhitePage >