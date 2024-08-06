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
  const takeawayText = `Creating a bedtime routine for your child is a necessary step to creating a secure, healthy home environment. You probably won't be able to get your child used to their bedtime routine right away, but continual practice and regularly doing these steps lets your child get used to the routine. Once your child starts to get used to their routine, it will become a habit and your child will know when it's time for bed no matter their age. Once this routine is set, your child will always have a good nights sleep and help improve their health across their life time.`;

  return (
    <>
      <Header logoSrc={headerIcon} title="Bedtime Bliss: Baby's Sleep Routine" subtitle="Safety - Blossom Haven" homeLink="/" subtitleColor="#F1A533" />

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
