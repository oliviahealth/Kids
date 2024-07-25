import { PageContainer } from '@/components/activity/white-page'

import IntroductionAndMaterials from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import { Page } from '@/components/Pagination';

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

export default ({ onBack, onContinue }: Page) =>
    <PageContainer>
        <Header logoSrc={headerIcon} title="Caregiver Wellness - Blossom Haven" subtitle="Mindful Movement" homeLink="/" subtitleColor="#F1A533" />
        <IntroductionAndMaterials
            mainBackgroundColor='#FFF7E3'
            emptyCardBackgroundColor='#F8E7BA'
            checkedCardColor='#F1A533'

            introductionTitle='Mindful Movement'
            introductionText={`
                Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.
                First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases.
                Please note, for postpartum caregivers, talk to your doctor to make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise.
            `}

            isChecked={{}}
            handleCheckboxChange={() => { }}

            materialsTitle="Materials Needed"
            materials={[
                {
                    name: "Yoga Mat",
                    key: "Yoga Mat",
                    alt: "Yoga Mat",
                    image: "/images/activities/blossom-haven/yogamat.svg"
                },
                {
                    name: "Timer",
                    key: "Timer",
                    alt: "Timer",
                    image: "/images/timer.svg",
                },
                {
                    name: "Water",
                    key: "Water",
                    alt: "Item 3",
                    image: "/images/water.svg",
                },
                {
                    name: "Gym Clothes",
                    key: "Gym Clothes",
                    alt: "Gym Clothes",
                    image: "/images/gymclothes.svg",
                },
                { name: "", image: "", alt: "5", key: "5" },
                { name: "", image: "", alt: "6", key: "6" },
                { name: "", image: "", alt: "7", key: "7" },
                { name: "", image: "", alt: "8", key: "8" },
            ]}

        />
        <Footer onBack={onBack} onNext={onContinue} rightButtonText="Continue" leftButtonText="Learn More" />
    </PageContainer>

// <EmptyWhitePage onBack={onBack} onContinue={onContinue} onExit={onExit} colors={["#F1A533", "#F8E7BA", "#FFF7E3"]} title="Mindful Movement" image="/images/flower.svg" subtitle="Caregiver Wellness - Blossom Haven" >
//     <div className="md:w-1/2">
//         <Subtitle>Mindful Movement</Subtitle>
//         <Description>
//             <p className="mb-4">
//                 Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.
//             </p>
//             <p className="mb-4">
//                 First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases.
//                 <Link className="text-blue-500 hover:text-blue-700 ml-1" href="https://www.acog.org/womens-health/faqs/exercise-after-pregnancy">(Source)</Link>
//             </p>
//             <p className="mb-4">
//                 Please note, for postpartum caregivers, talk to your doctor to make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise.
//                 <Link className="text-blue-500 hover:text-blue-700 ml-1" href="https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/exercise-after-pregnancy/art-20044596">(Source)</Link>
//             </p>
//         </Description>

//     </div>
//     <div className="md:w-1/2">
//         <MaterialChecklist title="Materials Needed" items={[
//             {
//                 name: "Yoga Mat",
//                 image: "/images/yogamat.svg",
//             },
//             {
//                 name: "Timer",
//                 image: "/images/timer.svg",
//             },
//             {
//                 name: "Water",
//                 image: "/images/water.svg",
//             },
//             {
//                 name: "Gym Clothes",
//                 image: "/images/gymclothes.svg",
//             }
//         ]} />
//     </div>
// </EmptyWhitePage >
