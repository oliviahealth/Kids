import icon from "@/../../public/images/dashboard/rainbowValley/shared/rainbowValleyIconImage.png";
import image1 from "@/../../public/images/dashboard/rainbowValley/week/1/act1/act1_image4.png";
import Header from "@/components/Template/Header";
import KeyTakeaways from "@/components/Template/KeyTakeaways";
import Footer from "@/components/Template/Footer";

import headerIcon from "/public/images/activities/blossom-haven/header-icon.png";
import { AddPhotoButton } from "@/components/activity/white-page";

const Page3: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const takeawayText = `Your child will experience significant growth and development being within the ages of 0-1, and documenting this growth is essential to knowing that your child is on track to reach their milestones. There are numerous resources to use to get your child on track to reach their goals, but by documenting it you are making sure that those goals are met in the correct time they should. Doing this activity makes you a responsible caregiver checking to make sure your child is on the way to reach all of their future growth and development milestones.`;

  return (
    <>
      <Header logoSrc={headerIcon} title="Baby's Development Diary" subtitle="Safety - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />


      <KeyTakeaways text={takeawayText} photoAlt="Photo" />
      <AddPhotoButton bgColor="#FFF7E3" textColor="#F1A533" icon="/images/activities/blossom-haven/camera.svg" onClick={() => { }} />

      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
        rightHasLink={true}
        rightLinkHref={"/home"}
      />
    </>
  );
};

export default Page3;
