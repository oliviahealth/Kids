import { PageContainer } from '@/components/activity/white-page'
import { Page } from '@/components/Pagination';

import IntroductionAndMaterials from '@/components/Template/IntroductionAndMaterials';
import Header from '@/components/Template/Header';
import Footer from '@/components/Template/Footer';

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";

export default ({ onBack, onContinue, onExit }: Page) => {
    return <PageContainer>
        <Header logoSrc={headerIcon} title="Little Emotional Explorer!" subtitle="Language, Literacy, & Speech - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />
        <IntroductionAndMaterials
            mainBackgroundColor='#FFF7E3'
            emptyCardBackgroundColor='#F8E7BA'
            checkedCardColor='#F1A533'

            introductionTitle='Take Control'
            introductionText={`
One of the most important areas of growth and development for your 0-1 year old is their language, literacy, and speech milestones. During this time period, you can begin to teach your child the name of their emotions, how those emotions look, and how to pronounce these emotions. A key learning point of this activity is not getting your child to begin speaking, but getting them exposed to words so that they become familiar. For this activity, you will begin the process of teaching your child the words of their emotions by saying and showing those emotions until they are able to say/express them themselves. We'll provide the activity worksheet, but you'll be in charge of teaching your child the words for their emotions.
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

