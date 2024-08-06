// import { PageContainer } from '@/components/activity/white-page'
// import { useState, useEffect } from 'react';

// import ActivitySteps from '@/components/Template/ActivitySteps';
// import Header from '@/components/Template/Header';
// import Footer from '@/components/Template/Footer';

// import { Page } from '@/components/Pagination';

// import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";
// import { setPriority } from 'os';

// const activitySteps = [
//     {
//         stepNumber: 1,
//         description: "Choose a book that will get your child excited. When choosing a book, you should pick one that has bright pictures, is colorful, and either simple to read or has a rhyming form to it. If you are having trouble selecting a book, the CDC has listed a book designed for children aged one year old found here. ",
//     },
//     {
//         stepNumber: 2,
//         description:
//             "Read through the book on your own first. Find points in the book where you should highlight key words, use funny sounds, and show them the book's pictures.",
//     },
//     {
//         stepNumber: 3,
//         description:
//             "Now it is time to gather other family/support system members to set up story time for your child. These people can be direct family members at home who can read the story with you, and go back and forth between reading to show conversation and how other people talk. ",
//     },
//     {
//         stepNumber: 4,
//         description: "If you have extended family elsewhere, such as grandparents, they could send a voice recording or video of them reading the chosen book so that your child is further exposed to different ways people speak and read. If not, the next best option is to use multiple voices while reading to your child to engage them and show conversations."
//     },

//     {
//         stepNumber: 5,
//         description: "When these steps are completed, it is now time to start story time! Gather everyone who is going to read with you to your child (or set up the voice recording/video) and begin reading to your child. Remember to focus on the colors, pictures, and key words to work on your child's language, literacy, and speech."
//     },

//     {
//         stepNumber: 6,
//         description: "This story time activity will give your child the opportunity to hear all of their caregivers voices and enjoy listening to an engaging story. No matter how many people help you, just getting your child exposed to stories and reading to them will give your child the tools they need to reach their language, literacy, and speech milestones."
//     },
// ];

// export default ({ onBack, onContinue, onExit }: Page) => <>
//     <PageContainer>
//         <Header logoSrc={headerIcon} title="Extended Family Story Time" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
//         <ActivitySteps steps={activitySteps} stepNumberColor="#FFF7E3" />
//         <Footer
//             onNext={onContinue}
//             onBack={onBack}
//             leftButtonText="Back"
//             rightButtonText="Continue"
//             leftClickAllowed={true}
//         />
//     </PageContainer>
// </>

import { PageContainer } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

import IntroductionAndMaterials from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

export default ({ onBack, onContinue, onExit }: Page) => {
    return <PageContainer>
        <Header logoSrc={headerIcon} title="Extended Family Story Time" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
        <IntroductionAndMaterials
            mainBackgroundColor='#FFF7E3'
            emptyCardBackgroundColor='#F8E7BA'
            checkedCardColor='#F1A533'

            introductionTitle='Take Control'
            introductionText={`
              The primary topic of your infant's (0-1 year old) language, literacy, and speech growth is getting them exposed to words through talking, reading, and even singing. Child growth and development experts state that reading to them greatly helps in your child reaching their milestones. For this activity, we're going to work on getting your child exposed to different words, pictures, and sounds by getting yourself and other family members reading with your child. We want to highlight the importance of getting multiple members of your family, or support system, to be included in this activity because it will not only create bonds with your child, but hearing the different ways people speak will strengthen their language, literacy, and speech skills later in life.
          `}

            isChecked={{}}
            handleCheckboxChange={() => { }}

            materialsTitle="Materials Needed"
            materials={[
                {
                    name: "CDC’s Year 1 Book",
                    key: "1",
                    alt: "CDC’s Year 1 Book",
                    image: "/images/activities/blossom-haven/book.svg"
                },
                {
                    name: "Children’s Book",
                    key: "2",
                    alt: "Children’s Book",
                    image: "/images/activities/blossom-haven/book.svg",
                },
                { name: "", image: "", alt: "3", key: "3" },
                { name: "", image: "", alt: "4", key: "4" },
                { name: "", image: "", alt: "5", key: "5" },
                { name: "", image: "", alt: "6", key: "6" },
                { name: "", image: "", alt: "7", key: "7" },
                { name: "", image: "", alt: "8", key: "8" },
            ]}

        />
        <Footer
            onNext={onContinue}
            onBack={onBack}
            leftButtonText="Learn More"
            rightButtonText="Continue"
        />

    </PageContainer>
}

