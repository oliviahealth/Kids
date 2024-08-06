import { PageContainer } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

import IntroductionAndMaterials from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

export default ({ onBack, onContinue, onExit }: Page) => {
    return <PageContainer>
        <Header logoSrc={headerIcon} title="Animal Safari: Baby Animal’s Adventure!" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
        <IntroductionAndMaterials
            mainBackgroundColor='#FFF7E3'
            emptyCardBackgroundColor='#F8E7BA'
            checkedCardColor='#F1A533'

            introductionTitle='Take Control'
            introductionText={`
Trying to get your 0-1 year old child to reach their language, literacy, and speech milestones can be turned into a super fun activity! While your child may not be able to verbally speak the words they are exposed to, they are constantly hearing and learning the words that are spoken to them. One fun way to get your child exposed to some beginning words is showing them pictures and words of animals! Your child will naturally be interested in seeing pictures of animals and learning their names, and you, the caregiver, will also help them remember these words with their noises as well. This activity will show your child some basic animals with their names, and you will show your child the names and pictures while making their animal sounds.
          `}

            isChecked={{}}
            handleCheckboxChange={() => { }}

            materialsTitle="Materials Needed"
            materials={[
                {
                    name: "Worksheet Template",
                    key: "1",
                    alt: "Worksheet Template",
                    image: "/images/activities/blossom-haven/book.svg"
                },
                {
                    name: "Writing Utensil",
                    key: "2",
                    alt: "Writing Utensil",
                    image: "/images/activities/blossom-haven/pen.svg",
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

