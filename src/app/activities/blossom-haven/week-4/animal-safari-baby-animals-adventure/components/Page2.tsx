

import { PageContainer } from '@/components/activity/white-page'

import ActivitySteps from '@/components/Template/ActivitySteps';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from '@/components/Pagination';

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

const activitySteps = [
    {
        stepNumber: 1,
        description: "Print out the \"Animal Safari: Baby's Animal Adventure Worksheet\" that is shown on the screen. (If you are not able to print this out that is fine, but it is recommended to print because you'll be able to engage your child more than looking on a screen)",
    },
    {
        stepNumber: 2,
        description:
            "Bring you, your child, and the \"Animal Safari: Baby's Animal Adventure Worksheet\" into a comfortable area where your child won't be distracted.",
    },
    {
        stepNumber: 3,
        description:
            "Begin showing your child the \"Animal Safari: Baby's Animal Adventure Worksheet\". Get them looking at the picture of the animals so they can see what each animal looks like.",
    },
    {
        stepNumber: 4,
        description: "Start with any of the animals that are listed on the worksheet. To complete this activity, you will show your child the animal, say the name of the animal (repeat 2-3 times for your child), and for added fun make the noises of these animals (woof for dog, meow for cat, etc.)."
    },

    {
        stepNumber: 5,
        description: "For increased practice, you can write out the word under the printed animal's name so your child begins to see your handwriting. If able, you can hold your child's hand and write the word while saying and making the animal noises."
    },

    {
        stepNumber: 6,
        description: "After going through all the animals, try and see if your child can copy any of the animal sounds on the worksheet. They may not be able to say the word but possible they could make an animal sound, or anything to make you and your child laugh at!"
    },
];

export default ({ onBack, onContinue, onExit }: Page) => <>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Animal Safari: Baby Animal’s Adventure!" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
        <ActivitySteps steps={activitySteps} stepNumberColor="#FFF7E3" />
        <Footer
            onNext={onContinue}
            onBack={onBack}
            leftButtonText="Back"
            rightButtonText="Continue"
            leftClickAllowed={true}
        />
    </PageContainer>
</>

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
//         <Description title={"Take some stress off."} paragraphs={[
//             "When your child is 4 or 5 years old, they grow and learn a lot. They might start preschool or kindergarten, learn to read and write, or become a good big brother or sister. It can be hard for parents to help their child during this time. It’s important for parents to take a break and relax sometimes.",
//             "This is a guide to help you relax. It's called Progressive Relaxation. You will relax each muscle in your body to feel calm."
//         ]} />
//         <Description title={"?"} paragraphs={[
//             "?"
//         ]} />
//     </div>
//     <div className="md:w-1/2">
//         <MaterialChecklist title={"Materials Needed"} items={[
//             {
//                 name: "Gratitude Jars",
//                 image: "/images/activities/fantasy-forest/gratitude-jar.svg",
//             },
//             {
//                 name: "Pen",
//                 image: "/images/activities/fantasy-forest/pen.svg",
//             },
//             {
//                 name: "Paper",
//                 image: "/images/activities/fantasy-forest/paper.svg",
//             },
//         ]} />
//     </div>
// </EmptyWhitePage >